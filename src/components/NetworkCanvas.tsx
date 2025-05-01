// NetworkCanvas.tsx
import { forwardRef } from "react";

const NetworkCanvas = forwardRef<HTMLDivElement>((_props, ref) => {
  return (
    <div
      ref={ref}
      id="network"
      style={{ height: "600px", width: "600px", border: "1px solid #ccc" }}
    />
  );
});

export default NetworkCanvas;
