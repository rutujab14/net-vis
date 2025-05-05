import { useEffect, useRef } from "react";
import { Pane } from "tweakpane";

console.log("Checking for Pane import: ", Pane);

const ControlPanel = () => {
  const paneContainerRef = useRef<HTMLDivElement | null>(null); // allow null

  useEffect(() => {
    if (!paneContainerRef.current) return; // guard clause for null

    const pane = new Pane({
      container: paneContainerRef.current, // Use React ref to attach to DOM
    });

    const paneWithBlade = pane as unknown as {
      addBlade: Function;
      addFolder: Function;
    }; // Type assertion

    const params = {
      labels: true,
      fullscreen: () => {
        console.log("Toggle fullscreen");
      },
      screenshot: () => {
        console.log("Take screenshot");
      },
      reset: () => {
        console.log("Reset clicked");
      },
      enrich: () => {
        console.log("Send genes to Enrichr");
      },
    };

    paneWithBlade.addBlade({
      view: "checkbox",
      label: "Show Labels",
      value: params.labels,
      onChange: (value: boolean) => {
        params.labels = value;
        console.log("Labels toggled:", value);
      },
    });

    // Add buttons to the pane using addBlade with type 'button'
    paneWithBlade.addBlade({
      view: "button",
      label: "Enter/Exit Fullscreen",
      onClick: params.fullscreen,
    });

    paneWithBlade.addBlade({
      view: "button",
      label: "Take a screenshot",
      onClick: params.screenshot,
    });

    paneWithBlade.addBlade({
      view: "button",
      label: "Reset",
      onClick: params.reset,
    });

    const folder = paneWithBlade.addFolder({
      title: "Gene Enrichment Analysis",
    });
    folder.addBlade({
      view: "button",
      label: "Send genes to Enrichr",
      onClick: params.enrich,
    });

    return () => pane.dispose(); // Clean up
  }, []);

  return <div ref={paneContainerRef} />;
};

export default ControlPanel;
