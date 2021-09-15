import styled from "styled-components";

export const FullScreenContainer = styled.div`
  width: 100vw;
  height: 90vh;
`;

export const HalfScreenContainer = styled.div`
    width: 100vw;
    min-height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({background}) => (background ?? "#FFFFFF")}
`;

export const FillImage = styled.img`
    width: 300px;
    height: 500px;
    object-fit: contain;
`;

export const Wrapper = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    height: 100%;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const HalfWrapper = styled.div`
    width: 48%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media (max-width: 768px) {
        width: 100%;
        padding-bottom: 0.5rem;
        padding-top: 0.5rem;
    }
`;


//TYPOGRAPHY
export const Heading = styled.h1`
    font-size: 2.5rem;
    text-align: center;
    font-family: 'Bebas Neue', cursive;
    color: #32404D;
    letter-spacing: 2px;
    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
`;

export const Paragraph = styled.span`
    font-size: 1.3rem;
    text-align: center;
    font-family: 'Lato', sans-serif;
    color: #777797;
    @media (max-width: 768px) {
        font-size: 1rem;
        text-align: justify;
    }
`;
