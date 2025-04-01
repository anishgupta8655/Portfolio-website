import React from "react";
import "./Hero.css";
import profileImg from "../../assets/profile_img.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

export const Hero = () => {
  return (
    <div id="hero" className="hero">
      <img src={profileImg} alt="" />
      <h1>
        <span>I'am Anishkumar Gupta,</span> Mern Full Stack Developer based in
        Noida
      </h1>
      <p>
        I'am Mern full Stack Developer From Noida, Noida with 6 months
        internship in Cetpa Infotech Pvt.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          {" "}
          <AnchorLink
            className="anchor-link"
            offset={50}
            href="#contact"
          >Connect with me</AnchorLink>{" "}
          
        </div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};
