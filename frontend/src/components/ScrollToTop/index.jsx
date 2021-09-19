import React from 'react'
import styled from 'styled-components'
import { Heading } from '../styledComponents/GlobalComponents'

const ScrollToTop = () => {
    return (
        <SquareButton>
            <Heading>Plus</Heading>
        </SquareButton>
    )
}

export default ScrollToTop


const SquareButton = styled.div`
    position: absolute;
    z-index: 99999;
    bottom: 10px;
    right: 20px;
    background-color: white;
`;