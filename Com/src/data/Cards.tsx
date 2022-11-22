import React from "react";
import "../Global.css";
import logo from "../data/img/img.jpg";

const Cards = ({ number }) => (
  <div className="card">
    <h2>{number}</h2>
  </div>
);

export default Cards;
