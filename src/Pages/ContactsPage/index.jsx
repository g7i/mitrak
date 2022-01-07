import React from 'react'
import { FillButton, FillImage, Heading, HyperLink, Paragraph } from '../../components/styledComponents/GlobalComponents'
import Layout from '../../constants/Layout'
import { TextField } from '@mui/material'
import { Link } from 'react-router-dom'
import styled from "styled-components";
const ContactsPage = () => {

    const submitContactForm = (e) => {
        e.preventDefault();
        //
    }

    return (
      <Layout>
        <div className="contactContainer">
          <div className="contentContaner">
            <Heading>Mailing Address</Heading>
            <Paragraph>
              <bold>Address: </bold>
              6th Mile Stone Delhi – Tijara State Highway, Sirmoli Road ,Village
              Jharkhera , Alwar, Rajasthan , 301001
            </Paragraph>
            <Paragraph>
              <bold>Phone: </bold>
              +91 (144) 2980851/52, +917597676193
            </Paragraph>
            <Paragraph>
              <bold>Email: </bold>
              admin@mitrc.ac.in, admission@mitrc.ac.in, hr@mitrc.ac.in
            </Paragraph>
            {/*<Heading>*/}
            {/*    Institute Functionaries (Directors, Deans, Placement Officer, Human Resource Manager)*/}
            {/*</Heading>*/}
            {/*<Paragraph><Link to="/institute-functionaries">Click on this link</Link> to view the contact details</Paragraph>*/}
            {/*<Heading>Division Functionaries</Heading>*/}
            {/*<Paragraph>*/}
            {/*    Board line: +91 (0144) 2980643*/}
            {/*</Paragraph>*/}
            {/*<Paragraph>*/}
            {/*    National callers use the city code along with the STD access code (0): 0144.*/}
            {/*</Paragraph>*/}
            {/*<Paragraph><Link to="/division-functionaries">Click on this link</Link> to view the contact details</Paragraph>*/}
          </div>
          <div>
            <div className="contactForm">
              <Heading>Send us your enquiry</Heading>
              <form action={submitContactForm}>
                <TextField
                  title="Email Address"
                  label="Email Address"
                  placeholder="Your email address"
                  variant="outlined"
                  required
                  style={{ width: "80%", marginTop: "1em" }}
                />
                <TextField
                  title="Subject"
                  label="Subject"
                  placeholder="Subject/Matter of your query"
                  variant="outlined"
                  required
                  style={{ width: "80%", marginTop: "1em" }}
                />
                <TextField
                  title="Message"
                  label="Message"
                  placeholder="Type your message here"
                  variant="outlined"
                  multiline
                  required
                  style={{ width: "80%", marginTop: "1em" }}
                />
                <FillButton style={{ width: "40%" }}>Submit Form</FillButton>
              </form>
            </div>
          </div>
        </div>

        <GoogleEarthImageWrapper>
          <FillImage
            src={
              "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2Fgoogle-earth.png?alt=media&token=d1284315-09b1-49b5-a734-06ada21c187d"
            }
          />
        </GoogleEarthImageWrapper>
      </Layout>
    );
}

export default ContactsPage

const GoogleEarthImageWrapper = styled.div`
    width : 900px;
    max-width : 90% ; 
    height : 900px;
    max-height : 90%;
    margin : 0 auto ; 
`
