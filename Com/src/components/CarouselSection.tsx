import React from "react";
import Carousel from "react-elastic-carousel";
import { useRef } from "react";
import Action1 from "../data/img/Action1.jpg";
import Action2 from "../data/img/Action2.jpg";
import Action3 from "../data/img/Action3.jpg";
import Action4 from "../data/img/Action4.jpg";

function CarouselSection() {
  const carouselRef = useRef(null);
  let resetTimeout;

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 },
  ];

  return (
    <div className="CarouselContainer">
      <Carousel
        breakPoints={breakPoints}
        ref={carouselRef}
        pagination={false}
        enableAutoPlay={true}
        showArrows={false}
        autoPlaySpeed={4000}
        isRTL={false}
        onNextEnd={({ index }) => {
          clearTimeout(resetTimeout);
          resetTimeout = setTimeout(() => {
            carouselRef?.current?.goTo(0);
          }, 4000); // same time
        }}
      >
        <div className="card">
          <img src={Action1}></img>
        </div>
        <div className="card">
          <img src={Action2}></img>
        </div>
        <div className="card">
          <img src={Action3}></img>
        </div>
        <div className="card">
          <img src={Action4}></img>
        </div>
      </Carousel>
    </div>
  );
}

export default CarouselSection;
