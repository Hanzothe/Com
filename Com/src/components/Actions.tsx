import React from "react";
import CarouselSection from "./CarouselSection";

function Actions() {
  return (
    <div className="actions">
      <div class="h-5/6 w-11/12 grid bg-cor4 items-center rounded-md">
        <h4 class="place-self-center font-bold font-sans text-7xl">
          Veja algumas das nossas ações:
        </h4>
        <CarouselSection />
      </div>
    </div>
  );
}

export default Actions;
