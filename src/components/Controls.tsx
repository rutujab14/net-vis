import * as React from "react";

interface Props {
  onFileUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
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
      <h2>Upload CSV to Visualize Network</h2> <br />
      <input type="file" accept=".csv" onChange={onFileUpload} />
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
