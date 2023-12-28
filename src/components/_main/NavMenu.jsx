import { Container, Nav, Navbar } from "react-bootstrap";
import imgLogo from "../../assets/images/logo.png";
import { Link } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";

const NavMenu = () => {
  const location = useLocation();

  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
      <div class="container">
        <RouterLink className="navbar-brand" to={"/"}>
          <img className="brand-logo" src={imgLogo} alt="Indians-Abroad Logo" />
          <span>IndiansAbroad</span>
        </RouterLink>
        {/* <a class="" href="/"></a> */}
        {location?.pathname === "/" && (
          <>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    duration={1000}
                    activeClass="active"
                    spy={true}
                    to="home"
                    smooth={true}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    duration={1000}
                    activeClass="active"
                    spy={true}
                    to="services"
                    smooth={true}
                  >
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    duration={1000}
                    activeClass="active"
                    spy={true}
                    to="objectives"
                    smooth={true}
                  >
                    Objectives
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    duration={1000}
                    activeClass="active"
                    spy={true}
                    to="about"
                    smooth={true}
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    duration={1000}
                    activeClass="active"
                    spy={true}
                    to="contact"
                    smooth={true}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavMenu;
