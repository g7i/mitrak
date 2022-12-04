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
                    <Heading className='font-semibold' style={{ color: 'white' }}>Wanna get started with your career?</Heading>
                    <Paragraph align="center" style={{ color: 'white' }}>Apply for admission now!</Paragraph>
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

    @media (max-width: 768px) {
        height: 50vh;
        padding: 2rem;
    }
    
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(255, 81, 7, 0.7);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
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
    border-radius:'20px';
    @media (max-width: 768px) {
        margin: 0;
        width: 90%;
        font-size: 1rem;
        margin-top: 1rem;
    }
`;
