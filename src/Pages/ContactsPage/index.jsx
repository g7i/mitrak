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
                        6th Mile Stone Delhi – Tijara State Highway, Sirmoli Road ,Village Jharkhera , Alwar, Rajasthan ,  301001
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

                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default ContactsPage
