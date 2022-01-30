import React from "react";
import {
  Container,
  HalfImage,
  Heading,
  Paragraph,
  SubHeading,
} from "../../components/styledComponents/GlobalComponents";
import Layout from "../../constants/Layout";
import { Colors } from "../../constants/UiConstants";
const MitrcLogo =
  "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2Falwar-285x75.png?alt=media&token=4698e854-49a1-4937-907c-c0fb868d7b16";

const HowToReach = () => {
  return (
    <Layout>
      <Container style={{ marginBottom: "50px" }}>
        {/*<div className="center__div">*/}
        {/*    <HalfImage*/}
        {/*        src={MitrcLogo}*/}
        {/*    />*/}
        {/*</div>*/}
        <Heading style={{ color: 'red' }}>How To Reach Us?</Heading>
        {/* <SubHeading>RAILWAY ROUTE :</SubHeading>
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
                </Paragraph> */}
      </Container>
      <Container style={{ paddingBottom: "0rem"  }}>
        <Heading style={{ color: Colors.BLUE, fontSize: '1.7rem' }}>
          Alwar Junction to MITRC
        </Heading>
        {/* <Paragraph>
          <strong style={{ color: Colors.BLUE }}>
            Please click on directions button on the map to start
          </strong>
        </Paragraph> */}
        <div className="mapContainer">
          <iframe
            style={{
              width: "600px",
              height: "450px",
              border : 0
            }}
            src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d56573.94239284425!2d76.60071510565646!3d27.597516356298012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x397299f47ba98e77%3A0xcfc8ff36e4aafd92!2sAlwar%20Junction%2C%20Naru%20Marg%2C%20Mungshka%2C%20Indra%20Colony%2C%20Alwar%2C%20Rajasthan!3m2!1d27.560323999999998!2d76.6214665!4m5!1s0x397297f10b92b0e7%3A0x649e1b1128df0dc4!2sMITRC%20College%20Campus%2C%20Sirmoli%20Rd%2C%20Jahar%20Khera%2C%20Rajasthan%20301001!3m2!1d27.6337275!2d76.6495738!5e0!3m2!1sen!2sin!4v1641453595043!5m2!1sen!2sin"
            width="600"
            height="450"
            allowFullScreen="false"
            loading="lazy"
          ></iframe>
        </div>
      </Container>

      <Container style={{paddingBottom : "4rem"}}>
        <Heading style={{ color: Colors.BLUE, fontSize: '1.7rem' }}>
          Bus Stand to MITRC</Heading>
        <div className="mapContainer">
          <iframe
            style={{
              width: "600px",
              height: "450px",
              border : 0
            }}
            src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d56575.179727158065!2d76.59344535564588!3d27.59511900655362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x3972998498513025%3A0x5caabd8e3542948!2sAlwar%20Bus%20Stand%2C%20Kabir%20Colony%2C%20Alwar%2C%20Rajasthan!3m2!1d27.562219199999998!2d76.6013062!4m5!1s0x397297f10b92b0e7%3A0x649e1b1128df0dc4!2sMITRC%20College%20Campus%2C%20Sirmoli%20Rd%2C%20Jahar%20Khera%2C%20Rajasthan%20301001!3m2!1d27.6337275!2d76.6495738!5e0!3m2!1sen!2sin!4v1641453735862!5m2!1sen!2sin"
            width="600"
            height="450"
            allowFullScreen="false"
            loading="lazy"
          ></iframe>
        </div>
      </Container>
    </Layout>
  );
};

export default HowToReach;
