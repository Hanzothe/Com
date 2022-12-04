import React from "react";
import Carousel from "react-elastic-carousel";
import Cards from "../data/Cards";
import { useRef } from "react";
import ODS1 from "../data/img/ODS1.jpg";
import ODS4 from "../data/img/ODS4.jpg";
import ODS5 from "../data/img/ODS5.jpg";
import ODS10 from "../data/img/ODS10.jpg";

function ODSSection() {
  const o1 = <img src={ODS1} width="500" alt="logo" />;
  const o4 = <img src={ODS4} width="500" alt="logo" />;
  const o5 = <img src={ODS5} width="500" alt="logo" />;
  const o10 = <img src={ODS10} width="500" alt="logo" />;

  return (
    <div className="ODSContainer">
      <h1 class="place-self-center font-extrabold text-5xl text-txtbrown">
        Ajudamos empresas a atingir suas metas da ODS da ONU
      </h1>
      <div class="grid grid-flow-col justify-center gap-20">
        <img src={ODS1} width="250" alt="logo" />
        <img src={ODS4} width="250" alt="logo" />
        <img src={ODS5} width="250" alt="logo" />
        <img src={ODS10} width="250" alt="logo" />
      </div>
    </div>
  );
}

export default ODSSection;
