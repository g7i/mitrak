import React from 'react'
import styled from 'styled-components'
import Slider from "react-slick";

const data = [
    {
        id: '1',
        name: 'Keshav Saini',
        image: 'https://static.dezeen.com/uploads/2021/06/elon-musk-architect_dezeen_1704_col_1.jpg',
        message: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ad quaerat facere, eveniet quis asperiores alias quas obcaecati ea! Excepturi dolorem ullam quaerat ea quae consectetur rerum rem unde enim.'
    },
    {
        id: '2',
        name: 'Keshav Saini',
        image: 'https://static.dezeen.com/uploads/2021/06/elon-musk-architect_dezeen_1704_col_1.jpg',
        message: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ad quaerat facere, eveniet quis asperiores alias quas obcaecati ea! Excepturi dolorem ullam quaerat ea quae consectetur rerum rem unde enim.'
    },
    {
        id: '3',
        name: 'Keshav Saini',
        image: 'https://static.dezeen.com/uploads/2021/06/elon-musk-architect_dezeen_1704_col_1.jpg',
        message: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ad quaerat facere, eveniet quis asperiores alias quas obcaecati ea! Excepturi dolorem ullam quaerat ea quae consectetur rerum rem unde enim.'
    },
    {
        id: '4',
        name: 'Keshav Saini',
        image: 'https://static.dezeen.com/uploads/2021/06/elon-musk-architect_dezeen_1704_col_1.jpg',
        message: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ad quaerat facere, eveniet quis asperiores alias quas obcaecati ea! Excepturi dolorem ullam quaerat ea quae consectetur rerum rem unde enim.'
    },
    {
        id: '5',
        name: 'Keshav Saini',
        image: 'https://static.dezeen.com/uploads/2021/06/elon-musk-architect_dezeen_1704_col_1.jpg',
        message: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ad quaerat facere, eveniet quis asperiores alias quas obcaecati ea! Excepturi dolorem ullam quaerat ea quae consectetur rerum rem unde enim.'
    }
]

const Testimonials = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: true,
        autoPlay: true,
        
    };

    return (
        <Slider {...settings}>
                {
                    data.map(item => (
                        <Card key={item.id}>
                            <CardImage
                                src={item.image}
                            />
                            <div style={{ marginTop: '1.5rem' }} />
                            <CardTitle>{item.name}</CardTitle>
                            <CardDescription>{"`` " + item.message + " ``"}</CardDescription>
                        </Card>
                    ))
                }
        </Slider>
    )
}

export default Testimonials

const Container = styled.div`
    background: red;
`;

const Card = styled.div`
    padding: 2rem;
    width: 50vw !important;
    display: flex;
    flex-direction: column;
    justify-content: center !important;
    align-items: center !important;
    margin: 0 auto;
`;

const CardImage = styled.img`
    width: 7rem;
    height: 7rem;
    object-fit: cover;
    background: #000000;
    border-radius: 7rem;
    text-align: center;
    margin: 0 auto;

`;

const CardTitle = styled.h2`
    font-size: 2rem;
    text-align: center;
    color: #464646;
`;

const CardDescription = styled.span`
    font-size: 1rem;
    font-weight: bold;
    color: #8b8b8b;
    text-align: center;
    display: grid;
    place-items: center;
`;