import { Pane } from "tweakpane";
import { useEffect, useRef } from "react";
import "./Style.css";

interface Props {
  searchterm: string;
  suggestions: string[];
  onSearch: (term: string) => void;
  onChange: (term: string) => void;
  onSuggestionClick: (suggestion: string) => void;
}

const ControlPanel = ({
  searchterm,
  suggestions,
  onSearch,
  onChange,
  onSuggestionClick,
}: Props) => {
  const paneRef = useRef<HTMLDivElement>(null);
  const objRef = useRef({ inputFromParent: searchterm });

  useEffect(() => {
    if (!paneRef.current) return;

    const pane = new Pane({ container: paneRef.current });

    // Adding input binding to Tweakpane
    pane.addBinding(objRef.current, "inputFromParent", {
      label: "Search Gene",
      onChange: (value: string) => {
        onChange(value); // Handle the change in search term
      },
    });

    // Adding a button to trigger search
    pane
      .addButton({
        title: "Search", // Button Label
      })
      .on("click", () => {
        onSearch(objRef.current.inputFromParent); // Call search with the bound value
      });

    return () => pane.dispose();
  }, [searchterm, suggestions, onSearch, onChange, onSuggestionClick]);

  return (
    <div ref={paneRef} className="search-term">
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
