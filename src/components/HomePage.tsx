import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";
import "./Style.css";
import ContentPasteSearchIcon from "@mui/icons-material/ContentPasteSearch";
import PsychologyIcon from "@mui/icons-material/Psychology";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import TipsAndUpdatesOutlinedIcon from "@mui/icons-material/TipsAndUpdatesOutlined";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import UpdateOutlinedIcon from "@mui/icons-material/UpdateOutlined";
import { SvgIcon } from "@mui/material";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography";

const HomePage = () => {
  const [open, setOpen] = React.useState(false);
  const [fileName, setFileName] = React.useState<string | null>(null);
  const [selectedFile, setSelectedFile] = React.useState<File | null>(null);
  const navigate = useNavigate();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (file.type !== "text/csv") {
      alert("Only CSV files are supported!");
      return;
    }
    setFileName(file.name);
    setSelectedFile(file);
    console.log("Selected file:", file);
  };

  const handleSubmit = () => {
    if (!selectedFile) return;
    const reader = new FileReader();

    reader.onload = () => {
      try {
        const result = reader.result as string;
        sessionStorage.setItem("uploadedCSV", result);
        sessionStorage.setItem("uploadedCSVName", selectedFile.name);
        navigate("/network-visualizer"); // go to next page
      } catch (err) {
        alert("An error occurred while reading the file.");
      }
    };

    reader.onerror = () => {
      alert("Failed to read the file.");
    };

    reader.readAsText(selectedFile);
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Header />

      <div className="px-3 py-3 my-3 text-center">
        <h2 className="display-5 fw-bold text-body-emphasis">
          Welcome to the Network Visualizer App
        </h2>
        <div className="col-lg-6 mx-auto">
          <p className="mb-2">
            This web application allows you to explore and understand complex
            networks through interactive visualizations. Whether you're looking
            at relationships in a social network, connections in an
            organization, or any kind of data that involves links between
            elements, this app helps you make sense of it all. This is just the
            beginning—future updates will include both 2D and 3D views to
            provide even deeper insight into your data.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            {/* <Link
              to="/network-visualizer"
              className="text-blue-600 hover:underline text-xl"
            >
              <button type="button" className="btn btn-primary btn-md px-3">
                Visualize Network -{">"}
              </button>
            </Link> */}
            <div>
              <Button onClick={handleOpen}>Visualize Network -{">"}</Button>
              <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Select a File</DialogTitle>
                <DialogContent>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 2,
                      mt: 1,
                    }}
                  >
                    <input
                      type="file"
                      accept=".csv"
                      onChange={(e) => {
                        handleFileChange(e);
                        const file = e.target.files?.[0];
                        if (file) {
                        }
                      }}
                    />
                    {fileName && (
                      <Typography variant="body2">
                        Selected file: {fileName}
                      </Typography>
                    )}
                  </Box>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Cancel</Button>
                  <Button
                    onClick={() => {
                      if (selectedFile) {
                        handleSubmit();
                        console.log("Processing file:", selectedFile.name);
                      }
                      handleClose();
                    }}
                    disabled={!selectedFile}
                  >
                    Submit
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
          </div>
        </div>
      </div>

      <div className="container px-3 py-3" id="featured-3">
        <h2 className="pb-2 border-bottom">Features</h2>
        <div className="row g-3 py-3 row-cols-1 row-cols-lg-3">
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <SvgIcon component={ContentPasteSearchIcon} />
            </div>
            <h4 className="fs-2 text-body-emphasis">Interactive Exploration</h4>
            <p>Click and drag nodes to explore connections dynamically.</p>
          </div>
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <SvgIcon component={PsychologyIcon} />
            </div>
            <h4 className="fs-2 text-body-emphasis">Relationship Mapping</h4>
            <p>
              Easily visualize how different elements in a network are
              connected.
            </p>
          </div>
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <SvgIcon component={ArticleOutlinedIcon} />
            </div>
            <h4 className="fs-2 text-body-emphasis">
              Clean and Intuitive Interface
            </h4>
            <p>Simple layout that makes navigating complex networks easier.</p>
          </div>
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <SvgIcon component={TipsAndUpdatesOutlinedIcon} />
            </div>
            <h4 className="fs-2 text-body-emphasis">
              Insightful Visualization
            </h4>
            <p>Identify patterns, clusters, and key nodes at a glance.</p>
          </div>
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <SvgIcon component={RocketLaunchOutlinedIcon} />
            </div>
            <h4 className="fs-2 text-body-emphasis">Optimized Performance</h4>
            <p>Designed to handle medium-sized networks smoothly.</p>
          </div>
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <SvgIcon component={UpdateOutlinedIcon} />
            </div>
            <h4 className="fs-2 text-body-emphasis">Future-Ready</h4>
            <p>
              Planned support for both 2D and 3D visual modes, along with
              AI-integrated chatbot assistance.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
