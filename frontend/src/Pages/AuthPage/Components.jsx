import styled from 'styled-components';
import { Colors } from '../../constants/UiConstants';

export const LoginContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100vh;
`;

export const HalfContainer = styled.div`
    width: 50%;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Container = styled.div`
    width: 70%;
    height: 70%;
`;

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.6);
`;

export const FloatingText = styled.h1`
    position: absolute;
    top: 30%;
    left: 20%;
    font-size: 3rem;
    color: white;
`;

export const Form = styled.div`
    width: 100%;
    margin-top: 2rem;
`;

export const Heading = styled.h1`
    color: ${Colors.TEXT_PRIMARY};
    font-family: 'Oxygen', sans-serif;
`;

export const SubHeading = styled.h4`
    margin-top: 1rem;
    color: ${Colors.TEXT_SECONDARY};
    font-family: 'Oxygen', sans-serif;
`;

export const HyperLink = styled.span`
    color: #DA0037;
`;

export const Logo = styled.img`
    width: 20px;
    height: 20px;
`;