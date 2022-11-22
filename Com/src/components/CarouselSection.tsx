import React from "react";
import Carousel from "react-elastic-carousel";
import Cards from "../data/Cards";
import { useRef } from "react";
import Action1 from "../data/img/Action1.jpg";
import Action2 from "../data/img/Action2.jpg";
import Action3 from "../data/img/Action3.jpg";
import Action4 from "../data/img/Action4.jpg";

function CarouselSection() {
  const action1 = <img src={Action1} height="350px" width="450px" alt="logo" />;
  const action2 = <img src={Action2} height="350px" width="420px" alt="logo" />;
  const action3 = <img src={Action3} height="350px" width="420px" alt="logo" />;
  const action4 = <img src={Action4} height="300px" width="465px" alt="logo" />;

  const carouselRef = React.useRef(null);
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
        showArrows={true}
        className="cursor-pointer"
        enableAutoPlay
        autoPlaySpeed={2000}
        itemPadding={[0, 20]}
        isRTL={false}
        onNextEnd={({ index }) => {
          if (
            carouselRef?.current.state.activePage ===
            carouselRef?.current.state.pages.length - 1
          ) {
            const itemsPerPage = Math.floor(
              carouselRef?.current.props.children.length /
                carouselRef?.current.getNumOfPages()
            );

            if (itemsPerPage === carouselRef?.current.state.activeIndex) {
              clearTimeout(resetTimeout);
              resetTimeout = setTimeout(() => {
                carouselRef?.current?.goTo(0);
              }, 2000);
            }
          }
        }}
      >
        <Cards number={action1} />
        <Cards number={action2} />
        <Cards number={action3} />
        <Cards number={action4} />
      </Carousel>
    </div>
  );
}

export default CarouselSection;
