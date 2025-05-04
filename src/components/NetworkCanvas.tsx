// NetworkCanvas.tsx
import { forwardRef } from "react";

const NetworkCanvas = forwardRef<HTMLDivElement>((_props, ref) => {
  return (
    <div
      ref={ref}
      id="network"
      style={{
        height: "100vh",
        width: "100vw",
        //border: "1px solid #ccc",
        margin: 0,
        padding: 0,
        overflow: "hidden",
      }}
    />
  );
});

export default NetworkCanvas;
