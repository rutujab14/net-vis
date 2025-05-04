import { Link } from "react-router-dom";
import Header from "./Header";
import "./HomePage.css";
import ContentPasteSearchIcon from "@mui/icons-material/ContentPasteSearch";
import PsychologyIcon from "@mui/icons-material/Psychology";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import TipsAndUpdatesOutlinedIcon from "@mui/icons-material/TipsAndUpdatesOutlined";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import UpdateOutlinedIcon from "@mui/icons-material/UpdateOutlined";
import { SvgIcon } from "@mui/material";

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

      <div
        id="myCarousel"
        className="carousel slide mb-6"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="0"
            className="active"
            aria-label="Slide 1"
            aria-current="true"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
            className=""
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
            className=""
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item carousel-item-next carousel-item-start">
            <svg
              className="bd-placeholder-img"
              width="100%"
              height="100%"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              preserveAspectRatio="xMidYMid slice"
            >
              <rect
                width="100%"
                height="100%"
                fill="var(--bs-secondary-color)"
              ></rect>
            </svg>
            <div className="container">
              <div className="carousel-caption text-start">
                <SvgIcon component={ContentPasteSearchIcon} />
                <h1>Interactive Exploration</h1>
                <p className="opacity-75">
                  Click and drag nodes to explore connections dynamically.
                </p>
                <p>
                  <a href="#" className="icon-link">
                    Try It Now — It’s Free!
                    <svg className="bi" aria-hidden="true">
                      <use xlinkHref="#chevron-right"></use>
                    </svg>
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <svg
              className="bd-placeholder-img"
              width="100%"
              height="100%"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              preserveAspectRatio="xMidYMid slice"
            >
              <rect
                width="100%"
                height="100%"
                fill="var(--bs-secondary-color)"
              ></rect>
            </svg>
            <div className="container">
              <div className="carousel-caption">
                <SvgIcon component={PsychologyIcon} />
                <h1>Relationship Mapping</h1>
                <p>
                  Easily visualize how different elements in a network are
                  connected.
                </p>
                <p>
                  <a className="btn btn-lg btn-primary" href="#">
                    Visualize Your Network Instantly
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <svg
              className="bd-placeholder-img"
              width="100%"
              height="100%"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              preserveAspectRatio="xMidYMid slice"
            >
              <rect
                width="100%"
                height="100%"
                fill="var(--bs-secondary-color)"
              ></rect>
            </svg>
            <div className="container">
              <div className="carousel-caption">
                <SvgIcon component={ArticleOutlinedIcon} />
                <h1>Clean and Intuitive Interface</h1>
                <p>
                  Simple layout that makes navigating complex networks easier.
                </p>
                <p>
                  <a className="btn btn-lg btn-primary" href="#">
                    Launch the App
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <svg
              className="bd-placeholder-img"
              width="100%"
              height="100%"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              preserveAspectRatio="xMidYMid slice"
            >
              <rect
                width="100%"
                height="100%"
                fill="var(--bs-secondary-color)"
              ></rect>
            </svg>
            <div className="container">
              <div className="carousel-caption">
                <SvgIcon component={TipsAndUpdatesOutlinedIcon} />
                <h1>Insightful Visualization</h1>
                <p>Identify patterns, clusters, and key nodes at a glance.</p>
                <p>
                  <a className="btn btn-lg btn-primary" href="#">
                    Start Exploring Your Data
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <svg
              className="bd-placeholder-img"
              width="100%"
              height="100%"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              preserveAspectRatio="xMidYMid slice"
            >
              <rect
                width="100%"
                height="100%"
                fill="var(--bs-secondary-color)"
              ></rect>
            </svg>
            <div className="container">
              <div className="carousel-caption">
                <SvgIcon component={RocketLaunchOutlinedIcon} />
                <h1>Optimized Performance</h1>
                <p>Designed to handle medium-sized networks smoothly.</p>
                <p>
                  <a className="btn btn-lg btn-primary" href="#">
                    Get Started in Seconds
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item active carousel-item-start">
            <svg
              className="bd-placeholder-img"
              width="100%"
              height="100%"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              preserveAspectRatio="xMidYMid slice"
            >
              <rect
                width="100%"
                height="100%"
                fill="var(--bs-secondary-color)"
              ></rect>
            </svg>
            <div className="container">
              <div className="carousel-caption text-end">
                <SvgIcon component={UpdateOutlinedIcon} />
                <h1>Future-Ready</h1>
                <p>
                  Planned support for both 2D and 3D visual modes, along with
                  AI-integrated chatbot assistance.
                </p>
                <p>
                  <a className="btn btn-lg btn-primary" href="#">
                    Experience the Visualizer
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* <div className="container px-4 py-5" id="featured-3">
        <h2 className="pb-2 border-bottom">Features</h2>
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <SvgIcon component={ContentPasteSearchIcon} />
            </div>
            <h3 className="fs-2 text-body-emphasis">Interactive Exploration</h3>
            <p>Click and drag nodes to explore connections dynamically.</p>
          </div>
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <SvgIcon component={PsychologyIcon} />
            </div>
            <h3 className="fs-2 text-body-emphasis">Relationship Mapping</h3>
            <p>
              Easily visualize how different elements in a network are
              connected.
            </p>
          </div>
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <SvgIcon component={ArticleOutlinedIcon} />
            </div>
            <h3 className="fs-2 text-body-emphasis">
              Clean and Intuitive Interface
            </h3>
            <p>Simple layout that makes navigating complex networks easier.</p>
          </div>
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <SvgIcon component={TipsAndUpdatesOutlinedIcon} />
            </div>
            <h3 className="fs-2 text-body-emphasis">
              Insightful Visualization
            </h3>
            <p>Identify patterns, clusters, and key nodes at a glance.</p>
          </div>
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <SvgIcon component={RocketLaunchOutlinedIcon} />
            </div>
            <h3 className="fs-2 text-body-emphasis">Optimized Performance</h3>
            <p>Designed to handle medium-sized networks smoothly.</p>
          </div>
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <SvgIcon component={UpdateOutlinedIcon} />
            </div>
            <h3 className="fs-2 text-body-emphasis">Future-Ready</h3>
            <p>
              Planned support for both 2D and 3D visual modes, along with
              AI-integrated chatbot assistance.
            </p>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default HomePage;
