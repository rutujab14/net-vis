import { Link } from "react-router-dom";
import Header from "./Header";
import "./HomePage.css";

const HomePage = () => {
  return (
    <>
      <Header />

      <div className="px-4 py-5 my-5 text-center">
        <h1 className="display-5 fw-bold text-body-emphasis">
          Welcome to the Network Visualizer App
        </h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            This web application allows you to explore and understand complex
            networks through interactive visualizations. Whether you're looking
            at relationships in a social network, connections in an
            organization, or any kind of data that involves links between
            elements, this app helps you make sense of it all. This is just the
            beginning—future updates will include both 2D and 3D views to
            provide even deeper insight into your data.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <Link
              to="/network-visualizer"
              className="text-blue-600 hover:underline text-xl"
            >
              <button
                type="button"
                className="btn btn-primary btn-lg px-4 gap-3"
              >
                Network Visualizer App
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="container px-4 py-5" id="featured-3">
        <h2 className="pb-2 border-bottom">Features</h2>
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <img src="src/assets/search.svg" alt="search" width="30px"></img>
            </div>
            <h3 className="fs-2 text-body-emphasis">Interactive Exploration</h3>
            <p>Click and drag nodes to explore connections dynamically.</p>
          </div>
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <img
                src="src/assets/gear-wide-connected.svg"
                alt="search"
                width="30px"
              ></img>
            </div>
            <h3 className="fs-2 text-body-emphasis">Relationship Mapping</h3>
            <p>
              Easily visualize how different elements in a network are
              connected.
            </p>
          </div>
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <img
                src="src/assets/file-earmark-easel.svg"
                alt="search"
                width="30px"
              ></img>
            </div>
            <h3 className="fs-2 text-body-emphasis">
              Clean and Intuitive Interface
            </h3>
            <p>Simple layout that makes navigating complex networks easier.</p>
          </div>
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <img
                src="src/assets/lightbulb.svg"
                alt="search"
                width="30px"
              ></img>
            </div>
            <h3 className="fs-2 text-body-emphasis">
              Insightful Visualization
            </h3>
            <p>Identify patterns, clusters, and key nodes at a glance.</p>
          </div>
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <img
                src="src/assets/rocket-takeoff.svg"
                alt="search"
                width="30px"
              ></img>
            </div>
            <h3 className="fs-2 text-body-emphasis">Optimized Performance</h3>
            <p>Designed to handle medium-sized networks smoothly.</p>
          </div>
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <img src="src/assets/globe2.svg" alt="search" width="30px"></img>
            </div>
            <h3 className="fs-2 text-body-emphasis">Future-Ready</h3>
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
