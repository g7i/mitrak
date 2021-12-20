
import React, { useState, useEffect } from "react";
import { IndicatorWrapper, Dot, Wrapper, Slide, ChildrenWrapper, Gradient, SlideTextWrapper, SlideHeading, SlideSubHeading } from '../styledComponents/Carousel';
import Fade from 'react-reveal/Fade'

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
        subtitle: "Yearn To Learn"
    },
    {
        title: "Think placement think MITRC",
        subtitle: "Yearn To Explore"
    },
    {
        title: "Start Here Go Anywhere",
        subtitle: "Highly professional and skilled teaching assistance throughout the journey"
    },
    {
        title: "Where Concepts Meets The Real World",
        subtitle: "Research Oriented Environment"
    },
    {
        subtitle: "Creative, Collaborative, and Practical Solutions to your engineering challenges from concept to production",
    },
    {
        title: "We Give Wings To Your Aspirations",
        subtitle: "Yearn To Innovate"
    },
    {
        title: "Yearn To Research"
    }
]



const ImageSlider = ({
    images = [
        'https://images.static-collegedunia.com/public/college_data/images/appImage/14351_MITRC_New.jpg?tr=c-force',
        'https://www.admissionfever.com/Media/clgimg/gallery/2934_img8884798266738968.png',
        'https://www.campusoption.com/images/colleges/gallery/28_12_16_111345_18.jpg',
        'https://pbs.twimg.com/media/EspGBh8VEAILE67.jpg',
        'https://www.mitrc.ac.in/wp-content/uploads/2020/07/AIF3-1140x680.jpg',
        'https://www.mitrc.ac.in/wp-content/uploads/2020/07/mitrc_alwar6a-1140x680.jpg',
        'https://www.mitrc.ac.in/wp-content/uploads/2020/08/IMG_6469.jpg'
    ],
    autoPlay = true,
    autoPlayTime = 3000,
    children,
    ...props
}) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    function nextSlide(slideIndex = currentSlide + 1) {
        const newSlideIndex = slideIndex >= images.length ? 0 : slideIndex;

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
                        objectFit: 'contain'
                    }}
                >
                    <SlideTextWrapper currentSlide={index}>
                        <Fade top cascade>
                            <SlideHeading>
                                {SlideTextData[index]?.title || SlideTextData[0].title}
                            </SlideHeading>
                        </Fade>
                        <SlideSubHeading>{SlideTextData[index]?.subtitle || SlideTextData[0].subtitle}</SlideSubHeading>
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
