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
    title:"Developing Leaders Worldwide",
    subtitle:"Engage. Produce. Grow"
  },
  {
    title: "A Small College with a Big Reputation",
    subtitle: "Where Academics And Character Are Classmates",
  },
  {
    title: "Shining With Untarnished Honor",
    subtitle: "Today’s Learner, Tomorrow’s Leaders",
  },
  {
    title: "To Value The Better Things",
    subtitle: "Cultivating Courteous, Independent, Creative Thinkers",
  },
  {
    title: "Igniting Lives Of Purpose",
    subtitle: "Teaching Deeply, Learning Fully, Cultivating Responsibility—One Mind At A Time.",
  },
  {
    title: "MITRC",
    subtitle: "Believe in Good Academics with Well Discipline",
  },
  {
    title: "Think Placement Think MITRC",
    subtitle: "Committed to Excellence & to Build Better",
  },
  {
    title: "A Place To Bring Your Ideas And Innovations To Life",
    subtitle:
      "Yearn To Learn",
  },
  {
    title: "Start From Here, Go Anywhere",
    subtitle: "Highly Professional & Skilled Teaching Assistance Throughout The Journey",
  },
  {
    title: "Where Concepts & Innovation Meets The Real World",
    subtitle:
      "Research Oriented Environment",
  },
  {
    title: "Building The Future On A Foundation Of Excellence",
    subtitle: "Creative, Collaborative & Practical Solutions to your Engineering Challenges from Concept to Production",
  },
  {
    title: "Engineering With Value",
    subtitle: "Yearn To Explore"
  },
  {
    title: "Your life, Your College, Your way",
    subtitle: "Lets You Shine With Skills"
  },
  {
    title: "We Give Wings to Your Aspirations",
    subtitle: "Yearn To Innovate"
  }
];

const ImageSlider = ({
  images = [
    "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/APIS%2FHOME%20PAGE.jpg?alt=media&token=0ef3abac-3948-4a22-80fa-03b152c74445",
    "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2FHome%20Page%2FPhoto%203.jpg?alt=media&token=0a245d04-e342-4e7f-9595-023b786aeece",
    "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2FHome%20Page%2Fphoto%201.jpg?alt=media&token=6e78000e-31d3-4f21-8578-9d1b26c41538",
    "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2FHome%20Page%2Fphoto%202.jpg?alt=media&token=0fed5f04-694a-4115-8217-e3b2db6ba4f8",
    "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2FHome%20Page%2Fphoto%204.jpg?alt=media&token=74202f7a-4860-4405-b332-962e2f4b32e3",
    "https://images.static-collegedunia.com/public/college_data/images/appImage/14351_MITRC_New.jpg?tr=c-force",
    "https://www.admissionfever.com/Media/clgimg/gallery/2934_img8884798266738968.png",
    "https://www.campusoption.com/images/colleges/gallery/28_12_16_111345_18.jpg",
    "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2Fcampus-life%2Fgallery%2Fhackathon%2FPhoto1.jpg?alt=media&token=62f5de81-01a0-4451-a4fc-7ed107ec3166",
    "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2Faerial.jpg?alt=media&token=738e9748-c03f-4c8d-a03c-37254ba048f6",
    "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2Finner.JPG?alt=media&token=27d03fc6-5945-47ac-a249-f5e6c10fcf48",
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
  const image8TextRef = useRef(null);
  const image9TextRef = useRef(null);
  const image10TextRef = useRef(null);
  const image11TextRef = useRef(null);
  const image12TextRef = useRef(null);
  const image13TextRef = useRef(null);
  const refArray = [
    image1TextRef,
    image2TextRef,
    image3TextRef,
    image4TextRef,
    image5TextRef,
    image6TextRef,
    image7TextRef,
    image8TextRef,
    image9TextRef,
    image10TextRef,
    image11TextRef,
    image12TextRef,
    image13TextRef,
  ];

  function nextSlide(slideIndex = currentSlide + 1) {
    const newSlideIndex = slideIndex >= images.length ? 0 : slideIndex;
    refArray.map((item, index) => {
      if (slideIndex % 9 === index) {
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
