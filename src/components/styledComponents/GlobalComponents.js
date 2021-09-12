import styled from "styled-components";

export const FullScreenContainer = styled.div`
  width: 100vw;
  height: 90vh;
`;

export const HalfScreenContainer = styled.div`
    width: 100vw;
    height: 60vh;
`;

export const FillImage = styled.img`
    width: 300px;
    height: 500px;
    object-fit: contain;
`;

export const Wrapper = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
`;


//TYPOGRAPHY
export const Heading = styled.h1`
    font-size: 2.5rem;
    text-align: center;
`;

export const Paragraph = styled.span`
    font-size: 1rem;
`;