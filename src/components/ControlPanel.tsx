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

    /* // Adding input binding to Tweakpane
    pane.addBinding(objRef.current, "inputFromParent", {
      label: "Search Gene",
    }); */

    // wrapper div
    const wrapper = document.createElement("div");
    wrapper.style.marginBottom = "10px";

    // Input element
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Search gene...";
    input.value = searchterm;
    input.style.padding = "6px";
    input.style.width = "200px";

    input.oninput = (e) => {
      const val = (e.target as HTMLInputElement).value;
      onChange(val);
    };

    // Suggestion list
    const ul = document.createElement("ul");
    ul.style.border = "1px solid #ccc";
    ul.style.width = "200px";
    ul.style.marginTop = "4px";
    ul.style.padding = "0";
    ul.style.listStyle = "none";
    ul.style.background = "#fff";
    ul.style.position = "absolute";
    ul.style.zIndex = "1000";
    ul.style.display = suggestions.length > 0 ? "block" : "none";

    suggestions.forEach((s) => {
      const li = document.createElement("li");
      li.textContent = s;
      li.style.padding = "6px";
      li.style.cursor = "pointer";
      li.style.borderBottom = "1px solid #eee";
      li.onclick = () => {
        onSuggestionClick(s);
      };
      ul.appendChild(li);
    });

    // Search button
    const button = document.createElement("button");
    button.textContent = "Search";
    button.style.marginLeft = "8px";
    button.onclick = () => {
      onSearch(input.value);
    };

    // Assemble
    wrapper.appendChild(input);
    wrapper.appendChild(button);
    wrapper.appendChild(ul);

    // Add to pane container
    paneRef.current.appendChild(wrapper);

    return () => pane.dispose();
  }, [searchterm, suggestions, onSearch, onChange, onSuggestionClick]);

  return <div ref={paneRef} className="search-term" />;
};

export default ControlPanel;
