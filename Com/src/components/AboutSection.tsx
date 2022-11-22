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
              Utilizou de seu vínculo acadêmico para fomentar a importância da
              Mulher na Ciência e levantar questões de gênero e restrições que
              as mulheres enfrentam dentro das instituições de Ensino Superior.
            </p>
            <p class="font-sans text-xl">
              Com o aumento da sua visibilidade dentro das ações sociais,
              utiliza da sua história pessoal para encorajar e apoiar mulheres
              que precisam de ajuda para alavancar suas carreiras seja em qual
              área for. Oferece pela Comsciência Conecta consultorias, palestras
              , workshops com foco em Liderança Feminina, Equidade de Gênero,
              Diversidade e Inclusão na Ciência tanto para Corporações como para
              mulheres em situações vulneraveis.
            </p>
          </div>
        </div>
      </div>
      <div id="cris">
        <div className="container2">
          <img className="container__image2" src={cris} />
          <div className="container__text2">
            <h2 class="font-sans font-bold text-2xl">Quem é a Cris Mendes?</h2>
            <br></br>
            <p class="font-sans text-2xl">
              "Cats like boxes because they are cryptic animals; they like to
              hide," Stephen Zawistowski, science adviser for the American
              Society for the Prevention of Cruelty to Animals, told Business
              Insider. "And a box gives them a place of safety and security."
            </p>
            <p class="font-sans text-2xl">
              While inside a box, cats feel that they cannot be snuck up on from
              behind or the side — anything that wants to approach them must
              come directly into their field of vision. In effect, such hiding
              spaces allow them to watch the world around them without being
              seen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
