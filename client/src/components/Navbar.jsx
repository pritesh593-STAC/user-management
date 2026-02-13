import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">

        {/* Logo */}
        <Link to="/" className="navbar-brand">
          User Dashboard
        </Link>

        {/* Mobile toggle button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible menu */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="ms-auto d-flex gap-2">

            <Link to="/" className="btn btn-outline-light">
              Home
            </Link>

            <Link to="/add" className="btn btn-primary">
              Add User
            </Link>

          </div>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
