import { Pane } from "tweakpane";
import { useEffect, useRef, useState } from "react";
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
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (paneRef.current && !paneRef.current.contains(event.target as Node)) {
        setIsDropdownVisible(false); // Hide the dropdown when clicked outside
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (!paneRef.current) return;

    const pane = new Pane({ container: paneRef.current });
    objRef.current.inputFromParent = searchterm;

    const mainFolder = pane.addFolder({ title: "Control Panel" });

    // File Upload
    mainFolder
      .addButton({ title: "Upload", label: "Upload CSV" })
      .on("click", () => {
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
    mainFolder
      .addButton({ title: "Crop", label: "Crop Network (Shift+Drag)" })
      .on("click", () => {
        onCrop();
      });

    // Reset
    mainFolder
      .addButton({ title: "Reset", label: "Reset Network" })
      .on("click", () => {
        onReset();
      });

    // Show Labels
    const folder = mainFolder.addFolder({ title: "Labels" });
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
        <div style={{ margin: "10px 0" }}>
          <input
            type="text"
            placeholder="Search gene..."
            value={searchterm}
            onChange={(e) => {
              onChange(e);
              setIsDropdownVisible(true);
            }}
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
                    setIsDropdownVisible(false);
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
