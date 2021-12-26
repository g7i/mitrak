// import React, { useState, useEffect } from "react";
// import { IndicatorWrapper, Dot, Wrapper, Slide, ChildrenWrapper, Gradient, SlideTextWrapper, SlideHeading, SlideSubHeading } from '../styledComponents/Carousel';
// import Fade from 'react-reveal/Fade'

// const Indicator = ({ currentSlide, amountSlides, nextSlide }) => {
//     return (
//         <IndicatorWrapper>
//             {Array(amountSlides)
//                 .fill(1)
//                 .map((_, i) => (
//                     <Dot
//                         key={i}
//                         isActive={currentSlide === i}
//                         onClick={() => nextSlide(i)}
//                     />
//                 ))}
//         </IndicatorWrapper>
//     );
// };

// const SlideTextData = [
//     {
//         title: "MITRC",
//         subtitle: "Yearn To Learn"
//     },
//     {
//         title: "Think placement think MITRC",
//         subtitle: "Yearn To Explore"
//     },
//     {
//         title: "Start Here Go Anywhere",
//         subtitle: "Highly professional and skilled teaching assistance throughout the journey"
//     },
//     {
//         title: "Where Concepts Meets The Real World",
//         subtitle: "Research Oriented Environment"
//     },
//     {
//         subtitle: "Creative, Collaborative, and Practical Solutions to your engineering challenges from concept to production",
//     },
//     {
//         title: "We Give Wings To Your Aspirations",
//         subtitle: "Yearn To Innovate"
//     },
//     {
//         title: "Yearn To Research"
//     }
// ]

// const ImageSlider = ({
//     images = [
//         'https://images.static-collegedunia.com/public/college_data/images/appImage/14351_MITRC_New.jpg?tr=c-force',
//         'https://www.admissionfever.com/Media/clgimg/gallery/2934_img8884798266738968.png',
//         'https://www.campusoption.com/images/colleges/gallery/28_12_16_111345_18.jpg',
//         'https://pbs.twimg.com/media/EspGBh8VEAILE67.jpg',
//         'https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2F2020-7%2FAIF3-1140x680.jpg?alt=media&token=b8651cc5-44b2-475d-a4eb-4f59b9289dc8',
//         'https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2F2020-7%2Fmitrc_alwar6a-1140x680.jpg?alt=media&token=d7e9a558-1923-422f-bd83-c43e7f655238',
//         'https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2F2020-8%2FIMG_6469.jpg?alt=media&token=f93c5af7-59f3-4d94-8267-64f705b070f6'
//     ],
//     autoPlay = true,
//     autoPlayTime = 3000,
//     children,
//     ...props
// }) => {
//     const [currentSlide, setCurrentSlide] = useState(0);

//     function nextSlide(slideIndex = currentSlide + 1) {
//         const newSlideIndex = slideIndex >= images.length ? 0 : slideIndex;

//         setCurrentSlide(newSlideIndex);
//     }

//     useEffect(() => {
//         const timer = setTimeout(() => {
//             nextSlide();
//         }, autoPlayTime);

//         return () => clearTimeout(timer);
//     }, [currentSlide]);

//     return (
//         <Wrapper {...props}>
//             {images.map((imageUrl, index) => (
//                 <Slide
//                     key={index}
//                     style={{
//                         backgroundImage: `url(${imageUrl})`,
//                         marginLeft: index === 0 ? `-${currentSlide * 100}%` : undefined,
//                         objectFit: 'contain'
//                     }}
//                 >
//                     <SlideTextWrapper currentSlide={index}>
//                         <Fade top cascade>
//                             <SlideHeading>
//                                 {SlideTextData[index]?.title || SlideTextData[0].title}
//                             </SlideHeading>
//                         </Fade>
//                         <SlideSubHeading>{SlideTextData[index]?.subtitle || SlideTextData[0].subtitle}</SlideSubHeading>
//                     </SlideTextWrapper>
//                 </Slide>
//             ))}

//             <Gradient />
//             <Indicator
//                 currentSlide={currentSlide}
//                 amountSlides={images.length}
//                 nextSlide={nextSlide}
//             />
//             <ChildrenWrapper>{children}</ChildrenWrapper>
//         </Wrapper>
//     );
// };

// export default ImageSlider;

