import React, { useState } from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {
  const [result, setResult] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "4ef7d3e5-c651-4882-a995-79107e458d76");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      alert(data.message);
     
    } else {
     
      setResult(data.message);
      alert(data.message);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently available to take on project,so feel anything that you
            want me to work on. You can contact any time.{" "}
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>anishgupta695@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" /> <p>8299002199</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" /> <p>Noida (U P)</p>
            </div>
          </div>
        </div>
        <form action="" onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter Your Name" name="name" /> <br />
          <label htmlFor="">Your Email</label>
          <input
            type="email"
            placeholder="Enter Your Email"
            name="email"
            id=""
          />{" "}
          <br />
          <label htmlFor="">Write your massage here</label>
          <textarea
            name="message"
            placeholder="Enter your message"
            rows="8"
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
