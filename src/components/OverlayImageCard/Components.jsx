import styled from 'styled-components';


export const Overlay = styled.div`
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.6);
    height: 100%;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const CardContainer = styled.div`
    border: 1px solid #DDDDDD;
    /* padding: 1rem; */
    width: 20vw;
    height: 20vw;
    position: relative;
    &:hover ${Overlay} {
        display: flex;
    }
`;

export const CardImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const ClipDiv = styled.div`
    background: green;
    clip-path: polygon(10% 0, 100% 0, 85% 100%, 0% 100%);
    padding-bottom: 0.5rem;
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: center;

`