import { Button } from "@mui/material";

interface Props {
  onFileUpload: (file: File) => void;
  onCrop: () => void;
  onReset: () => void;
  showLabels: boolean;
  setShowLabels: (value: boolean) => void;
}

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
          //onChange={onFileUpload}
          style={{ display: "none" }}
        />
        <Button variant="contained" component="span">
          Choose File
        </Button>
      </label>
      <Button variant="contained" onClick={onCrop}>
        Crop Network
      </Button>{" "}
      <span />
      <Button variant="contained" onClick={onReset}>
        Reset
      </Button>
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
