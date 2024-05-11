import React, { useState } from "react";

const NavItem = ({ link, text }) => (
  <li className="nav-item">
    <a className="nav-link fw-bold text-dark" href={link}>
      {text}
    </a>
  </li>
);

const Head = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-md navbar-light bg-light">
          <button className="navbar-toggler" type="button" onClick={toggleMenu}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
            <ul className="navbar-nav mx-auto">
              <NavItem link="/" text="SHOP" />
              <NavItem link="/skills" text="SKILLS" />
              <NavItem link="/stories" text="STORIES" />
              <NavItem link="/about" text="ABOUT" />
              <NavItem link="/contact" text="CONTACT US" />
            </ul>
          </div>
        </nav>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="text-center fw-bold text-dark">
              <h1 className="mb-4">DISCOVER OUR PRODUCTS</h1>
              <p>
                The lorem ipsum text is a jumbling of the work De Finibus
                Bonorum et Malorum, written by Cicero, a politician and orator
                who lived in ancient Rome. The use of lorem ipsum as a text
                placeholder dates back to the 1500.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Head;
