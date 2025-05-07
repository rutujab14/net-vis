import { Pane } from "tweakpane";
import { useEffect, useRef } from "react";
import "./Style.css";

interface Props {
  searchterm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  suggestions: string[];
  onSearch: (term: string) => void;
  onFileUpload: (file: File) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCrop: () => void;
  onReset: () => void;
  setShowLabels: (label: boolean) => void;
  onSuggestionClick: (suggestion: string) => void;
}

const ControlPanel = ({
  searchterm,
  setSearchTerm,
  suggestions,
  onSearch,
  onFileUpload,
  onChange,
  onCrop,
  onReset,
  setShowLabels,
  onSuggestionClick,
}: Props) => {
  const paneRef = useRef<HTMLDivElement>(null);
  const objRef = useRef({ inputFromParent: searchterm });

  useEffect(() => {
    if (!paneRef.current) return;

    const pane = new Pane({ container: paneRef.current });

    objRef.current.inputFromParent = searchterm;

    // File Upload
    pane.addButton({ title: "Upload CSV" }).on("click", () => {
      const input = document.createElement("input");
      input.type = "file";
      input.accept = ".csv";

      input.onchange = (e) => {
        const target = e.target as HTMLInputElement;
        if (target.files && target.files[0]) {
          const file = target.files[0];
          onFileUpload(file);
        }
      };
      input.click();
    });

    // Crop Network
    pane.addButton({ title: "Crop Network" }).on("click", () => {
      onCrop();
    });

    // Reset
    pane.addButton({ title: "Reset" }).on("click", () => {
      onReset();
    });

    // Show Labels
    const folder = pane.addFolder({ title: "Labels" });
    folder.addButton({ title: "On" }).on("click", () => {
      setShowLabels(true);
    });
    folder.addButton({ title: "Off" }).on("click", () => {
      setShowLabels(false);
    });

    return () => pane.dispose();
  }, [onChange, onFileUpload]);

  return (
    <>
      <div className="control-panel">
        <div ref={paneRef} />
        <div style={{ margin: "10px 10px" }}>
          <input
            type="text"
            placeholder="Search gene..."
            value={searchterm}
            onChange={onChange}
            onKeyDown={(e) => e.key === "Enter" && onSearch(searchterm)}
            style={{ padding: 6, width: 200 }}
          />

          <button
            onClick={() => onSearch(searchterm)}
            style={{ marginLeft: 8 }}
          >
            Search
          </button>

          {suggestions.length > 0 && (
            <ul
              style={{
                border: "1px solid #ccc",
                width: 200,
                marginTop: 4,
                padding: 0,
                listStyle: "none",
                background: "#fff",
                position: "absolute",
                zIndex: 1000,
                maxHeight: 200,
                overflowY: "auto",
              }}
            >
              {suggestions.map((s, idx) => (
                <li
                  key={idx}
                  style={{
                    padding: "6px",
                    cursor: "pointer",
                    borderBottom: "1px solid #eee",
                  }}
                  onClick={() => {
                    setSearchTerm(s);
                    onSuggestionClick(s);
                  }}
                >
                  {s}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default ControlPanel;
