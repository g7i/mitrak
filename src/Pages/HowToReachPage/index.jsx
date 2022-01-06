import React from 'react'
import { Container, HalfImage, Heading, Paragraph, SubHeading } from '../../components/styledComponents/GlobalComponents'
import Layout from '../../constants/Layout';
import {Colors} from "../../constants/UiConstants";
const MitrcLogo = "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2Falwar-285x75.png?alt=media&token=4698e854-49a1-4937-907c-c0fb868d7b16";

const HowToReach = () => {
    return (
        <Layout>
            <Container style={{ marginBottom: '50px' }}>
                {/*<div className="center__div">*/}
                {/*    <HalfImage*/}
                {/*        src={MitrcLogo}*/}
                {/*    />*/}
                {/*</div>*/}
                <Heading>How To Reach Us?</Heading>
                <SubHeading>RAILWAY ROUTE :</SubHeading>
                <Paragraph>
                    NEAREST RAILWAY STATION : ALWAR JUNCTION
                </Paragraph>
                <Paragraph>
                    DISTANCE : 12 KILOMETERS
                </Paragraph>
                <Paragraph>
                    DIRECT ROUTE: FROM DELHI JUNCTION, JAIPUR JUNCTION, MATHURA JUNCTION,REWARI JUNCTION, AMRITSAR JUNCTION, CHANDIGARH , JAMMU.
                </Paragraph>
                <SubHeading>
                    BUS ROUTE :
                </SubHeading>
                <Paragraph>NEAREST BUS STOP : ALWAR DEPOT & MATASYA NAGAR DEPOT & CHIKANI BUS STOP</Paragraph>
                <Paragraph>DISTANCE : 12 KILOMETERS & 7 KILOMETERS RESPECTIVELY</Paragraph>
                <Paragraph>DIRECT BUS : DELHI , GURGAON, TIJARA, MATHURA, BHARATPUR, DAUSA, BHARATPUR, KOTA </Paragraph>
                <SubHeading>PUBLIC FEED TRANSPORT : </SubHeading>
                <Paragraph>DISTANCE : 12-15 KILOMETERS</Paragraph>
                <Paragraph>
                    AVAILABILITY : PUBLIC FEED TRANSPORT LIKE BUS, AUTO, CAB AVAILABLE FROM EVERY POINT OF ALWAR CITY LIKE BHAGAT SINGH CIRCLE, ALWAR JUNCTION, BIJLI GHAR CIRCLE, TELCO CIRCLE, NAMAN HOTEL etc.
                </Paragraph>
            </Container>
            <Container style={{ paddingBottom: '4rem' }}>
                <Heading style={{ color: Colors.BLUE }}>Locate Us From Your Current Location</Heading>
                <Paragraph>
                    <strong style={{ color: Colors.BLUE }}>/*Please click on directions button on the map to start*/</strong>
                </Paragraph>
                <div className="mapContainer">
                    <iframe
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                        }}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1767.3516452633896!2d76.64847310826048!3d27.633704645705613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397297f10b92b0e7%3A0x649e1b1128df0dc4!2sMITRC%20College%20Campus%2C%20Sirmoli%20Rd%2C%20Jahar%20Khera%2C%20Rajasthan%20301001!5e0!3m2!1sen!2sin!4v1636353531422!5m2!1sen!2sin"
                        width="600" height="450" style={{border: 0}} allowFullScreen="false" loading="lazy"></iframe>
                </div>
            </Container>
        </Layout>
    )
}

export default HowToReach
