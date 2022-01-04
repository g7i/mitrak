import React from 'react'
import styled from 'styled-components'
import Slider from "react-slick";

const data = [
    {
        id: '1',
        name: 'Keshav Saini',
        image: 'https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/testimonials%2FAYUSH_1_512x512.jpg?alt=media&token=fa84961a-ef1c-4e37-aba5-b8dffb205986',
        message: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ad quaerat facere, eveniet quis asperiores alias quas obcaecati ea! Excepturi dolorem ullam quaerat ea quae consectetur rerum rem unde enim.'
    },
    {
        id: '2',
        name: 'Keshav Saini',
        image: 'https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/testimonials%2FImage1-2.jpg?alt=media&token=935008f6-4a71-4902-98cb-26d232c4babf',
        message: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ad quaerat facere, eveniet quis asperiores alias quas obcaecati ea! Excepturi dolorem ullam quaerat ea quae consectetur rerum rem unde enim.'
    },
    {
        id: '3',
        name: 'Keshav Saini',
        image: 'https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/testimonials%2FKajal-Sacheti512.jpg?alt=media&token=bb9068eb-6523-4e75-bbe0-8a0aa5f14951',
        message: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ad quaerat facere, eveniet quis asperiores alias quas obcaecati ea! Excepturi dolorem ullam quaerat ea quae consectetur rerum rem unde enim.'
    },
    {
        id: '4',
        name: 'Keshav Saini',
        image: 'https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/testimonials%2FPRATIKSHA-GOYAL.jpg?alt=media&token=960a3af7-e350-4e60-870c-85356d05a7bd',
        message: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ad quaerat facere, eveniet quis asperiores alias quas obcaecati ea! Excepturi dolorem ullam quaerat ea quae consectetur rerum rem unde enim.'
    },
    {
        id: '5',
        name: 'Keshav Saini',
        image: 'https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/testimonials%2FRiya-Bansal-512.jpg?alt=media&token=acf9580e-d21d-4cec-a5d6-80727b383cd0',
        message: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ad quaerat facere, eveniet quis asperiores alias quas obcaecati ea! Excepturi dolorem ullam quaerat ea quae consectetur rerum rem unde enim.'
    },
    {
        id: '6',
        name: 'Keshav Saini',
        image: 'https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/testimonials%2FSahil-Arora.jpg?alt=media&token=5068f43a-669f-4475-b54c-f1ccf377735c',
        message: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ad quaerat facere, eveniet quis asperiores alias quas obcaecati ea! Excepturi dolorem ullam quaerat ea quae consectetur rerum rem unde enim.'
    },
    {
        id: '7',
        name: 'Keshav Saini',
        image: 'https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/testimonials%2FSakshi-Ahuja.jpg?alt=media&token=3f2e92f5-ee1d-4078-8254-314c4d1ec140',
        message: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ad quaerat facere, eveniet quis asperiores alias quas obcaecati ea! Excepturi dolorem ullam quaerat ea quae consectetur rerum rem unde enim.'
    },
    {
        id: '8',
        name: 'Keshav Saini',
        image: 'https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/testimonials%2FWebsite1.jpg?alt=media&token=44dcc37d-7498-4d0b-baf6-69166a47a78c',
        message: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ad quaerat facere, eveniet quis asperiores alias quas obcaecati ea! Excepturi dolorem ullam quaerat ea quae consectetur rerum rem unde enim.'
    },
    {
        id: '9',
        name: 'Keshav Saini',
        image: 'https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/testimonials%2FYAKSHI-BHARADWAJ.jpg?alt=media&token=d45da09e-fa38-4d9c-964c-523b0a7c0a84',
        message: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ad quaerat facere, eveniet quis asperiores alias quas obcaecati ea! Excepturi dolorem ullam quaerat ea quae consectetur rerum rem unde enim.'
    },
    {
        id: '10',
        name: 'Keshav Saini',
        image: 'https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/testimonials%2Fdeepali-512.jpg?alt=media&token=bd5c0586-05dd-4db5-9bd1-e4db02f88aff',
        message: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ad quaerat facere, eveniet quis asperiores alias quas obcaecati ea! Excepturi dolorem ullam quaerat ea quae consectetur rerum rem unde enim.'
    },
    {
        id: '11',
        name: '',
        image: 'https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/testimonials%2Fshruti-512.jpg?alt=media&token=9ae04b3c-ed9d-43d3-9b92-ea714cb10a8e',
        message: ''
    },
    {
        id: '12',
        name: '',
        image: 'https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/testimonials%2Ftanvi-512.jpg?alt=media&token=7ab6dc67-4439-4b8a-a061-82a6607ec86b',
        message: ''
    },
    // {
    //     id: '13',
    //     name: '',
    //     image: 'https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/testimonials%2Fwebsite_116905612_3232895750124224_2985748536625532306_o-512x400.jpg?alt=media&token=063f3af2-e1cb-4402-adad-32a6de36399d',
    //     message: ''
    // },
    // {
    //     id: '14',
    //     name: '',
    //     image: 'https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/testimonials%2Fwebsite_Ayank-Gupta-100x65.jpg?alt=media&token=f60f99bd-d02a-4d89-9b27-5ea89288e11c',
    //     message: ''
    // },
    {
        id: '15',
        name: '',
        image: 'https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/testimonials%2Fwebsite_CHANCHAL-SHARMA.jpg?alt=media&token=0486f2b2-f2b3-4130-ae4c-6b4fcb0edf00',
        message: ''
    },
]

const Testimonials = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
    };

    return (
        <Slider {...settings}>
                {
                    data.map(item => (
                        <Card key={item.id}>
                            <CardImage
                                src={item.image}
                            />
                            {/*<div style={{ marginTop: '1.5rem' }} />*/}
                            {/*<CardTitle>{item.name}</CardTitle>*/}
                            {/*<CardDescription>{"`` " + item.message + " ``"}</CardDescription>*/}
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
    padding: 1rem;
    //height: 30vw;
    //width: 50vw !important;
    display: flex;
    flex-direction: column;
    justify-content: center !important;
    align-items: center !important;
    margin: 0 auto;
`;

const CardImage = styled.img`
    //width: 7rem;
    //height: 7rem;
    height: 100%;
    width: 100%;
    object-fit: contain;
    border-radius: 1rem;
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
