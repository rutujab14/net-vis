// NetworkCanvas.tsx
import { forwardRef } from "react";

const NetworkCanvas = forwardRef<HTMLDivElement>((_props, ref) => {
  return (
    <div ref={ref} id="network" style={{ height: "100%", width: "100%" }} />
  );
});

export default NetworkCanvas;
