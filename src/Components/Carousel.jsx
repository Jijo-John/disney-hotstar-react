import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import styled from "styled-components";
import DetailCard from "./DetailCard";

// import "@slick-carousel/slick/slick.css";
// import "@slick-carousel/slick/slick-theme.css";

const Carousel = (props) => {
  const { data, imgsrc } = props;
  const sw = window.innerWidth;

  console.log(sw)

  const settings = {
    className: "center",
    width: "100%",
    centerMode: true,
    infinite: true,
    slidesToShow: 1,
    centerPadding: '0px',
    speed: 500,
    // autoplay: true,
    arrows: false,
  };

  return (
    <div>
      <Slider {...settings} className="slider-container">
        {data.slice(0, 5).map((item) => {
          return (
            <>
            <SliderItem key={item.id}>
              <Link to={props.type + "/" + (item.name || item.title).toLowerCase().replace(/ /g, "-") + "/" + item.id}>

                <DetailCard
                  bgimage={imgsrc + item.backdrop_path}
                  title={item.name || item.title}
                  description={item.overview}
                  width={"100%"}
                  home={true}
                />

              </Link>
            </SliderItem>
            </>
          );
        })}
      </Slider>
    </div>
  );
};
Slider = styled(Slider)`
  width: 100%;
  position: relative;
  overflow: hidden;
  color: white;
  
  .slick-track {
    display: flex;
  }
  .slick-arrow {
    display: none !important;
  }
  .slick-list {
    padding-left: 50px !important;
    padding-right: 50px !important;
    width: calc(100% - (50px + 50px));
  }
  @media only screen and (max-width: 426px) {
    .slick-list {
    padding-left: 10px !important;
    padding-right: 10px !important;
    width: calc(100% - 20px);
  }
  }
`;

const SliderItem = styled.div`
  height: 420px;
  
  overflow: hidden;

  
  @media only screen and (max-width: 426px) {
    width: 100%;
    height: 210px;
  }
`;

export default Carousel;
