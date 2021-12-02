import React from "react";
import {
  FillImage,
  FlexContainer,
  Heading,
  OneThirdImage,
  Paragraph,
  SubHeading,
} from "../../../../components/styledComponents/GlobalComponents";
import { getImages, getImagesLab } from "../../../../utils/firebase/department";
import styled from "styled-components";
import ModalImage from "../../../../components/ModalImage";
import { Collections } from "../../../../utils/firebase/storage";
import HeroImage from "../../../../assets/images/cse-department/coding-platform-STEM-code.jpg";
import ImageSlider, { ListItem } from "../components/imageSlider";

const Labs = [
  "Data Structure Lab",
  "DBMS Lab",
  "OOP Lab",
  "Software Engineering Lab",
  "Computer Graphics Lab",
  "Compiler Design Lab",
  "Java Lab",
  "Cyber Security Lab",
  "IoT Lab",
  "Python Lab",
  "C Programming Lab",
  "LSP Lab",
  "Network Programming Lab",
  "Android Lab",
];

const domains = [
  `Mobile App Development`,
  `Digital Application Designing`,
  `Software Development`,
  `Games Development`,
  `Online Recruitment Testing Service`,
  `Customized Desktop Computers`,
  `Publishing Business`,
  `Computer Security Solution`,
  `Digital Marketing Service`,
  `Tech Tutor`,
];

const Activities = [
  {
    data: "04-09-21",
    activity: "Teacher's Day",
    remark:
      "A warm celebration on the occasion of teacher's day was conducted in Seminar Hall. Students participated for different events, they titled to the faculty and presented the gift also. The celebration was very charm full, attractive & energetic.",
  },

  {
    data: "15-09-21",
    activity: "Engineering's Day",
    remark:
      "A warm celebration on the occasion of Engineering's Day & following activities  were conducted: Quiz, Debate, Poster Making & Extempore",
  },

  {
    data: "25-09-21",
    activity:
      "International Webinar on Cyber Security: its importance in today’s scenario-scope and career pathway. ",
    remark:
      "Dr. Niteesh Murugan Kaliyamurthy (WISA University U.K.) and Dr. Swapnesh Taterh(Amity University, Jaipur). Addressed to student regarding importance of cyber security in today’s scenario-scope and career.",
  },

  {
    data: "23-10-21",
    activity: "C language Quiz Competition",
    remark:
      "Department of computer science engineering conducted a quiz competition for all semester students which will enhanced the knowledge & facing of competitive exams.",
  },
];

