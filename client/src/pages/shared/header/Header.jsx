import React from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Header.css";
const Header = () => {
  const { user, logOut } = useAuth();
  const handleLogOut = () => {
    logOut().then(() => {});
  };
  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-white">
      <div className="container-fluid">
        <Link className="navbar-brand ms-md-5  display-1 fs-2 " to="/">
          <span className="bg-dark text-white px-2">Tour</span>{" "}
          <span className="bg-blue text-white px-2">Hobe</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            {user ? (
              <>
                <NavLink className="nav-link fw-bold" to="/addnew">
                  Add a new trip
                </NavLink>
                <NavLink className="nav-link fw-bold" to="/manage">
                  Manage all booking
                </NavLink>
                <NavLink className="nav-link fw-bold" to="/mybooking">
                  My booking
                </NavLink>
                <div>
                  {user.photoURL ? (
                    <img
                      width="13%"
                      className="rounded-circle border border-2"
                      src={user.photoURL}
                      alt=""
                    />
                  ) : (
                    ""
                  )}
                  {user.displayName ? (
                    <span className="displayName fw-bolder">
                      {user.displayName}
                    </span>
                  ) : (
                    <span className="displayName fw-bolder">
                      {user.email.split("@")[0]}
                    </span>
                  )}
                  <button
                    onClick={handleLogOut}
                    id="logoutBtn"
                    className="fs-4 border-0 bg-white"
                  >
                    {" "}
                    <i className="fas fa-lg fa-sign-out-alt display-1"></i>
                  </button>
                </div>
              </>
            ) : (
              <Link className="nav-link" to="/login">
                <button className="login-btn border-0">Sign In</button>{" "}
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
