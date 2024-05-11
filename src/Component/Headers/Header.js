import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faHeart,
  faShoppingCart,
  faUser,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

import Logo from "../../Assets/Image/Logo.png";

const Navigation = () => {
  return (
    <div className="col text-right">
      <ul className="nav">
        <li className="nav-item d-none d-md-inline">
          <a className="nav-link" href="/">
            <FontAwesomeIcon icon={faSearch} />
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            <FontAwesomeIcon icon={faHeart} />
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            <FontAwesomeIcon icon={faShoppingCart} />
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            <FontAwesomeIcon icon={faUser} />
          </a>
        </li>
        <li className="nav-item d-none d-md-inline">
          <a className="nav-link" href="/">
            <FontAwesomeIcon icon={faGlobe} />
          </a>
        </li>
      </ul>
    </div>
  );
};

const Header = () => {
  return (
    <header className="container-fluid bg-light text-white py-3">
      <div className="row align-items-center justify-content-between">
        <div className="col-6">
          <div className="row align-items-center">
            <div className="col">
              <img src={Logo} alt="Logo" style={{ maxWidth: "150px" }} />
            </div>
            <div className="col">
              <h1 className="font-weight-bold text-black">Logo</h1>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="row justify-content-end">
            <div className="col">
              <Navigation />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
