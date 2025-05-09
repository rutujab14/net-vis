import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  return (
    <>
      <div className="container">
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          {/* <a
            href="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
          >
            {" "} */}
          <svg className="bi me-2" width="40" height="32" aria-hidden="true">
            <use xlinkHref="#bootstrap"></use>
          </svg>{" "}
          <Link
            to="/"
            className={`d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none ${
              location.pathname === "/" ? "active" : ""
            }`}
          >
            <span className="fs-4">Network Visualizer</span>
          </Link>
          {/* </a> */}
          <ul className="nav nav-pills">
            <li className="nav-item">
              <Link
                to="/"
                className={`nav-link ${
                  location.pathname === "/" ? "active" : ""
                }`}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/faq"
                className={`nav-link ${
                  location.pathname === "/faq" ? "active" : ""
                }`}
              >
                FAQs
              </Link>
            </li>
          </ul>
        </header>
      </div>
    </>
  );
};

export default Header;
