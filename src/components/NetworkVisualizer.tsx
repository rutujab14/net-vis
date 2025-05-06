import { useState, useRef, useEffect } from "react";
import * as Papa from "papaparse";
import { Nodes, Edges } from "./Types";
import { Network, DataSet } from "vis-network/standalone";
import NetworkCanvas from "./NetworkCanvas";
import ControlPanel from "./ControlPanel";
import Controls from "./Controls";
import Header from "./Header";
//import ChatBox from "./ChatBox";

const NetworkVisualizer = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const networkRef = useRef<Network | null>(null);

  const [nodes, setNodes] = useState<DataSet<Nodes> | null>(null);
  const [edges, setEdges] = useState<DataSet<Edges> | null>(null);
  const [originalNodes, setOriginalNodes] = useState<Nodes[]>([]);
  const [originalEdges, setOriginalEdges] = useState<Edges[]>([]);
  const [showLabels, setShowLabels] = useState<boolean>(true);

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const [originalEdgeColors, setOriginalEdgeColors] = useState<
    Record<string, string>
  >({});

  const handleFileUpload = (file: File) => {
    if (!file) return;

    Papa.parse<Nodes>(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        const rawData = results.data as unknown as Array<{
          col1: string;
          col2: string;
        }>;
        const nodeSet = new Set<string>();
        rawData.forEach((row) => {
          nodeSet.add(row.col1);
          nodeSet.add(row.col2);
        });

        const parsedNodes: Nodes[] = Array.from(nodeSet).map((id) => ({
          id,
          label: showLabels ? id : "",
        }));

        const parsedEdges: Edges[] = rawData.map((row, index) => ({
          id: String(index),
          from: row.col1,
          to: row.col2,
        }));

        const nodesDataSet = new DataSet<Nodes>(parsedNodes);
        const edgesDataSet = new DataSet<Edges>(parsedEdges);

        setNodes(nodesDataSet);
        setEdges(edgesDataSet);
        setOriginalNodes(parsedNodes);
        setOriginalEdges(parsedEdges);

        initializeNetwork(nodesDataSet, edgesDataSet);
      },
    });
  };

  const initializeNetwork = (
    nodesData: DataSet<Nodes>,
    edgesData: DataSet<Edges>
  ) => {
    if (!containerRef.current) return;

    const data = {
      nodes: nodesData,
      edges: edgesData,
    };

    const options = {
      nodes: {
        shape: "dot",
        size: 15,
        font: { size: 16 },
      },
      edges: {
        font: { align: "top" },
        color: { color: "#666", highlight: "blue", hover: "green" },
      },
      physics: {
        enabled: true,
        solver: "forceAtlas2Based",
        forceAtlas2Based: {
          gravitationalConstant: -50,
          centralGravity: 0.02,
          springLength: 150,
          springConstant: 0.1,
          damping: 1,
          avoidOverlap: 1,
        },
        stabilization: {
          iterations: 100,
          updateInterval: 25,
        },
      },
      interaction: {
        dragNodes: true,
        dragView: true,
        zoomView: true,
        hover: true,
      },
    };

    const network = new Network(containerRef.current, data, options);
    networkRef.current = network;
    setNodes(nodesData);
    setEdges(edgesData);

    network.once("stabilizationIterationsDone", () => {
      network.setOptions({ physics: false });
    });

    network.on("hoverNode", (event) => {
      const hoverNodeId = event.node;
      const connectedEdges = network.getConnectedEdges(hoverNodeId);

      const newEdgeColors: Record<string, string> = { ...originalEdgeColors };

      connectedEdges.forEach((edgeId) => {
        const edge = edgesData.get(edgeId);
        if (edge && !originalEdgeColors[edgeId]) {
          newEdgeColors[edgeId] = edge.color
            ? (edge.color as any).color
            : "#666";
        }
        edgesData.update({
          id: edgeId.toString(),
          color: "red",
        });
      });

      setOriginalEdgeColors(newEdgeColors);
    });

    network.on("blurNode", (event) => {
      const blurNodeId = event.node;
      const connectedEdges = network.getConnectedEdges(blurNodeId);

      connectedEdges.forEach((edgeId) => {
        edgesData.update({
          id: edgeId.toString(),
          color: originalEdgeColors[edgeId] || "#666",
        });
      });
    });
  };

  const handleCrop = () => {
    const network = networkRef.current;
    if (!network || !nodes || !edges) return;

    const selectedNodeIds = network.getSelectedNodes() as string[];
    if (selectedNodeIds.length === 0) {
      alert("Please crop by selecting nodes first.");
      return;
    }

    const selectedEdges = edges
      .get()
      .filter(
        (edge: Edges) =>
          selectedNodeIds.includes(edge.from) ||
          selectedNodeIds.includes(edge.to)
      );

    const selectedNodes = nodes
      .get()
      .filter((node: Nodes) => selectedNodeIds.includes(node.id));

    // Collect first-degree nodes (nodes connected to the selected nodes)
    const firstDegreeNodeIds = new Set<string>();
    selectedEdges.forEach((edge: Edges) => {
      if (selectedNodeIds.includes(edge.from)) {
        firstDegreeNodeIds.add(edge.to);
      }
      if (selectedNodeIds.includes(edge.to)) {
        firstDegreeNodeIds.add(edge.from);
      }
    });

    // Add first-degree nodes to selectedNodes (without duplicating already selected ones)
    selectedNodes.push(
      ...nodes
        .get()
        .filter(
          (node: Nodes) =>
            firstDegreeNodeIds.has(node.id) &&
            !selectedNodeIds.includes(node.id)
        )
    );

    initializeNetwork(
      new DataSet<Nodes>(selectedNodes),
      new DataSet<Edges>(selectedEdges)
    );
  };

  const handleReset = () => {
    if (!nodes || !edges || !originalNodes.length || !originalEdges.length)
      return;

    const currentShowLabels = showLabels;

    nodes.clear();
    edges.clear();

    nodes.add(originalNodes);
    edges.add(originalEdges);
    const updatedNodes = originalNodes.map((node) => ({
      ...node,
      label: currentShowLabels ? node.id : "", // If showLabels is true, show the node id as label
    }));

    nodes.update(updatedNodes);
    initializeNetwork(nodes, edges);

    setShowLabels(currentShowLabels);
  };

  const handleGeneSearchZoom = (geneName: string) => {
    if (!networkRef.current || !nodes || !edges) return;

    const matchedNode = nodes.get().find((node: Nodes) => {
      return (
        node.label?.toLowerCase() === geneName.toLowerCase() ||
        (node as any).gene?.toLowerCase() === geneName.toLowerCase()
      );
    });

    if (!matchedNode) {
      alert("Gene not found");
      return;
    }

    const nodeId = matchedNode.id;

    // Highlight the node (optional)
    const updatedNodes = nodes.get().map((n: Nodes) =>
      n.id === nodeId
        ? {
            ...n,
            color: { background: "#ff6666", border: "#cc0000" },
          }
        : n
    );
    nodes.update(updatedNodes); // Update node appearance in original dataset

    // Focus on the matched node
    networkRef.current.focus(nodeId, {
      scale: 1,
      animation: {
        duration: 1000,
        easingFunction: "easeInOutQuad",
      },
    });
  };

  const handleOnChange = (term: string) => {
    setSearchTerm(term);

    if (term && nodes) {
      const lowerValue = term.toLowerCase();
      const filtered = nodes
        .get()
        .map((node: Nodes) => node.label ?? "")
        .filter((label: string) => label.toLowerCase().startsWith(lowerValue))
        .slice(0, 5); // limit to top 5 suggestions
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchTerm(suggestion); // Update search term with clicked suggestion
    setSuggestions([]); // Clear suggestions
    handleGeneSearchZoom(suggestion); // Trigger the search
  };

  useEffect(() => {
    if (nodes) {
      const currentNodes = nodes.get();
      const updatedNodes = currentNodes.map((node: Nodes) => ({
        id: node.id,
        label: showLabels ? node.id : "",
      }));
      nodes.update(updatedNodes);
    }
  }, [showLabels]);

  return (
    <div>
      <Header />

      <ControlPanel
        searchterm={searchTerm}
        suggestions={suggestions}
        onSearch={handleGeneSearchZoom}
        onFileUpload={handleFileUpload}
        onChange={handleOnChange}
        onCrop={handleCrop}
        onSuggestionClick={handleSuggestionClick}
      />
      <Controls
        onFileUpload={handleFileUpload}
        onCrop={handleCrop}
        onReset={handleReset}
        showLabels={showLabels}
        setShowLabels={setShowLabels}
      />

      <NetworkCanvas ref={containerRef} />

      {/* <ChatBox
        networkRef={networkRef}
        nodes={nodes}
        edges={edges}
        setNodes={setNodes}
        setEdges={setEdges}
        handleReset={handleReset}ß
        initializeNetwork={initializeNetwork}
      /> */}
    </div>
  );
};

export default NetworkVisualizer;
