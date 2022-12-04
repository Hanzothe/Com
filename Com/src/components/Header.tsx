import React from "react";
import "../Global.css";
import Logo from "../data/img/logos/Logo6.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Header() {
  return (
    <div id="header">
      <img id="img-logo" src={Logo}></img>
      <div id="social">
        <a href="url">
          <InstagramIcon fontSize="large" className="icons" />
        </a>
        <a href="url">
          <WhatsAppIcon fontSize="large" className="icons" />
        </a>
        <a href="url">
          <FacebookIcon fontSize="large" className="icons" />
        </a>
        <a href="url">
          <LinkedInIcon fontSize="large" className="icons" />
        </a>
      </div>
    </div>
  );
}

export default Header;
