import React from 'react'
import { FillButton, FillImage, Heading, HyperLink, Paragraph } from '../../components/styledComponents/GlobalComponents'
import Layout from '../../constants/Layout'
import { TextField } from '@mui/material'
import { Link } from 'react-router-dom'
import styled from "styled-components";
import {addContact} from "../../utils/firebase/contacts";


const ContactsPage = () => {
  const [loading, setLoading] = React.useState(false);

    const submitContactForm = async (e) => {
      e.preventDefault();
      setLoading(true);

      const name = e.target.name.value;
      const phone = e.target.phone.value;
      const message = e.target.message.value;

      try {
        await addContact({ name, phone, message, createdAt: Date.now(), title: "Contact" });
        e.target.reset();
      } catch (e) {
        alert("Unable to submit message");
      }

      setLoading(false);
    }

    return (
      <Layout>
        <div className="contactContainer">
          <div className="contentContaner">
            <Heading style={{ fontSize: "1.8rem" }}>
              MODERN INSTITUTE OF TECHNOLOGY & RESEARCH CENTRE
            </Heading>
            <Paragraph>
              <bold>Address: </bold>
              6th Mile Stone Delhi – Tijara State Highway, Sirmoli Road, Village
              Jharkhera, Alwar, Rajasthan, 301001
            </Paragraph>
            <Paragraph>
              <bold>Phone: </bold>
              +91 (144) 2980851/52, +917597676193/+917597244813
            </Paragraph>
            <Paragraph>
              <bold>Email: </bold>
              admission@mitrc.ac.in, hr@mitrc.ac.in
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
              <Heading style={{ fontSize: "1.8rem" }}>
                Send us your enquiry
              </Heading>
              <form onSubmit={submitContactForm}>
                <TextField
                  name="name"
                  title="Full Name"
                  label="Full Name"
                  variant="outlined"
                  required
                  style={{ width: "80%", marginTop: "1em" }}
                />
                <TextField
                  name="phone"
                  title="Phone Number"
                  label="Phone Number"
                  variant="outlined"
                  required
                  style={{ width: "80%", marginTop: "1em" }}
                />
                <TextField
                  name="message"
                  title="Message"
                  label="Message"
                  placeholder="Type your message here"
                  variant="outlined"
                  multiline
                  required
                  style={{ width: "80%", marginTop: "1em" }}
                />
                <FillButton disabled={loading} type="submit" style={{ width: "40%" }}>{loading ? 'Submitting' : 'Submit'} Form</FillButton>
              </form>
            </div>
          </div>
        </div>

        <GoogleEarthImageWrapper>
          <FillImage
            style={{ cursor: "pointer" }}
            src={
              "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2FHome%20Page%2FContact%20Us%2Fgoogle%20earth.png?alt=media&token=4c41989e-59f0-4d9c-9bf4-a2b0b5d81d7d"
            }
            onClick={() => {
              window.location.href =
                "https://earth.google.com/web/search/MITRC+College+Campus,+Sirmoli+Road,+Jahar+Khera,+Rajasthan/@27.63370465,76.64956745,267.8754726a,436.75831862d,35y,0h,45t,0r/data=CqUBGnsSdQolMHgzOTcyOTdmMTBiOTJiMGU3OjB4NjQ5ZTFiMTEyOGRmMGRjNBlqEyf3O6I7QCGp1fydkilTQCo6TUlUUkMgQ29sbGVnZSBDYW1wdXMsIFNpcm1vbGkgUm9hZCwgSmFoYXIgS2hlcmEsIFJhamFzdGhhbhgCIAEiJgokCTwcY-pDczJAETscY-pDczLAGSjrH-G5dyRAIeJn4LCKJ1bAKAI";
            }}
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
