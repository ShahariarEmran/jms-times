import { AiFillHome } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarCenteredExample"
          aria-controls="navbarCenteredExample"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>

        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarCenteredExample"
        >
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                <AiFillHome size={23} />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                খবর
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                খবর
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                খবর
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                খবর
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                খবর
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                খবর
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                খবর
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
