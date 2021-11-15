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
import { Heading } from "../../../components/styledComponents/GlobalComponents";
import PartnerSlider from "../PartnerSlider";

const SlickArrowRight = ({ onClick, className }) => {
    if (className.includes('slick-disabled')) return null;
    return (
        <RightArrowContainer onClick={onClick}>
            <NextIcon />
        </RightArrowContainer>
    );
};

const SlickArrowLeft = ({ onClick, className }) => {
    if (className.includes('slick-disabled')) return null;
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

const data = [
    {
        id: 1,
        title: 'Virtual placement drive by metacube',
        date: 'September 21, 2021',
        time: '09: 00 am - 04:00 pm',
        description: '@ E-campus placement drive',
        image: 'https://media-exp1.licdn.com/dms/image/C510BAQEb5QUE4PRboQ/company-logo_200_200/0/1577705513428?e=2159024400&v=beta&t=6D2OCgBfj0KdXdZSBljGUF2yxITiAj5m0QI3UPcMPrg'
    },
    {
        id: 2,
        title: 'Virtual placement drive by Nucleus software',
        date: 'September 15, 2021',
        time: '09: 00 am - 04:00 pm',
        description: '@ E-campus placement drive',
        image: 'https://www.dsij.in/Portals/0/EasyDNNnews/16220/img-Nucleus.jpg'
    },
    {
        id: 3,
        title: 'Virtual placement drive by Planetspark',
        date: 'September 11, 2021',
        time: '09: 00 am - 04:00 pm',
        description: '@ E-campus placement drive',
        image: 'data:image/png;base64,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'
    },
    {
        id: 4,
        title: 'Virtual placement drive by Ongraph technologies',
        date: 'September 11, 2021',
        time: '09: 00 am - 04:00 pm',
        description: '@ E-campus placement drive',
        image: 'data:image/png;base64,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'
    }
]

export default function Placements() {
    return (
        <Container>
            <Heading style={{ textAlign: 'center' }}>Placements</Heading>
            <PartnerSlider />
            <div style={{marginTop: '4rem'}} />
            <Slider {...settings}>
                {data.map((item) => (
                    <ItemWrapper key={item.id}>
                        <CardWrapper>
                            <CardTitle style={{color: '#0191C6'}}>{item.date}</CardTitle>

                            <ImageWrapper>
                                <CardImage
                                    src={item.image} />
                            </ImageWrapper>
                            <CardTitle>{item.title}</CardTitle>
                            <CardContent>{item.time}</CardContent>
                            <CardContent>{item.description}</CardContent>
                        </CardWrapper>
                    </ItemWrapper>
                ))}
            </Slider>
        </Container>
    );
}