const ComputerDepartment = () => {
  const [images, setImages] = React.useState([]);
  const [labImages, setLabImages] = React.useState([]);
  React.useEffect(() => {
    getImages(Collections.departments.computer).then((imageList) => {
      setImages(imageList);
    });
    getImagesLab(Collections.departments.computer).then((imageList) => {
      setLabImages(imageList);
    });
  }, []);
  return (
    <>
      <>
        <FillImage src={HeroImage} />
        <Heading>{"About the Computer Science Engineering:"}</Heading>
        <Paragraph>{`Computer Science Engineering (CSE) encompasses a variety of topics that relates to computation, like analysis of algorithms, programming languages, program design, software, and computer hardware.`}</Paragraph>
        <Paragraph>{`Computer Science Engineering uses principles from Computer Science and Electrical Engineering to create hardware (physical components) and firmware which are used in a wide range of areas: consumer electronics, medical devices, communication systems, aircraft, self-driving cars, etc.`}</Paragraph>
        <Paragraph>{`Computer Science Engineering students learn how to develop, prototype, and test microchips, circuits, processors, conductors and any other component used in computer devices or systems (e.g. super computers, smart phones, laptops, servers, IoT gadgets). They also develop firmware, an essential type of software that allows operating systems and applications to take full advantage of the hardware.`}</Paragraph>
        <Paragraph>{`Today we are speeding up towards the computerization and modernization in our entire social, professional, occupational, defense and many other activities. Computer is now an essential part of our life and needs. It is mainly because of the error free and fast operation, and no need to keep hard store and transport the data. “Your time is in your one click”.`}</Paragraph>

        <Heading>{"About The Department:"}</Heading>
        <Paragraph>{`The CSE Department of MITRC was started in the year 2007 with an intake of 30 students. Currently the Department offers an under-graduate program (B. Tech) in Computer science and engineering with an intake of 180 students and post graduate program (M. Tech) in computer science and engineering with an intake of 18. The department has highly qualified faculty members with minimum M. Tech qualification in Computer science and engineering, Computer Technology and Software Engineering. Department of CSE is committed to impart Technical and Research based quality education and to develop innovative skills among the students and to enrich the academic activities through continual improvement in the teaching and learning processes. The department also focuses on infusing confidence in the minds of students and to develop them as entrepreneurs.`}</Paragraph>
        <Paragraph>{`It develops expertise for consultative activities by providing opportunities for company– institute interaction. It is also constantly upgrading the technical expertise for producing competent professionals to cater to the needs of society and to meet the global challenges. Much care is taken to involve the faculty in the development of laboratories and to take an active interest in counselling the students. Students of our department actively participate in National-level Student programs Contests being organized at IIT's, NITSs, and various other Engineering Colleges.  A good number of Students are well placed in reputed organizations.`}</Paragraph>

        <Section>
          <Heading>{"Computer Science Engineering Labs at MITRC:"}</Heading>
          <ul>
            {Labs.map((item) => (
              <ListItem style={{ marginTop: "0.4rem", color: "#152D35" }}>{item}</ListItem>
            ))}
          </ul>
          <FlexContainer wrap={"wrap"} rowGap={40}>
            {labImages.map((item) => (
              <div
                style={{
                  width: "30%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <ModalImage
                  src={item}
                  onClickOpen
                  width={"100%"}
                  height={"250px"}
                  objectFit={"cover"}
                  filter
                />
              </div>
            ))}
          </FlexContainer>
        </Section>

        <Section>
          <Heading>{"Career in Computer Engineering:"}</Heading>
          <Paragraph>{`Computer science job opportunities vary depending on the degree. Graduates with associate degrees often pursue roles as computer support specialists or web developers. Bachelor’s degrees open doors to many more computer science careers in software development, database administration, and computer programming.`}</Paragraph>
          <Paragraph>{`Employers typically expect computer and information research scientists to hold master’s degrees at minimum. Since its inception during the Industrial Revolution, computer science has become essential to everyday life and changed nearly every part of society: Cyber security experts protect companies from foreign and domestic interference, while everyday people stream movies and connect with video conferencing technology.`}</Paragraph>
        </Section>

        <Section>
          <Heading>
            {"List of Psu & State Govt. Jobs in Computer Engineering:"}
          </Heading>
          <SubHeading>{"PSU:- "}</SubHeading>
          <Paragraph>{`IOCL, NFL, NLC, ONGC and ECIL are recruiting through GATE.`}</Paragraph>

          <SubHeading>{"State Govt. Jobs: "}</SubHeading>
          <Paragraph>{`Computer Teacher, Raj. Income Tax, Jaipur Metro Ltd., RVNL, and DMRC etc. `}</Paragraph>

          <SubHeading>{"Private Companies:"}</SubHeading>
          <Paragraph>{`Here we have listed out 15 of the top computer science companies which are highly recommended for you to work 2021 and 2022 as well. Amazon, Deloitte, CGI, Mindtree, Infosys, Cognizant, TCS, HCL, Google, Wipro, Tech Mahindra, IBM, Microsoft, Mphasis, and HP Inc. So, these are 15 of the top technology service companies which are ideal for computer science graduates to begin their career in.`}</Paragraph>

          <SubHeading>{"Other Opportunities:"}</SubHeading>
          <Paragraph>{`KVS, Indian Railways (Section Engineer, Jr. Engineer, Traffic Apprentice, Commercial Apprentice, Goods Guard, Station Master, Banking(Clerk, PO, SO) & many more.`}</Paragraph>
        </Section>

        <Section>
          <Heading>{"Job Profile:"}</Heading>
          <Paragraph>
            {`for the Computer science engineering many profile are such as  Application Analyst, Business Intelligence Analyst, Computer Programmer, Data Architect, Database Manager, Data Warehouse Developer, Graphic Designer, Information Security Analyst, IT Manager, Mobile App Developer, Network Security Engineer, Programmer Analyst, Software Developer, Telecommunications Manager, Web Developer, Data Scientist, Data Engineer, Full Stack Developer, and Technical Content Engineer etc.`}
          </Paragraph>
        </Section>

        <Heading>{"Start-Up Schemes for Engineers:"}</Heading>
        <Paragraph>
          {`Startups are ideal for computer science graduates. Most of the startups are technology driven, and a computer science graduate will understand it better. In fact, a computer science graduate is likely to make their start ideas successful than non-technical persons. The following is the list of the top 10 business startup ideas for computer science graduates.`}
        </Paragraph>

        <Section>
          <Heading>
            {"List of Notable Startup in Computer Science Engineering:"}
          </Heading>

          {domains.map((item) => (
            <ListItem
              style={{
                marginTop: "0.4rem",
                color: "#152D35",
                fontSize: "1.4rem",
              }}
            >
              {item}
            </ListItem>
          ))}
        </Section>

        <Section>
          <Heading>{"Activities during January 2021 to October 2021:"}</Heading>
          <Table>
            <TableRow>
              <TableHeading>S.No</TableHeading>
              <TableHeading>Date</TableHeading>
              <TableHeading>Activity</TableHeading>
              <TableHeading>Remark</TableHeading>
            </TableRow>
            {Activities.map((item, index) => (
              <TableRow>
                <TableData>{index + 1}</TableData>
                <TableData>{item.data}</TableData>
                <TableData>{item.activity}</TableData>
                <TableData>{item.remark}</TableData>
              </TableRow>
            ))}
          </Table>
        </Section>

        <Section>
          <FlexContainer wrap={"wrap"} rowGap={40}>
            <ImageSlider imageArray={images} />

            
          </FlexContainer>
        </Section>
      </>
    </>
  );
};

export default ComputerDepartment;

const Table = styled.table`
  border: 1px solid black;
  border-collapse: collapse;
  margin: 1rem 0px;
`;

const TableHeading = styled.th`
  border: 1px solid black;
  color: #32404d;
  font-size: 1.5rem;
`;

const TableRow = styled.tr``;
const TableData = styled.td`
  border: 1px solid black;
  padding: 0.4rem;
`;

const Section = styled.div`
  margin: 4rem 0;
`;
