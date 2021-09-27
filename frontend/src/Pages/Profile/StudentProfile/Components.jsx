import styled from 'styled-components';
import { Colors } from '../../../constants/UiConstants';

export const Container = styled.div `
    padding: 0 5rem;
`

export const ProfilePicture = styled.img`
    width: 20rem;
    height: 20rem;
    position: relative;
    object-fit: cover;
    border-radius: 20rem;
`;

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
`;

export const FormHead = styled.span`
    color: ${Colors.PRIMARY};
`;

export const FormItem = styled.span`
    font-size: 1.25rem;
    margin-top: 0.2rem;
    background-color: ${Colors.DETAILS_BACKGROUND};
    padding: 0.5rem;
    border-radius: 5px;
`;