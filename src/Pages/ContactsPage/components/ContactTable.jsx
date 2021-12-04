import React from 'react'
import styled from 'styled-components'
import { Colors } from '../../../constants/UiConstants'

const ContactTable = ({ data }) => {

    console.log('data', data)
    return (
        <ContactContainer>
            <ContactHeader>
                <Head>Unit</Head>
                <Head>Designation</Head>
                <Head>Name</Head>
                <Head>Email</Head>
                <Head>Extension Number</Head>
            </ContactHeader>
            {
                data.map((item, index) => (
                    <ContactRow key={item.key} index={index}>
                        <Text>{item.unit}</Text>
                        <Text>{item.designation}</Text>
                        <Text>{item.name}</Text>
                        <Text>
                            <a href={`https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${item.email}`}>{item.email}</a>
                        </Text>
                        <Text>{item.extensionNumber}</Text>
                    </ContactRow>
                ))
            }
        </ContactContainer>
    )
}

export default ContactTable

const ContactContainer = styled.div`
    border: 1px solid ${Colors.BORDER_COLOR};
    margin-bottom: 5rem;
    margin-top: 2rem;
`;

const ContactHeader = styled.div`
    display: flex;
    border-bottom: 4px solid #cccccc;
    padding: 0.5rem;
`;

const Head = styled.h3`
    width: 20%;
`;

const ContactRow = styled.div`
    display: flex;
    padding: 0.5rem;
    background-color: ${({ index }) => index % 2 === 0 && Colors.BORDER_COLOR};
`;

const Text = styled.span`
    width: 20%;
    padding-right: 0.6rem;
`;