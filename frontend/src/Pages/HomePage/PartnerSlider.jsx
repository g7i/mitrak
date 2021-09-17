import React from "react";
import {
  OurPartnerText,
  SliderContainer,
  SliderImage,
  SliderInnerContainer,
} from "./partnerSlider";
let widthOfImage = 100;
const partners = [
  "https://images.unsplash.com/photo-1631430411956-44b72ddb0ee0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  "https://cdn.pixabay.com/photo/2014/11/13/06/12/boy-529067__340.jpg",
  "https://cdn.pixabay.com/photo/2016/02/28/12/55/boy-1226964__340.jpg",
  "https://cdn.pixabay.com/photo/2015/03/26/09/41/chain-690088__340.jpg",
  "https://cdn.pixabay.com/photo/2012/11/13/17/44/e-mail-65927__340.jpg",
  "https://cdn.pixabay.com/photo/2013/06/07/15/45/sky-122701__340.jpg",
  "https://cdn.pixabay.com/photo/2013/12/01/08/16/neural-pathways-221718__340.jpg",
  "https://cdn.pixabay.com/photo/2016/04/20/19/05/horse-1341775__340.jpg",
  "https://cdn.pixabay.com/photo/2017/06/01/22/42/chain-2364828__340.jpg",
  "https://cdn.pixabay.com/photo/2018/10/17/18/52/anchor-chain-3754661__340.jpg",
  "https://cdn.pixabay.com/photo/2013/11/26/05/31/lock-218505__340.jpg",
  "https://cdn.pixabay.com/photo/2017/04/15/12/08/chain-2232278__340.jpg",
  "https://cdn.pixabay.com/photo/2014/07/31/22/07/padlock-406986__340.jpg",
];
const PartnerSlider = () => {
  let [Pos, setPos] = React.useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = React.useState(false);
  const [posOfimages, setPosOfImages] = React.useState(0);
  const [widthOfSlider, setWidthOfSlider] = React.useState(700);
  // check that is dragging possible
  const canDrag = () => {
    if (posOfimages > 0) {
      setPosOfImages(0);
      return false;
    }
    if (
      Math.abs(posOfimages) >
      partners.length * (widthOfImage / 10) -
        (widthOfSlider / widthOfImage) * 10 +
        5
    ) {
      setPosOfImages(0);
      const timeout = setTimeout(() => {
        setPosOfImages(0);
        clearTimeout(timeout);
      }, 300);
      return false;
    }
    return true;
  };
  // getting width of slider based on window width
  const getWidthOfSlider = () => {
    let newWidthOfSlider = 700;
    if (window.innerWidth >= 768) {
      newWidthOfSlider = 700;
    } else if (window.innerWidth <= 768 && window.innerWidth >= 550) {
      newWidthOfSlider = 500;
    } else {
      newWidthOfSlider = 300;
    }
    if (newWidthOfSlider != widthOfSlider) {
      setWidthOfSlider(newWidthOfSlider);
    }
  };
  // attaching auto slider listners
  React.useEffect(() => {
    const timeout = setInterval(function () {
      if (canDrag()) {
        setPosOfImages(posOfimages - widthOfImage / 10);
      }
    }, 2000);

    window.addEventListener("resize", getWidthOfSlider);
    getWidthOfSlider();

    return () => {
      clearInterval(timeout);
      window.removeEventListener("resize", getWidthOfSlider);
    };
  });
  // dragging functionality
  const dragging = (e) => {
    if (isDragging && canDrag()) {
      const isDraggingLeft = e.clientX < Pos.x;
      if (isDraggingLeft) {
        setPosOfImages(posOfimages - 1);
      } else {
        setPosOfImages(posOfimages + 1);
      }
      setPos({ x: e.clientX, y: e.clientY });
    }
  };
  return (
    <>
      <OurPartnerText>
        Maecenas felis felis, vulputate sit amet mauris et, semper aliquam
        ligula. Integer efficitur tellus <br /> metus, sed feugiat leo posuere.
      </OurPartnerText>
      <SliderContainer
        onMouseDown={() => {
          setIsDragging(true);
        }}
        onMouseLeave={() => {
          setIsDragging(false);
        }}
        onMouseUp={() => setIsDragging(false)}
        onMouseMove={dragging}
        widthOfSlider={widthOfSlider}
      >
        <SliderInnerContainer left={posOfimages}>
          {partners?.map((item , i) => (
            <SliderImage
              src={item}
              draggable="false"
              widthOfImage={widthOfImage}
              key={i}
            />
          ))}
        </SliderInnerContainer>
      </SliderContainer>
    </>
  );
};

export default PartnerSlider;
