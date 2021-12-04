import React from 'react'
import { Container, Heading, Paragraph } from '../../components/styledComponents/GlobalComponents'
import Layout from '../../constants/Layout'
import ContactTable from './components/ContactTable'
import { divisionFunctionaries } from './data'

const DivisionFunctionaries = () => {
    return (
        <Layout>
            <Container>
                <Heading>Division Funtionaries</Heading>
                <Paragraph>Board line: +91 (0144) 2980643</Paragraph>
                <Paragraph>National callers use the city code along with the STD access code (0): 0144.</Paragraph>
                <ContactTable 
                    data={divisionFunctionaries}
                />
            </Container>
        </Layout>
    )
}

export default DivisionFunctionaries
