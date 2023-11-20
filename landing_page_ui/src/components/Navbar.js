import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../images/logo.svg";

const Navbar = () => {
  const navigate = useNavigate();
  const navToContact = () => {
    navigate("/contact-us");
  };
  const navToHome = () => {
    navigate("/");
  };

  return (
    <div className="navbar">
      <img onClick={navToHome} src={Logo} alt="logo" />
      <div>
        <ul className="navbar-menu">
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="industries">Industries</a>
          </li>
          <li>
            <a href="cases">Cases</a>
          </li>
          <li>
            <a href="contact-us">Contact</a>
          </li>
        </ul>
      </div>
      <button onClick={navToContact} className="navbar-cta">
        Let's Talk
      </button>
    </div>
  );
};

export default Navbar;
