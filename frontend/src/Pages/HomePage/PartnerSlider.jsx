import React from "react";
import {
  OurPartnerText,
  SliderContainer,
  SliderImage,
  SliderInnerContainer,
} from "./partnerSlider";
let widthOfImage = 100;
const partners = [
  "data:image/png;base64,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",
  "https://mma.prnewswire.com/media/1477373/TCS_Logo.jpg?p=facebook",
  'data:image/png;base64,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',
  'https://www.mahindra.com/assets/cms-images/news-room/press-release-image/tech-m-new-logo-688x278.png',
  'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/v1415386231/utypaslbyxwfuwhfdzxd.png',
  'https://ms-f7-sites-01-cdn.azureedge.net/docs/stories/1389348171805821766-genpact-professional-services-teams/resources/7f196ab4-61e4-4094-93f2-668cbb78f118/1396631853093926405_1396631853093926405',
  'https://media.glassdoor.com/sqll/974640/solveda-software-squarelogo-1584087596568.png',
  'data:image/png;base64,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',
  'https://www.freshersnow.com/wp-content/uploads/2019/02/Jaro-Education-Walkin-Drive.png',
  'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/am6qfpigmcg5uyw3cp7q',
  'https://media.glassdoor.com/sqll/634811/traveltriangle-squarelogo-1454582950552.png'
  
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
        Recruiters who have visited our campus for various caplus placement drives
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
