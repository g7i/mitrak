import React from 'react'
import { Heading, Paragraph } from '../styledComponents/GlobalComponents'
import { CardContainer, CardImage, ClipDiv, Overlay } from './Components'

const OverlayImageCard = ({img, student}) => {

    console.log('studetn', student.image);

    return (
        <CardContainer>
            <CardImage 
                src={img}
                alt="Student Image"
            />
            <Overlay>
                <Heading color="#FFFFFF">{student.name}</Heading>
                <ClipDiv>
                    <Paragraph color="#FFFFFF">{student.package}</Paragraph>
                </ClipDiv>
                <Paragraph color="#FFFFFF">{student.company}</Paragraph>
            </Overlay>
        </CardContainer>
    )
}

export default OverlayImageCard