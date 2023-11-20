import React from "react";
import Rectangle from "../images/Rectangle 1.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <p>
            <img src={Rectangle} alt="" /> Contanct Us
          </p>
          <h6>
            Have a project in mind?
            <br />
            Let's make it happen
          </h6>
        </div>

        <div className="footer-top-right">
          <p>
            22 Street Name, Suburb,
            <br />
            8000, Cape Town, South Africa
            <br /> +27 21 431 0001
            <br />
            enquirie@website.co.za
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <ul style={{ paddingLeft: "0" }} className="footer-links">
            <li>Terms of service</li>
            <li>Privacy policy</li>
            <li>Impersum</li>
          </ul>
          <ul className="footer-links">
            <li>Facebook</li>
            <li>Instagram</li>
            <li>X</li>
          </ul>
          <ul className="footer-links">
            <li>Github</li>
            <li>LinkedIn</li>
            <li>Teams</li>
          </ul>
          <ul className="footer-links">
            <li>Youtube</li>
            <li>Behance</li>
            <li>Dribble</li>
          </ul>
        </div>

        <div className="footer-bottom-right">
          <a href="/">Explore open jobs</a>
          <br />
          <p>2000 - 2023 Company Name</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
