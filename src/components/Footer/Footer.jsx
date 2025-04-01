import React from "react";
import "./Footer.css";
import footer_logo from "../../assets/footer_logo.svg";
import user_icon from "../../assets/user_icon.svg";

const Footer = () => {
  return (
    <div id="footer" className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <div className="">
            <h1 style={{color:'yellow'}}> AnishKumar Gupta:.....</h1>
          </div>
          <p>
            The MERN Stack is a JavaScript-based technology stack used for
            building modern web applications. It consists of MongoDB (NoSQL
            database), Express.js (backend framework), React.js (frontend
            library), and Node.js (runtime environment). MERN allows developers
            to use JavaScript for both frontend and backend, ensuring seamless
            development. 
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" name="" placeholder="Enter Your Email" id="" />
          </div>
          <div className="footer-subscribe">Connect me </div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          @ 2024 AnishKumar Gupta. All rights
        </p>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
