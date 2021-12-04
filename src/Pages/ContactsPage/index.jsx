import React from 'react'
import { FillButton, Heading, HyperLink, Paragraph } from '../../components/styledComponents/GlobalComponents'
import Layout from '../../constants/Layout'
import { TextField } from '@mui/material'
import { Link } from 'react-router-dom'

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
                        6th Mile Stone Delhi – Tijara State Highway, Sirmoli Road ,Village Jharkhera , Alwar, Rajasthan ,  India
                    </Paragraph>
                    <Paragraph>
                        <bold>Post Office: </bold>
                        Bhadarpur- Chikani, Alwar
                    </Paragraph>
                    <Paragraph>
                        <bold>Pin Code: </bold>
                        301028
                    </Paragraph>
                    <Paragraph>
                        <bold>Phone: </bold>
                        +91 (144) 2731596, 2980643, +917597676193
                    </Paragraph>
                    <Paragraph>
                        <bold>Fax: </bold>
                        +91 (144) 2980643
                    </Paragraph>
                    <Paragraph>
                        <bold>Email: </bold>
                        admin@mitrc.ac.in, admission@mitrc.ac.in, hr@mitrc.ac.in
                    </Paragraph>
                    <Heading>Working Hours</Heading>
                    <Paragraph>
                        9:00 a.m to 5:00 p.m (Monday to Saturday)
                        (See holiday list below)
                    </Paragraph>
                    <Heading>
                        Institute Functionaries (Directors, Deans, Placement Officer, Human Resource Manager)
                    </Heading>
                    <Paragraph><Link to="/institute-functionaries">Click on this link</Link> to view the contact details</Paragraph>
                    <Heading>Division Functionaries</Heading>
                    <Paragraph>
                        Board line: +91 (0144) 2980643
                    </Paragraph>
                    <Paragraph>
                        National callers use the city code along with the STD access code (0): 0144.
                    </Paragraph>
                    <Paragraph><Link to="/division-functionaries">Click on this link</Link> to view the contact details</Paragraph>
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
                                style={{ width: '80%', marginTop: '1em' }}
                            />
                            <TextField
                                title="Subject"
                                label="Subject"
                                placeholder="Subject/Matter of your query"
                                variant="outlined"
                                required
                                style={{ width: '80%', marginTop: '1em' }}
                            />
                            <TextField
                                title="Message"
                                label="Message"
                                placeholder="Type your message here"
                                variant="outlined"
                                multiline
                                required
                                style={{ width: '80%', marginTop: '1em' }}
                            />
                            <FillButton style={{ width: '40%' }}>Submit Form</FillButton>
                        </form>
                        <div className="mapContainer">
                            <iframe
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                }}
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1767.3516452633896!2d76.64847310826048!3d27.633704645705613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397297f10b92b0e7%3A0x649e1b1128df0dc4!2sMITRC%20College%20Campus%2C%20Sirmoli%20Rd%2C%20Jahar%20Khera%2C%20Rajasthan%20301001!5e0!3m2!1sen!2sin!4v1636353531422!5m2!1sen!2sin" width="600" height="450" style={{ border: 0 }} allowfullscreen="false" loading="lazy"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default ContactsPage
