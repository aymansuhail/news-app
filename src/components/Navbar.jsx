import React from "react";

const Navbar = ({ setCategory, setCountry }) => {
  const handleCategoryClick = (category) => {
    setCategory(category);
  };

  const handleCountryClick = (country) => {
    setCountry(country);
  };

  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span className="badge bg-light text-dark fs-4">Fine-News</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link"
                style={{ cursor: "pointer" }}
                onClick={() => handleCategoryClick("technology")}
              >
                Technology
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                style={{ cursor: "pointer" }}
                onClick={() => handleCategoryClick("business")}
              >
                Business
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                style={{ cursor: "pointer" }}
                onClick={() => handleCategoryClick("health")}
              >
                Health
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                style={{ cursor: "pointer" }}
                onClick={() => handleCategoryClick("sports")}
              >
                Sports
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Select Country
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => handleCountryClick("us")}
                  >
                    USA
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => handleCountryClick("in")}
                  >
                    India
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => handleCountryClick("gb")}
                  >
                    United Kingdom
                  </a>
                </li>
                {/* Add more countries as needed */}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
