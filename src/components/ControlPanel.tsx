import { Pane } from "tweakpane";
import { useEffect, useRef, useState } from "react";
import "./Style.css";

interface Props {
  searchterm: string;
  suggestions: string[];
  onSearch: (term: string) => void;
  onFileUpload: (file: File) => void;
  onChange: (term: string) => void;
  onCrop: () => void;
  onReset: () => void;
  onSuggestionClick: (suggestion: string) => void;
}

const ControlPanel = ({
  searchterm,
  suggestions,
  onSearch,
  onFileUpload,
  onChange,
  onCrop,
  onReset,
  onSuggestionClick,
}: Props) => {
  const paneRef = useRef<HTMLDivElement>(null);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false); // State to control dropdown visibility
  const objRef = useRef({ inputFromParent: searchterm });

  useEffect(() => {
    if (!paneRef.current) return;

    const pane = new Pane({ container: paneRef.current });

    // Adding input binding to Tweakpane
    pane.addBinding(objRef.current, "inputFromParent", {
      label: "Search Gene",
      onChange: (value: string) => {
        onChange(value); // Handle the change in search term
        setIsDropdownVisible(true); // show drop down
      },
    });

    // Adding a button to trigger search
    pane
      .addButton({
        title: "Search", // Button Label
      })
      .on("click", () => {
        onSearch(objRef.current.inputFromParent); // Call search with the bound value
        setIsDropdownVisible(false); // hide drop down
      });

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

    return () => pane.dispose();
  }, [searchterm, onSearch, onChange, onFileUpload]);

  return (
    <div ref={paneRef} className="search-term">
      {isDropdownVisible && suggestions.length > 0 && (
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
            maxHeight: "200px", // Limit dropdown height
            overflowY: "auto", // Scrollable if too many suggestions
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
                onSuggestionClick(s); // Handle suggestion click
                setIsDropdownVisible(false); // hide drop down
              }}
            >
              {s}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ControlPanel;
