import styled from 'styled-components';
import { Colors } from '../../../constants/UiConstants';

export const Container = styled.div `
    padding: 0 5rem;
`

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
    min-height: 2.7rem;
`;

export const PageContainer = styled.div`
    border: 1px solid ${Colors.BORDER_COLOR};
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const NotesImg = styled.img`
    width: 6rem;
    height: 6rem;
    object-fit: contain;
`;

export const FixImg = styled.img`
    height: 100%;
    width: 100%;
    object-fit: contain;
`;
