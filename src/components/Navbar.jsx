import React, { useRef, useState } from "react";
import "./Navbar.css";
//  import logos from "../assets/logo.png";
import underline from "../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../assets/menu_open.svg";
import menu_close from "../assets/menu_close.svg";
const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();  
  const openMenu = () => {
    menuRef.current.style.right = "0px";
  };
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };
  return (
    <div id="navbar" className="navbar">
      {/* <img src={logos} alt="" className="nav"/> */}
      <div className="">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          {" "}
          <h1 onClick={() => setMenu("contact")}>Anish</h1>
          {menu === "contact" && <img src={underline} alt="" />}
        </AnchorLink>
        
      </div>
      <img src={menu_open} onClick={openMenu} alt="" className="nav-mob-open" />
      <ul className="nav-menu" ref={menuRef}>
        <img
          src={menu_close}
          onClick={closeMenu}
          className="nav-mob-close"
          alt=""
        />
        <li>
          {" "}
          <AnchorLink className="anchor-link" offset={50} href="#home">
            <p onClick={() => setMenu("home")}>Home</p>{" "}
            {menu === "home" ? <img src={underline} alt="" /> : <></>}
          </AnchorLink>
        </li>
        <li>
          {" "}
          <AnchorLink className="anchor-link" offset={50} href="#about">
            {" "}
            <p onClick={() => setMenu("about")}>About</p>
            {menu === "about" ? <img src={underline} alt="" /> : <></>}
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#services">
            <p onClick={() => setMenu("services")}>Services</p>
            {menu === "services" ? <img src={underline} alt="" /> : <></>}
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#work">
            <p onClick={() => setMenu("portfolio")}>Portfolio</p>
            {menu === "portfolio" ? <img src={underline} alt="" /> : <></>}
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            {" "}
            <p onClick={() => setMenu("contact")}>Contact</p>
            {menu === "contact" ? <img src={underline} alt="" /> : <></>}
          </AnchorLink>
        </li>
      </ul>

      <div className="nav-connect">
        {" "}
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect with me
        </AnchorLink>{" "}
      </div>
    </div>
  );
};

export default Navbar;
