import React from 'react'
import { Container, Heading, Paragraph } from '../../components/styledComponents/GlobalComponents'
import Layout from '../../constants/Layout'
import ContactTable from './components/ContactTable'
import { instituteFunctionaries } from './data'

const InstituteFunctionaries = () => {
    return (
        <Layout>
            <Container>
                <Heading>Institute Funtionaries</Heading>
                <Paragraph>Board line: +91 (0144) 2980643</Paragraph>
                <Paragraph>National callers use the city code along with the STD access code (0): 0144.</Paragraph>
                <ContactTable 
                    data={instituteFunctionaries}
                />
            </Container>
            
        </Layout>
    )
}

export default InstituteFunctionaries
