import React from 'react'
import { Container, HalfImage, Heading, Paragraph, SubHeading } from '../../components/styledComponents/GlobalComponents'
import Layout from '../../constants/Layout';
import MitrcLogo from '../../assets/images/mitrc.png';

const HowToReach = () => {
    return (
        <Layout>
            <Container>
                <div className="center__div">
                    <HalfImage
                        src={MitrcLogo}
                    />
                </div>
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
        </Layout>
    )
}

export default HowToReach
