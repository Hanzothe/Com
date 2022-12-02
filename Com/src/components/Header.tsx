import React from "react";
import "../Global.css";
import ComLogo from "../data/img/logo.png";

function Header() {
  return (
    <div id="header">
      <h2 className="header_logo ">
        <img id="img-logo" src={ComLogo}></img>
      </h2>
    </div>
  );
}

export default Header;
