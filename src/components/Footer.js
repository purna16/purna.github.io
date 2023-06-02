import "./Footer.css";
import React from "react";
import { FaHome, FaPhone, FaMailBulk } from "react-icons/fa";
import { DiGithubBadge } from "react-icons/di";
// import { render } from "@testing-library/react";

const Footer = () => {
  // render()

  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Intern at IIT, BOMBAY.</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />{" "}
              purnanaidu567@gmail.com
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />{" "}
              +91 824-777-3535
            </h4>
          </div>
          <div className="GitHub">
            <h4>
              <DiGithubBadge
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />{" "}
              github.com/purna16
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About Me</h4>
          <p>
            Hi, My Name is Purna Siva Sai.
          </p>
          <p>
            <a href="https://drive.google.com/file/d/1TRtuhX1xltUnnJoyp2XIHNJLOHtw86C1/view"> Click Here to check out my Résumé!</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