import React, { useState, useEffect, useRef } from "react";
import {
  IndicatorWrapper,
  Dot,
  Wrapper,
  Slide,
  ChildrenWrapper,
  Gradient,
  SlideTextWrapper,
  SlideHeading,
  SlideSubHeading,
} from "../styledComponents/Carousel";
import Fade from "react-reveal/Fade";
import "./animation.css";

const Indicator = ({ currentSlide, amountSlides, nextSlide }) => {
  return (
    <IndicatorWrapper>
      {Array(amountSlides)
        .fill(1)
        .map((_, i) => (
          <Dot
            key={i}
            isActive={currentSlide === i}
            onClick={() => nextSlide(i)}
          />
        ))}
    </IndicatorWrapper>
  );
};

const SlideTextData = [
  {
    title: "MITRC",
    subtitle: "Yearn To Learn",
  },
  {
    title: "Think placement think MITRC",
    subtitle: "Yearn To Explore",
  },
  {
    title: "Start Here Go Anywhere",
    subtitle:
      "Highly professional and skilled teaching assistance throughout the journey",
  },
  {
    title: "Where Concepts Meets The Real World",
    subtitle: "Research Oriented Environment",
  },
  {
    subtitle:
      "Creative, Collaborative, and Practical Solutions to your engineering challenges from concept to production",
  },
  {
    title: "We Give Wings To Your Aspirations",
    subtitle: "Yearn To Innovate",
  },
  {
    title: "Yearn To Research",
  },
];

const ImageSlider = ({
  images = [
    "https://images.static-collegedunia.com/public/college_data/images/appImage/14351_MITRC_New.jpg?tr=c-force",
    "https://www.admissionfever.com/Media/clgimg/gallery/2934_img8884798266738968.png",
    "https://www.campusoption.com/images/colleges/gallery/28_12_16_111345_18.jpg",
    "https://pbs.twimg.com/media/EspGBh8VEAILE67.jpg",
    "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2F2020-7%2FAIF3-1140x680.jpg?alt=media&token=b8651cc5-44b2-475d-a4eb-4f59b9289dc8",
    "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2F2020-7%2Fmitrc_alwar6a-1140x680.jpg?alt=media&token=d7e9a558-1923-422f-bd83-c43e7f655238",
    "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2F2020-8%2FIMG_6469.jpg?alt=media&token=f93c5af7-59f3-4d94-8267-64f705b070f6",
  ],
  autoPlay = true,
  autoPlayTime = 3000,
  children,
  ...props
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const image1TextRef = useRef(null);
  const image2TextRef = useRef(null);
  const image3TextRef = useRef(null);
  const image4TextRef = useRef(null);
  const image5TextRef = useRef(null);
  const image6TextRef = useRef(null);
  const image7TextRef = useRef(null);
  const refArray = [
    image1TextRef,
    image2TextRef,
    image3TextRef,
    image4TextRef,
    image5TextRef,
    image6TextRef,
    image7TextRef,
  ];

  function nextSlide(slideIndex = currentSlide + 1) {
    const newSlideIndex = slideIndex >= images.length ? 0 : slideIndex;
    refArray.map((item, index) => {
      if (slideIndex % 7 === index) {
        item.current.classList.add("animateSliderText");
      } else {
        item.current.classList.remove("animateSliderText");
      }
    });
    setCurrentSlide(newSlideIndex);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, autoPlayTime);

    return () => clearTimeout(timer);
  }, [currentSlide]);

  return (
    <Wrapper {...props}>
      {images.map((imageUrl, index) => (
        <Slide
          key={index}
          style={{
            backgroundImage: `url(${imageUrl})`,
            marginLeft: index === 0 ? `-${currentSlide * 100}%` : undefined,
            objectFit: "contain",
          }}
        >
          <SlideTextWrapper currentSlide={index}>
            <SlideHeading ref={refArray[index]}>
              {SlideTextData[index]?.title || SlideTextData[0].title}
            </SlideHeading>
            <SlideSubHeading>
              {SlideTextData[index]?.subtitle || SlideTextData[0].subtitle}
            </SlideSubHeading>
          </SlideTextWrapper>
        </Slide>
      ))}

      <Gradient />
      <Indicator
        currentSlide={currentSlide}
        amountSlides={images.length}
        nextSlide={nextSlide}
      />
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </Wrapper>
  );
};

export default ImageSlider;
