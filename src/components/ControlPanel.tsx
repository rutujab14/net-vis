import { useState, useEffect, useRef } from "react";

import { Pane } from "tweakpane";

console.log(Pane);

const ControlPanel: React.FC = () => {
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const paneContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!paneContainerRef.current) return;

    const pane = new Pane({
      container: paneContainerRef.current,
    }) as any;

    const params = { color: backgroundColor };

    pane
      .addInput(params, "color", {
        view: "color",
      })
      .on("change", (ev: { value: string }) => {
        setBackgroundColor(ev.value);
      });

    return () => {
      pane.dispose();
    };
  }, []);

  return (
    <div style={{ backgroundColor, height: "100vh", position: "relative" }}>
      {/* Mount Tweakpane inside this container */}
      <div
        ref={paneContainerRef}
        style={{ position: "absolute", top: 0, right: 0 }}
      />
    </div>
  );
};

export default ControlPanel;
