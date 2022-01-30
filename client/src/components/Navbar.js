import React from "react";
// import { Link } from "react-router-dom";
import Auth from "../utils/auth";
import About from "../screens/About";

function Navbar() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg" id="nav">
        <a className="navbar-brand" id="nav-title" href="/">
          GTX-Mobile-Detailing
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <i className="fa fa-bars" style={{ color: "royalblue" }}></i>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {Auth.loggedIn() ? (
              <>
                <span id="username">
                  Hey there, {Auth.getProfile().data.username}!
                </span>
                <button
                  id="logoutbtn"
                  className="btn btn-sm btn-light m-2"
                  onClick={logout}
                >
                  logout
                </button>
                <li id="navbtns" className="navbar-nav">
                  <a className="nav-link" href="/newservice">
                    Add Service
                  </a>
                </li>

                <li id="navbtns" className="nav-item active">
                  <a className="nav-link" id="nav-book-btn" href="/booking">
                    Book Now
                  </a>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item active">
                  <a className="nav-link" href="/booking">
                    Book Now
                  </a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="/about">
                    About GTX
                  </a>
                </li>
              </>
            )}

            <li className="nav-item">
              <a className="nav-link" href="/login"></a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
