import React from "react";
import Carousel from "react-elastic-carousel";
import Cards from "../data/Cards";
import { useRef } from "react";

function ODSSection() {
  const carouselRef = React.useRef(null);
  let resetTimeout;
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 1 },
    { width: 768, itemsToShow: 1 },
    { width: 1200, itemsToShow: 1 },
  ];
  return (
    <div className="ODSContainer">
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
              }, 2000); // same time
            }
          }
        }}
      >
        <Cards number="1" />
        <Cards number="2" />
        <Cards number="3" />
        <Cards number="4" />
      </Carousel>
    </div>
  );
}

export default ODSSection;
