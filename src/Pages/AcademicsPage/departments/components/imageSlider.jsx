import React from "react";
import Slider from "react-slick";
import ModalImage from "../../../../components/ModalImage";
import styled from "styled-components";
import { Colors } from "../../../../constants/UiConstants";

import BREAKPOINTS from "../../../../constants/Breakpoints";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


const SlickArrowRight = ({ onClick, className }) => {
  if (className.includes("slick-disabled")) return null;
  return (
    <RightArrowContainer onClick={onClick}>
      <NextIcon />
    </RightArrowContainer>
  );
};

const SlickArrowLeft = ({ onClick, className }) => {
  if (className.includes("slick-disabled")) return null;
  return (
    <LeftArrowContainer onClick={onClick}>
      <PreviousIcon />
    </LeftArrowContainer>
  );
};

const settings = {
  infinite: false,
  speed: 200,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <SlickArrowRight />,
  prevArrow: <SlickArrowLeft />,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};


export default function ImageSlider({imageArray}) {
  return (
    <Container>
      <Slider {...settings}>
        {imageArray.map((item, index) => (
          <div
            style={{
              width: "30%",
              display: "flex",
              justifyContent: "center",
              padding: "20px",
            }}
          >
            <ModalImage
              src={item}
              onClickOpen
              width={"90%"}
              height={"250px"}
              objectFit={"cover"}
              filter
            />
          </div>
        ))}
      </Slider>
    </Container>
  );
}

const Container = styled.div`
  /* padding: 20px 40px; */
  margin-top: 20px;
  width : 100%;
`;
export const LeftArrowContainer = styled.div`
  position: absolute;
  top: 50%;
  z-index: 2;
  cursor: pointer;
  left: 10px;
  height: 35px;
  width: 35px;
  place-items: center;
  border-radius: 50%;
  background-color: white;
  transition: background-color 0.2s linear;
  transform: translate(-50%, -50%);
  box-shadow: 0 4px 8px black;
  display: none;

  &:hover {
    background-color: white;
  }

  @media only screen and (min-width: ${BREAKPOINTS.sm}) {
    display: grid;
  }
  @media only screen and (min-width: ${BREAKPOINTS.lg}) {
    height: 50px;
    width: 50px;
    left: 27px;
  }
  @media (min-resolution: 120dpi) and (min-width: ${BREAKPOINTS.sm}) {
    left: 27px;
  }
  @media (min-resolution: 120dpi) and (min-width: ${BREAKPOINTS.lg}) {
    left: 20px;
  }
`;

export const RightArrowContainer = styled(LeftArrowContainer)`
  left: unset;
  top: unset;
  right: 10px;
  bottom: 50%;
  transform: translate(50%, 50%);
  @media only screen and (min-width: ${BREAKPOINTS.lg}) {
    right: 25px;
  }
`;



export const NextIcon = styled(FaChevronRight)`
  display: block;
  fill: black;
  font-size: 22px;
  transform: translateX(1.5px);
`;

export const PreviousIcon = styled(FaChevronLeft)`
  display: block;
  fill: black;
  font-size: 22px;
  transform: translateX(-1.5px);
`;

export const ItemWrapper = styled.div`
  padding: 10px;
`;

