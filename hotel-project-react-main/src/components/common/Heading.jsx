import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import './Navbar.css'; // Ensure this CSS file is updated

function Navbar() {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  return (
    <nav className={`navbar ${active || pathname !== "/" ? "navbar-scrolled" : ""}`}>
      <div className="container">
        <Link className="navbar-brand" to="/">
          <span className="text-primary fw-bold">Luxury Gardens</span>
        </Link>
        <button className="navbar-toggler" type="button" onClick={() => setOpen(!open)}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${open ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/accommodation">Accommodation</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/experiences">Experiences</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/dining">Dining</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/gallery">Gallery</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/wedding">Wedding</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/events">Events</Link>
            </li>
            <li className="nav-item">
              <Link className="btn btn-outline-primary ms-3" to="/login">Sign In</Link>
            </li>
            <li className="nav-item">
              <Link className="btn btn-primary ms-2" to="/register">Sign Up</Link>
            </li>
          </ul>
        </div>
      </div>
      {(active || pathname !== "/") && (
        <div className="dropdown-menu-container">
          <div className="dropdown-menu p-3">
            <Link className="dropdown-item" to="/">Graphics & Design</Link>
            <Link className="dropdown-item" to="/">Video & Animation</Link>
            <Link className="dropdown-item" to="/">Writing & Translation</Link>
            <Link className="dropdown-item" to="/">AI Services</Link>
            <Link className="dropdown-item" to="/">Digital Marketing</Link>
            <Link className="dropdown-item" to="/">Music & Audio</Link>
            <Link className="dropdown-item" to="/">Programming & Tech</Link>
            <Link className="dropdown-item" to="/">Business</Link>
            <Link className="dropdown-item" to="/">Lifestyle</Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
