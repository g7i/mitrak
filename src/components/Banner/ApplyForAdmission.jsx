import React from 'react'
import styled from 'styled-components'
import bgImage from '../../assets/images/books.jpg'
import { Colors } from '../../constants/UiConstants'
import { Heading, Paragraph } from '../styledComponents/GlobalComponents'

const ApplyForAdmission = () => {
    return (
        <Container>
            <Overlay>
                <div>
                    <Heading>Wanna get started with your carrer?</Heading>
                    <Paragraph>Apply for admission now!</Paragraph>
                </div>
                <Button href="https://docs.google.com/forms/d/e/1FAIpQLScvsKRxjMKKCqMZO8yGiEuvIVQDp2blnasry2_7BE5O_k1xuQ/viewform">Apply Now For Admission</Button>
            </Overlay>
        </Container>
    )
}

export default ApplyForAdmission

const Container = styled.div`
    height: 30vh;
    margin-top: 4rem;
    background-image: url(${bgImage});
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    
`;

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(255,193,7,0.7);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Button = styled.a`
    background-color: ${Colors.PRIMARY};
    border: none;
    color: #FFFFFF;
    padding: 1rem 2rem;
    font-size: 1.5rem;
    cursor: pointer;
    margin-left: 5rem;
    text-decoration: none;
`;