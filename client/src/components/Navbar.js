import React from "react";
// import { Link } from "react-router-dom";
import Auth from "../utils/auth";

function Navbar() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="/">
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
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {Auth.loggedIn() ? (
              <>
                <span>Hey there, {Auth.getProfile().data.username}!</span>
                <button className="btn btn-lg btn-light m-2" onClick={logout}>
                  logout
                </button>
                <li className="navbar-nav">
                  <a className="nav-link" href="/newservice">
                    AddService
                  </a>
                </li>
                <li className="navbar-nav">
                  <a className="nav-link" href="/updateservice">
                    UpdateService
                  </a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="/bookings">
                    BookNow!
                  </a>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item active">
                  <a className="nav-link" href="/bookings">
                    BookNow!
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
