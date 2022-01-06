import React from "react";
import Banner from "../../components/Banner";
import {
  Heading,
  Container,
  Paragraph,
  FillImage,
  Box,
  BoxHeading,
  ListItem,
  FlexContainer,
  SmallText,
} from "../../components/styledComponents/GlobalComponents";
import Layout from "../../constants/Layout";
import collegeImg from "../../assets/images/college.jpg";
import directorImg from "../../assets/images/director.png";
import students from "../../assets/images/students.jpg";
import advisory from "../../assets/images/advisory.jpg";
import society from "../../assets/images/society.jpg";

const staticData = {
  heading: "About MITRC Alwar",
  description: "MITRC alwar description",
};

const boardMembers = [
  {
    id: 1,
    name: "Smt Bimla Devi",
    designation: "Chairperson",
  },
  {
    id: 2,
    name: "Shri Ashok Agarwal",
    designation: "Secretary",
  },
  {
    id: 3,
    name: "Dr. G.K. Agarwal",
    designation: "Member",
  },
  {
    id: 4,
    name: "Shri Purshottam Gupta",
    designation: "Member",
  },
  {
    id: 4,
    name: "Shri Piyush Gupta",
    designation: "Member",
  },
  // {
  //     id: 5,
  //     name: 'Shri Piyush Gupta',
  //     designation: 'Member'
  // },
  {
    id: 6,
    name: "Shri Amit Choudhary",
    designation: "Member",
  },
  {
    id: 7,
    name: "Shri Arvind Agarwal",
    designation: "Member",
  },
  {
    id: 8,
    name: "Dr. Rajeev Gupta",
    designation: "Member (Nominated by RTU)",
  },
  {
    id: 9,
    name: "Dr. S.K. Sharma",
    designation: "Principal",
  },
  {
    id: 10,
    name: "Dr. Raish Mohammad",
    designation: "Member",
  },
  {
    id: 11,
    name: "Sh. Vikas Mehlawat",
    designation: "Member",
  },
];

const advisoryBoard = [
  {
    id: 1,
    name: "Mr. Rohit Goel (B.Tech. 1995)",
    designation:
      "Computer Science From Indian Institute of Technology “IIT” , Kanpur –(INDIA)",
    positions: [
      {
        id: 11,
        position: "Director, Ewayz Systems Pvt. Ltd.",
      },
      {
        id: 22,
        position: "Director, Whitelotus Consultants Pvt. Ltd.",
      },
      {
        id: 33,
        position: "Director, IBA Craft Pvt. Ltd.",
      },
      {
        id: 44,
        position: "Director, IBA Craft Pvt. Ltd.",
      },
    ],
    email: "rohitgoel.mitrc@gmail.com",
  },
  {
    id: 2,
    name: "Mr. Rishi Chandra (B. Tech. 1995)",
    positions: [
      {
        id: 12,
        position:
          "Computer Science From Indian Institute of Technology “IIT” , Kanpur –(INDIA)",
      },
      {
        id: 13,
        position: "Director, Rishi Chalchitra Pvt. Ltd.",
      },
    ],
    email: "rishichandra.mitrc@gmail.com",
  },
  {
    id: 3,
    name: "Mr. Ashish Mohan (B. Tech. 1996)",
    positions: [
      {
        id: 21,
        position:
          "Computer Science From Indian Institute of Technology “IIT” , Kharagpur –(INDIA)",
      },
      {
        id: 22,
        position: "Senior consultant, Clicksoftware India Pvt. Ltd.",
      },
    ],
    email: "ashishmohan.mitrc@gmail.com",
  },
  {
    id: 4,
    name: "Mrs. Shalu Goel (B. Tech. 2000) ",
    positions: [
      {
        id: 31,
        position:
          "Electrical Engineering From Jamia Millia Islamia “JMI” , New Delhi –(INDIA)",
      },
      {
        id: 32,
        position:
          "Head, Business Development, Whitelotus Consultants Pvt. Ltd.",
      },
    ],
    email: "shalugoel.mitrc@gmail.com",
  },
  {
    id: 5,
    name: "Mr. Manish Bansal (B. Tech. 2002) ",
    positions: [
      {
        id: 41,
        position:
          "Computer Science From Indian Institute of Technology “IIT” , New Delhi –(INDIA )",
      },
    ],
    email: "manishbansal.mitrc@gmail.com",
  },
  {
    id: 6,
    name: "Dr. G. K. Aggrawal (orthopaedician ) ",
    positions: [
      {
        id: 51,
        position:
          "Head of the Department of orthopaedic Agaawal Hospital , New Delhi –(INDIA)",
      },
    ],
    email: "drgkaggrawal.mitrc@gmail.com",
  },
  {
    id: 7,
    name: "Dr. Arvind Aggrawal (orthopaedician ) ",
    positions: [
      {
        id: 61,
        position: "orthopaedician in Agaawal Hospital , New Delhi –(INDIA)",
      },
    ],
    email: "drarvind.mitrc@gmail.com",
  },
  {
    id: 8,
    name: "Mr. Manjeet Choudhary (MBA 2009) ",
    positions: [
      {
        id: 71,
        position: "Cardiff University (UK)",
      },
    ],
    email: "manjeet.mitrc@gmail.com",
  },
];

