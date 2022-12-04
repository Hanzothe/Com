import React from "react";
import parter1 from "../data/img/agbara.png";
import parter2 from "../data/img/eldorado.png";
import parter3 from "../data/img/grupo.png";
import parter4 from "../data/img/trans.png";
import parter5 from "../data/img/cnx.jpg";
import parter6 from "../data/img/voicers.png";

function Parters() {
  return (
    <div className="parterssection text-txtbrown">
      Nossos Parceiros
      <div className="partners">
        <img src={parter1} height="100px" width="130px" />
        <img src={parter2} height="130rem" width="130rem" />
        <img src={parter3} height="130rem" width="130rem" />
        <img src={parter4} height="130rem" width="130rem" />
        <img src={parter5} height="130rem" width="130rem" />
        <img src={parter6} height="130rem" width="130rem" />
      </div>
    </div>
  );
}

export default Parters;
