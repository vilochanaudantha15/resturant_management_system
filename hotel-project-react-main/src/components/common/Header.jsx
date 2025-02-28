import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

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
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link className="link" to="/">
            <span className="text">Luxury Gardens</span>
          </Link>
         
        </div>
        <div className="links">
          <span>Accommodation</span>
          <span>Experiences</span>
          <span>Dining</span>
          <span>Gallery</span>
          <span>Wedding</span>
          <span>Events</span>
          
            
         
            <>
              <Link to="/login" className="link">Sign in</Link>
              <Link className="link" to="/register">
                <button>Sign Up</button>
              </Link>
            </>
          
        </div>
      </div>
      {(active || pathname !== "/") && (
        <>
          <hr />
         
          <hr />
        </>
      )}
    </div>
  );
}

export default Navbar;