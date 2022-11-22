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
      <h1 class="place-self-center  font-sans font-bold text-6xl">
        Ajudamos empresas a atingir suas metas da ODS da ONU
      </h1>
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
        <img src={ODS1} width="500" alt="logo" />
        <img src={ODS4} width="500" alt="logo" />
        <img src={ODS5} width="500" alt="logo" />
        <img src={ODS10} width="500" alt="logo" />
      </Carousel>
    </div>
  );
}

export default ODSSection;
