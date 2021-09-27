import React from "react";
import Slider from "react-slick";

import {
    CardContent,
    CardImage,
    CardTitle, CardWrapper,
    ImageWrapper,
} from "../../../components/styledComponents/Courses";
import {
    LeftArrowContainer,
    NextIcon,
    PreviousIcon,
    RightArrowContainer,
    Container,
    ItemWrapper,
} from "../../../components/styledComponents/News";
import {Heading} from "../../../components/styledComponents/GlobalComponents";
import PartnerSlider from "../PartnerSlider";

const SlickArrowRight = ({onClick, className}) => {
    if (className.includes('slick-disabled')) return null;
    return (
        <RightArrowContainer onClick={onClick}>
            <NextIcon/>
        </RightArrowContainer>
    );
};

const SlickArrowLeft = ({onClick, className}) => {
    if (className.includes('slick-disabled')) return null;
    return (
        <LeftArrowContainer onClick={onClick}>
            <PreviousIcon/>
        </LeftArrowContainer>
    );
};

const settings = {
    infinite: false,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SlickArrowRight/>,
    prevArrow: <SlickArrowLeft/>,
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

export default function Placements() {
    return (
        <Container>
            <Heading style={{textAlign: 'center'}}>Placements</Heading>
            <PartnerSlider />
            <Slider {...settings}>
                {Array.from({length: 5}).map((_, i) => (
                    <ItemWrapper key={i}>
                        <CardWrapper>
                            <ImageWrapper>
                                <CardImage
                                    src="https://images.unsplash.com/photo-1631430411956-44b72ddb0ee0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"/>
                            </ImageWrapper>
                            <CardTitle>Faculty of Science</CardTitle>
                            <CardContent>Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi vitae tincidunt mi, et
                                malesuada massa. Sed blandit placerat elit sit amet condimentum.</CardContent>
                        </CardWrapper>
                    </ItemWrapper>
                ))}
            </Slider>
        </Container>
    );
}
