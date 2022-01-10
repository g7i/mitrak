import React from 'react';
import Layout from '../../constants/Layout';
import {Heading, Container, SubHeading, FillImage} from "../../components/styledComponents/GlobalComponents";
import styled from 'styled-components'

const WardenPage = () => {
    return (
        <Layout>
            <Container>
                <Heading style={{ textAlign: 'center' }}>MITRC WARDEN'S</Heading>
                <Box style={{ padding: '2rem', alignItems: 'center', justifyContent: 'center' }}>
                    <Box style={{ alignItems: 'center' }}>
                        <FillImage
                            src="https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/amenities%2Fhostel%2FBOY'S%20HOSTEL%20WARDEN.png?alt=media&token=2bc112ed-1ebe-4232-9c21-312e6a0aaf04"
                            style={{
                                width: '10rem',
                                height: '10rem'
                            }}
                        />
                        <>
                            <SubHeading>Mr. DEEPAK SHARMA (<Para>BOY’S HOSTEL WARDEN</Para>)</SubHeading>
                            <Para>NUMBER: 9461319751</Para>
                            <Para>E MAIL : hostel@mitrc.ac.in</Para>
                        </>
                    </Box>
                    <Box style={{ alignItems: 'center' }}>
                        <FillImage
                            src="https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/amenities%2Fhostel%2FgIRL'S%20hOSTEL%20wARDEN.png?alt=media&token=58b756fc-dfab-4ec4-8c1a-ce3b5d0ab3f9"
                            style={{
                                width: '10rem',
                                height: '10rem'
                            }}
                        />
                        <>
                            <SubHeading>Ms. AKANSHA SRIVASTAVA (<Para>GIRL’S HOSTEL WARDEN</Para>)</SubHeading>
                            <Para>NUMBER: 8178586605</Para>
                            <Para>E MAIL : hostel@mitrc.ac.in</Para>
                        </>
                    </Box>
                </Box>
            </Container>
        </Layout>
    );
};

export default WardenPage;
const Box = styled.div`
  display: flex;
  flex-direction: column;
`;

const Para = styled.span`
    font-size: 1.4rem;
`;