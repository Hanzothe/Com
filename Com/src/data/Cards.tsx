import React from "react";
import "../Global.css";

const number = String;

const Cards = ({ number }) => (
  <div className="card">
    <h2>{number}</h2>
  </div>
);

export default Cards;
