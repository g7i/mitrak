
import React, { useState, useEffect } from "react";
import { IndicatorWrapper, Dot, Wrapper, Slide, ChildrenWrapper, Gradient, SlideTextWrapper, SlideHeading, SlideSubHeading } from '../styledComponents/Carousel';

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
        subtitle: "Admissions are now open"
    },
    {
        title: "Think placement think MITRC",
        subtitle: "100% placement record for a decade now"
    },
    {
        title: "Start Here Go Anywhere",
        subtitle: "Highly professional and skilled teaching assitance throughout the journey"
    },
    {
        title: "Where Concepts Meets The Real World",
        subtitle: "Research Oriented Evironment"
    }
]



const ImageSlider = ({
    images = [
        'https://images.static-collegedunia.com/public/college_data/images/appImage/14351_MITRC_New.jpg?tr=c-force',
        'https://www.admissionfever.com/Media/clgimg/gallery/2934_img8884798266738968.png',
        'https://www.campusoption.com/images/colleges/gallery/28_12_16_111345_18.jpg',
        'https://pbs.twimg.com/media/EspGBh8VEAILE67.jpg'
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
                </Slide>
            ))}
            <SlideTextWrapper currentSlide={currentSlide}>
                <SlideHeading>
                    {SlideTextData[currentSlide].title}
                </SlideHeading>
                <SlideSubHeading>{SlideTextData[currentSlide].subtitle}</SlideSubHeading>
            </SlideTextWrapper>
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