const AboutUsPage = () => {
  return (
    <Layout>
      <Banner
        bannerHeading={staticData.heading}
        bannerDescription={staticData.description}
      />
      <Container style={{ marginTop: "4vh" }}>
        <Heading style={{ textAlign: "center", marginTop: 0 }}>
          Modern Institute of Technology and Research Center
        </Heading>
        <Paragraph style={{ textAlign: "center" }}>
          (Approved By AICTE and Affiliated to B.T.U.)
        </Paragraph>
        <Paragraph>
          Alwar- the City of Parks has always been proud of its rich heritage
          and culture. We at MITRC, Alwar add another feather in the already
          colorful cap of Alwar, Rajasthan. Since its inception in 2007, Modern
          Institute of Technology & Research Centre (An Engineering and
          Management College), Alwar has been known to enable students to carve
          a niche for themselves and develop a strong personality. Ranked as one
          of the best private engineering and management colleges of Alwar,
          Rajasthan it is located in the serene lap of the Aravali Hills on
          Alwar-Delhi-Tijara Highway.MITRC Alwar provides students with
          state-of-the art infrastructure which helps them to attain
          understanding of their chosen engineering discipline. Engineering
          transforms scientific discoveries into technological solutions for the
          benefit of humanity. Everything we rely on for work, life and play has
          been touched by Engineering.
        </Paragraph>
        <FillImage
          src={
            "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2FDSC00012.JPG?alt=media&token=ee467461-8d9b-496a-9876-fa16de55cb75"
          }
          alt="mitrc alwar rajasthan"
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <SmallText>
            Address: 6th Mile Stone Delhi – Tijara State Highway, Sirmoli Road
            ,Village Jharkhera , Alwar, Rajasthan, 301028
          </SmallText>
          <div style={{ marginTop: "0.8rem" }}></div>

          <SmallText>Phone: +91 (144) 2980851/52, +917597676193</SmallText>
          {/* <SmallText>
              Phone: +91 (144) 2731596, 2980643, +917597676193
            </SmallText> */}
        </div>
      </Container>
      <Container>
        {/*<Heading style={{ textAlign: "center", marginTop: 0 }}>*/}
        {/*  Our Vision and Mission*/}
        {/*</Heading>*/}
        <FlexContainer style={{ alignItems: "flex-start" }}>
          <Box>
            <BoxHeading>Vision</BoxHeading>
            <Paragraph>
              To produce well trained professionals and leaders for serving
              society and nation through excellence in academics, research,
              development and innovations.
            </Paragraph>
            <br />
            <br />
          </Box>
          <Box>
            <BoxHeading>Mission</BoxHeading>
            <Paragraph>
              <ul>
                <li>
                  To provide state of the art facility for academic excellence.{" "}
                </li>
                <li>
                  To identify emerging areas of technology and management that
                  caters to regional,national and global challenges.
                </li>
                <li>
                  To provide an environment of industry oriented research and
                  development{" "}
                </li>
                <li>
                  To inculcate core values of professional ethics, team-work ,
                  inter personal skills and life-long learning for sustainable
                  development of the society.
                </li>
              </ul>
            </Paragraph>
          </Box>
        </FlexContainer>
      </Container>
      <Container style={{ marginTop: "5vh" }}>
        <Heading style={{ textAlign: "center", marginTop: 0 }}>
          Chairman's Desk
        </Heading>
        <FlexContainer style={{ alignItems: "flex-start" }}>
          <Box>
            <FillImage
              src={
                "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2F5_6244351392857720050.jpg?alt=media&token=ce6d5fa0-b7e5-4660-9945-3ba4a393b029"
              }
              alt="chairman mitrc alwar"
            />
          </Box>
          <Box>
            <Paragraph>
              As we are moving ahead in twenty first century, a realization that
              draws and makes us all proud is India’s emergence as an economic
              power to reckon with but this reinstates the need or required for
              quality education.
            </Paragraph>
            <Paragraph>
              MITRC Alwar has been built as an Institute with a difference. We
              have taken the pledge to provide professional education of a
              distinct genre by blending it with right values. Our institute
              strives at grooming the students, making them sensitive towards
              societal challenges of the world in general and India in
              particular, to handle it with professionals and technical prowess.
            </Paragraph>
            <Paragraph>
              This is to be done by the development of professional and mental
              framework of the young students which would enable them to
              evaluate, analyze, solve the challenges and write new stories of
              success.
            </Paragraph>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <SmallText style={{ fontSize: "1.4rem" }}>
                Mrs. Bimla Devi
              </SmallText>
              <SmallText style={{ marginTop: "0.5rem" }}>Chairman</SmallText>
              <SmallText style={{ marginTop: "0.5rem" }}>
                MITRC & AIll India Arya Samajis Society for Advance Education &
                Research
              </SmallText>
              <SmallText style={{ margin: "0.5rem 0" }}>
                Number: +91 9414063671
              </SmallText>
              <SmallText>E-mail: bimla.chairmanmitrc@gmail.com</SmallText>
            </div>
          </Box>
        </FlexContainer>
      </Container>
      <Container>
        <Heading style={{ textAlign: "center", marginTop: 0 }}>
          Director's Desk
        </Heading>
        <FlexContainer style={{ alignItems: "flex-start" }}>
          <Box>
            <FillImage
              src={
                "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2Fdirector.png?alt=media&token=beacf5f4-e555-4e47-875b-f85626ebb1a9"
              }
              alt="director mitrc alwar"
            />
          </Box>
          <Box>
            <Paragraph>
              We are extremely delighted to introduce you to MITRC, Alwar. From
              its origin in 2007, MITRC has served our nation’s flagship
              comprehensive institution of technical and management education.
              We are elevating institute’s tradition of superbness in technical
              and management education through high quality programs in
              teaching, research, on-site industry executive training and
              service
            </Paragraph>
            <Paragraph>
              Our campus is situated in a beautiful landscape. Our distinguished
              faculty with extensive ties to leading engineering and research
              community are able to bring the best engineers and managers into
              our programs as visiting faculty and guest speakers.
            </Paragraph>
            <Paragraph>
              Our faculties are renowned scholars and accomplished practitioners
              who are actively engaged in the academic fineness. Our students
              are innovators, engineers, mangers, entrepreneurs and aspiring
              leaders.
            </Paragraph>
            <br />

            <div style={{ display: "flex", flexDirection: "column" }}>
              <SmallText style={{ fontSize: "1.4rem" }}>
                Dr. SK Sharma ( B.E, M.Tech,P.hD,MBA,P.hD)
              </SmallText>
              <SmallText style={{ marginTop: "0.5rem" }}>Director</SmallText>
              <SmallText style={{ marginTop: "0.5rem" }}>MITRC</SmallText>
              <SmallText style={{ margin: "0.5rem 0" }}>
                Number: +91 9413106857
              </SmallText>
              <SmallText>E-mail: director@mitrc.ac.in</SmallText>
            </div>
          </Box>
        </FlexContainer>
      </Container>
      <Container>
        <Heading style={{ textAlign: "center", marginTop: 0 }}>
          Board Of Governors
        </Heading>
        <FlexContainer style={{ marginTop: 0 }}>
          <Box style={{ width: "80vw" }}>
            <Paragraph style={{ textAlign: "center", width: "100%" }}>
              The Governing Board reviews are scheduled on regular basis in
              MITRC Alwar.
            </Paragraph>
            <ul
              style={{
                width: "100%",
                display: "grid",
                gridTemplateColumns: "50% 50%",
                listStylePosition: "inside",
                marginTop: "10px",
                color: "#2B2B2B",
                lineHeight: "1.8rem",
              }}
            >
              {boardMembers.map((member) => (
                <li
                  key={member.id}
                  style={{ fontFamily: "DejaVu Sans", paddingLeft: "10vw" }}
                >
                  {member.name} ({member.designation})
                </li>
              ))}
            </ul>
          </Box>
          {/*<Box>*/}
          {/*  <FillImage src={students} alt="governing board mitrc" />*/}
          {/*</Box>*/}
        </FlexContainer>
      </Container>
      <Container>
        <Heading style={{ textAlign: "center", marginTop: 0 }}>
          Advisory Board
        </Heading>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "50% 50%",
            paddingTop: "20px",
          }}
        >
          {advisoryBoard.map((item) => (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "10px",
              }}
            >
              <Paragraph key={item.id}>
                <strong style={{ fontSize: "1.4rem" }}>{item.name}</strong>
              </Paragraph>
              {item.positions.map((item) => (
                <div
                  key={item.id}
                  style={{
                    color: "#32404D",
                    fontFamily: "DejaVu Sans",
                    lineHeight: "1.3rem",
                    fontSize: "0.9rem",
                  }}
                >
                  {item.position}
                </div>
              ))}
              <div
                style={{
                  color: "#32404D",
                  fontFamily: "DejaVu Sans",
                  lineHeight: "1.3rem",
                  fontSize: "0.9rem",
                }}
              >
                {item.email}
              </div>
            </div>
          ))}
        </div>
      </Container>
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          marginBottom: "4rem",
        }}
      >
        <BoxHeading style={{ textAlign: "center", fontSize: "1.5rem" }}>
          “All India Arya Samajis Society for Advance Education & Research”
          (AIASSAER)
        </BoxHeading>
        <Paragraph>
          “All India Arya Samajis Society for Advance Education & Research”
          (AIASSAER) was formed in 1999 by a group of prominent people who
          wanted to provide a breeding ground for ideas & talent to keep pace
          with the ever changing world of science and technology. It was the
          heartfelt desire of the members to provide meaningful education to
          conduct original research and to provide leadership in technological
          innovation for the industrial growth of the country. Thus, the members
          of the society who founded <strong>MITRC Alwar</strong> are confident
          that with the best faculty and guidance in peaceful and beautiful
          surroundings, the students will emerge as successful and trained
          professionals. They will be the icons of MITRC Alwar and pride of
          India.
        </Paragraph>
        <Paragraph>
          The AIASSAER undertook the task of spreading the light of knowledge &
          values at Alwar, a city of parks, and widely known as “The Singhdwar
          of Rajasthan”. Alwar is also known as the Lion Gate of Rajasthan,
          Scotland of Rajasthan and Kashmir of East Rajasthan.
        </Paragraph>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "2rem",
          }}
        >
          <SmallText>
            Address: 6th Mile Stone Delhi – Tijara State Highway, Sirmoli Road
            ,Village Jharkhera , Alwar, Rajasthan, 301028
          </SmallText>
          <div style={{ marginTop: "0.8rem" }}></div>

          <SmallText>Phone: +91 9414063671</SmallText>
          <SmallText>E-mail: aiassaer@gmail.com</SmallText>
        </div>
      </Container>
    </Layout>
  );
};

export default AboutUsPage;
