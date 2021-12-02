import React from 'react'
import OverlayImageCard from '../../../components/OverlayImageCard'
import { Container, Heading, Paragraph } from '../../../components/styledComponents/GlobalComponents'
import { OurPartnerText } from '../partnerSlider'
import styled from 'styled-components'

const studentData = [
    {
        id: '2',
        name: 'Dilip Thakkar',
        package: '5.7lpa',
        image: require('../../../assets/studentsplaced/dilip.jpg').default,
        company: 'Metacube'
    },
    {
        id: '3',
        name: 'Sakshi Gopalia',
        package: '8.2lpa',
        image: require("../../../assets/studentsplaced/sakshi.jpeg").default,
        company: 'Teltonika'
    },
    {
        id: '4',
        name: 'Priyanka Jaiswal',
        package: '5.82lpa',
        image: require("../../../assets/studentsplaced/prianka.jpeg").default,
        company: 'Hike Education'
    },
    {
        id: '5',
        name: 'Sapna yadav',
        package: '5.58lpa',
        image: require("../../../assets/studentsplaced/sapna.jpeg").default,
        company: 'Hike Education'
    },
    {
        id: '6',
        name: 'Vaibhav Goyal',
        package: '5.2lpa',
        image: require("../../../assets/studentsplaced/vaibhav.jpeg").default,
        company: 'Metacube'
    },
    {
        id: '7',
        name: 'Alpesh Yadav',
        package: '5.2lpa',
        image: require("../../../assets/studentsplaced/alpesh.jpeg").default,
        company: 'Metacube'
    },
    {
        id: '8',
        name: 'Anshul Yadav',
        package: '5lpa',
        image: require("../../../assets/studentsplaced/alpesh.jpeg").default,
        company: 'Solveda'

    },
    {
        id: '9',
        name: 'Devendra Kumar',
        package: '5lpa',
        image: require("../../../assets/studentsplaced/devendra.jpg").default,
        company: 'Solveda'
    },
    {
        id: '10',
        name: 'Diksha Chopra',
        package: '5lpa',
        image: require('../../../assets/studentsplaced/Diksha.jpeg').default,
        company: 'Solveda'
    },
    {
        id: '11',
        name: 'Manish Gupta',
        package: '5lpa',
        image: require('../../../assets/studentsplaced/manish.jpeg').default,
        company: 'Solveda'
    },

]

const StudentsPlaced = () => {
    return (
        <Container style={{ textAlign: 'center' }}>
            <Heading>Students Placed In Current Academic Session</Heading>
            <OurPartnerText>Top Placements On Campus This Year</OurPartnerText>
            <OurPartnerText>(Full Time and Internships)</OurPartnerText>
            <WrapContainer>
                {
                    studentData?.map(student => (
                        <OverlayImageCard
                            student={student}
                            img={student.image}
                        />
                    ))
                }
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