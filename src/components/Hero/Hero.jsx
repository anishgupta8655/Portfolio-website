import React from "react";
import "./Hero.css";
import Anish_img from "../../assets/Anish_img.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

export const Hero = () => {
  return (
    <div id="hero" className="hero">
      <img
        src={Anish_img}
        alt="Profile"
        style={{
          height: "250px",
          width: "250px",
          border: "2px solid pink",
          borderRadius: "50%",
        }}
      />
   

      <h1>
        <span>I'm Anishkumar Gupta,</span> MERN Full Stack Developer based in
        Noida
      </h1>
      <p>
        I'm a MERN Full Stack Developer from Noida, with 6 months of internship
        experience at Cetpa Infotech Pvt. Ltd.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">
          <a
            href="https://drive.google.com/file/d/1QzJ24xDr1JXU4nDZuyIuoAumB5bQbUme/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            My Resume
          </a>
        </div>
      </div>
    </div>
  );
};
