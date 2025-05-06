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
    });

    // Adding a button to trigger search
    pane
      .addButton({
        title: "Search", // Button Label
      })
      .on("click", () => {
        onSearch(searchterm); // Call Search function
      });

    return () => pane.dispose();
  }, [searchterm, onSearch]);

  return (
    <div ref={paneRef} className="search-term">
      {/* Search Input */}
      <div style={{ margin: "10px 0", position: "relative" }}>
        <input
          type="text"
          placeholder="Search gene..."
          value={searchterm}
          onChange={(e) => onChange(e.target.value)}
          style={{ padding: 6, width: 200 }}
        />

        <Button
          variant="contained"
          onClick={() => onSearch(searchterm)}
          style={{ marginLeft: 8 }}
        >
          Search
        </Button>

        {/* Suggestions */}
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
    </div>
  );
};

export default ControlPanel;
