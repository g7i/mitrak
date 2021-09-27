import React from "react";
import {
  OurPartnerText,
  SliderContainer,
  SliderImage,
  SliderInnerContainer,
} from "./partnerSlider";
let widthOfImage = 100;
const partners = [
  "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/v1415386231/utypaslbyxwfuwhfdzxd.png",
  "https://mms.businesswire.com/media/20210603005462/en/882678/23/TCS.jpg",
  "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202007/20017667_1556257447773154_1353.jpeg?jNsFst0gYxFr7J7qTIfzrAYrne.kx3_9&size=770:433",
  "https://bsmedia.business-standard.com/_media/bs/img/about-page/1562577931.jpg",
  "https://cdn.pixabay.com/photo/2012/11/13/17/44/e-mail-65927__340.jpg",
  "https://cdn.pixabay.com/photo/2013/06/07/15/45/sky-122701__340.jpg",
  "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5c13d14731358e5b4339c564%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D0%26cropX2%3D416%26cropY1%3D0%26cropY2%3D416",
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAhFBMVEUZGRl+uQIAo+7/uAbxUCEAABoaAAAZGBcAFRkQARoXGRkXFRkKFxkVEBmCvwAZFQ8SFRlchQ37UyInMRdlkg08UxT4swUFnOQHktQAqvj/vwSrPR7IkQ49MBfWSSBoKxubOR0jKhhLahL/VCKFxADeSyBfKRsdIBgyRBYaCQAACRrAiw/aW2j9AAABRElEQVR4nO3ayU4CQRSG0ZKWqWkQW0XFAQdwfP/3E3pn1KQvMZaBc1KrSu7i2/8pAQAAAAAAAAAAAAAAAAB/bBBSri9Gw4hx9sC7q4iyTKP744iH3ImDVX34Wd28L5q/x2pdeLKcBJwOcxfeflPzo7opnBy0p1ChQoUKFSpUqFChQoUKFSpUqFChQoUKFSpUqFChQoUKFSpUqFChQoUKf7VwVQfEd23L7IXV0yKiLFN6Pot4GWUuTFXIZl+axhHZA/dBP6K5KCMy16299iI2idNuxFvuwN5F57y9zlE/TW+KWXvFezd/YcBlUzgv2ptf73phoVChQoUKFSpUqFChQoUKFSpUqFChQoUKFSpUqFChQoUKFSpUqFChQoU7VPgfVl+B4d4Wy71Z9uVeCo0vt1hfZg8EAAAAAAAAAAAAAAAAgP3zAXJhwbJsyxS3AAAAAElFTkSuQmCC",
  "https://cdn.pixabay.com/photo/2012/11/13/17/44/e-mail-65927__340.jpg",
  "https://cdn.pixabay.com/photo/2013/06/07/15/45/sky-122701__340.jpg",
  "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5c13d14731358e5b4339c564%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D0%26cropX2%3D416%26cropY1%3D0%26cropY2%3D416",
  "https://s3-symbol-logo.tradingview.com/facebook--600.png",
  "https://cdn.pixabay.com/photo/2012/11/13/17/44/e-mail-65927__340.jpg",
  "https://cdn.pixabay.com/photo/2013/06/07/15/45/sky-122701__340.jpg",
  "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5c13d14731358e5b4339c564%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D0%26cropX2%3D416%26cropY1%3D0%26cropY2%3D416",
  "https://s3-symbol-logo.tradingview.com/facebook--600.png",
  
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
