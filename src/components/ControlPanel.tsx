import React, { useState } from "react";
import { Pane } from "react-tweakpane"; // import Pane from react-tweakpane

const ControlPanel = () => {
  const [backgroundColor, setBackgroundColor] = useState("#ffffff"); // Example state

  return (
    <div>
      <Pane>
        {/* Create an input for color selection */}
        <input
          type="color"
          value={backgroundColor}
          onChange={(e) => setBackgroundColor(e.target.value)}
        />
      </Pane>
      {/* You can also display or apply the background color */}
      <div style={{ backgroundColor, width: "100px", height: "100px" }}></div>
    </div>
  );
};

export default ControlPanel;
