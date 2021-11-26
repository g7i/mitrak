import React from 'react'
import { Heading, Paragraph } from '../styledComponents/GlobalComponents'
import { CardContainer, CardImage, ClipDiv, Overlay } from './Components'

const OverlayImageCard = ({img}) => {
    return (
        <CardContainer>
            <CardImage 
                src={img}
                alt="Student Image"
            />
            <Overlay>
                <Heading color="#FFFFFF">Elon</Heading>
                <ClipDiv>
                    <Paragraph color="#FFFFFF">Placed</Paragraph>
                </ClipDiv>
                <Paragraph color="#FFFFFF">Overlay Technologies</Paragraph>
                <Paragraph color="#FFFFFF">7.5LPA</Paragraph>
            </Overlay>
        </CardContainer>
    )
}

export default OverlayImageCard