import * as React from "react";
import { Button, styled } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

interface Props {
  onFileUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onCrop: () => void;
  onReset: () => void;
  showLabels: boolean;
  setShowLabels: (value: boolean) => void;
}

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const Controls = ({
  onFileUpload,
  onCrop,
  onReset,
  showLabels,
  setShowLabels,
}: Props) => {
  return (
    <div>
      <h2>Network Visualizer App</h2> <br />
      <label htmlFor="file-upload">
        <input
          id="file-upload"
          type="file"
          accept=".csv"
          onChange={onFileUpload}
          style={{ display: "none" }}
        />
        <Button
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={<CloudUploadIcon />}
        >
          Upload files
          <VisuallyHiddenInput
            type="file"
            onChange={(event) => console.log(event.target.files)}
            multiple
          />
        </Button>
      </label>
      <button onClick={onCrop}>Crop Network</button> <span />
      <button onClick={onReset}>Reset</button>
      <br />
      <div className="form-check form-switch">
        <label className="form-check-label" htmlFor="switchCheckChecked">
          Show Labels
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="switchCheckChecked"
            checked={showLabels}
            onChange={(e) => setShowLabels(e.target.checked)}
          />
        </label>
      </div>
    </div>
  );
};

export default Controls;
