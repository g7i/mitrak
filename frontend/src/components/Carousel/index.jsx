
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
        title: "Think placement think MITRC",
        subtitle: "100% placement record for a decade now"
    },
    {
        title: "Think placement think MITRC",
        subtitle: "100% placement record for a decade now"
    }
]



const ImageSlider = ({
    images = [
        'https://images.unsplash.com/photo-1631430411956-44b72ddb0ee0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1631373905812-7ec18393eaff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1349&q=80',
        'https://images.unsplash.com/photo-1593642533144-3d62aa4783ec?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1631399991778-fa32b739552b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1401&q=80'
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
