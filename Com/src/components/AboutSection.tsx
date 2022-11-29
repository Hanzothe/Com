import React from "react";
import candida from "../data/img/img.jpg";
import cris from "../data/img/cris.jpg";

function AboutSection() {
  return (
    <div className="AboutContainer">
      <div id="candida">
        <div className="container">
          <img className="container__image" src={candida} />
          <div className="container__text">
            <h2 class="font-sans font-bold text-2xl">
              Quem é Dr. Cândida Costa?
            </h2>
            <br></br>
            <p class="font-sans text-xl">
              Uma mulher preta, doutora, cientista, professora na Unicamp,
              bióloga, mãe solo e fundadora do ecossistema COMSCIÊNCIA CONECTA.
            </p>
          </div>
        </div>
      </div>
      <div id="cris">
        <div className="container">
          <img className="container__image2" src={cris} />
          <div className="container__text">
            <h2 class="font-sans font-bold text-2xl">Quem é a Cris Mendes?</h2>
            <br></br>
            <p class="font-sans text-2xl">
              Uma mulher parda, analista, secretaria, coordenadora de politicas
              inclusivas, PCD, e palestrante do ecossistema COMSCIÊNCIA CONECTA.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
