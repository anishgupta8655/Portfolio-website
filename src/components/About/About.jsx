import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import Anish_img from "../../assets/Anish_img.jpg";
const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="about-sections">
        <div className="about-left">
          <img src={Anish_img} alt="" style={{height:'500px',width:'400px',borderRadius:'30px'}} />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am an experienced Mern Full Stack Developer with a strong focus
              on front-end development.
            </p>
            <p>
              I have a passion for creating user-friendly interfaces and solving
              complex problems. I am currently available for Industry projects
              and collaborations.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript & React.js</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>Node.js & Express.js</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>MongoDB & Mysql</p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achevements">
        <div className="about-achievement">
          <h1>1 +</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>PROJECT COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>15 +</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
