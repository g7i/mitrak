import React from 'react'
import OverlayImageCard from '../../../components/OverlayImageCard'
import { Container, Heading, Paragraph } from '../../../components/styledComponents/GlobalComponents'
import { OurPartnerText } from '../partnerSlider'
import styled from 'styled-components'

const StudentsPlaced = () => {
    return (
        <Container style={{ textAlign: 'center' }}>
            <Heading>Students Placed In Current Academic Session</Heading>
            <OurPartnerText>Top Placements On Campus This Year</OurPartnerText>
            <OurPartnerText>(Full Time and Internships)</OurPartnerText>
            <WrapContainer>
                <OverlayImageCard
                    img="https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg"
                />
                <OverlayImageCard
                    img="https://cloudfront-us-east-2.images.arcpublishing.com/reuters/TVQ3FKTWQVLUHLYBI36T6GM5DA.jpg"
                /><OverlayImageCard
                    img="https://img.etimg.com/thumb/msid-84588036,width-650,imgsize-109325,,resizemode-4,quality-100/elon-musk.jpg"
                /><OverlayImageCard
                    img="https://cdn.britannica.com/54/188754-050-A3613741/Elon-Musk-2010.jpg"
                /><OverlayImageCard
                    img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3ZWh3DPwRxU6IDQcxT3Bx5icspurmxfhfsw&usqp=CAU"
                /><OverlayImageCard
                    img="https://images.news18.com/ibnlive/uploads/2021/09/elon-musk.jpg"
                /><OverlayImageCard
                    img="https://images.wsj.net/im-435036?width=860&height=656"
                /><OverlayImageCard
                    img="https://www.incimages.com/uploaded_files/image/1920x1080/getty_494548555_2000133620009280147_320766.jpg"
                />
            </WrapContainer>
        </Container>
    )
}

export default StudentsPlaced

const WrapContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
`;