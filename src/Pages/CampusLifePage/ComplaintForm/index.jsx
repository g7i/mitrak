import React from 'react'
import Banner from '../../../components/Banner'
import { Container, FillButton, FormInput, Heading, Paragraph } from '../../../components/styledComponents/GlobalComponents'

const ComplaintForm = ({title}) => {
    return (
        <>
            <Heading>{title + " MITRC | ALWAR"}</Heading>
            <Paragraph>We have a dedicated team for Grievance Redressal to be able to give 100% satisfaction to student. Herein student can walk free for any kind of grievances, related to any domain, where the team ensure that the identity of the student is kept close and the grievance is sincerely dealt with.</Paragraph>
            <br />
            <br />
            <br />
            <Paragraph color="#32404D">Don't hesitate to write to us</Paragraph>
            <br />
            <br />
            <Paragraph>Your Name *</Paragraph>
            <FormInput  />
            <br />
            <br />
            <Paragraph>Aadhar Number *</Paragraph>
            <br />
            <FormInput type="number" style={{width:"30%"}} />
            <br />
            <br />
            <Paragraph>Age *</Paragraph>
            <br />
            <FormInput type="number" style={{width:"30%"}} />
            <br />
            <br />
            <Paragraph>Email *</Paragraph>
            <FormInput type="email" />
            <br />
            <br />
            <Paragraph>Address *</Paragraph>
            <FormInput type="text" />
            <br />
            <br />
            <Paragraph>Subject *</Paragraph>
            <FormInput type="text" />
            <br />
            <br />
            <Paragraph>Message *</Paragraph>
            <br />
            <br />
            <textarea type="text" style={{width: '100%', height: '20vh'}} cols={500} />
            <FillButton>Submit</FillButton>
        </>
    )
}

export default ComplaintForm
