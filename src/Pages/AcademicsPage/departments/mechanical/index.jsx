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
import { ListItem } from "../components/imageSlider";

const PsuData = [
  {
    first: `Steel Authority of India Limited (SAIL)`,
    second: `Hindustan Aeronautics Limited (HAL)`,
  },

  {
    first: `Hindustan Petroleum Corporation Limited (HPCL)`,
    second: `National Hydroelectric Power Corporation (NHPC)`,
  },

  {
    first: `Rail India Technical and Economic Science`,
    second: `Indian Oil Corporation Limited`,
  },

  {
    first: `Bhabha Atomic Research Centre (BARC)`,
    second: `National Thermal Power Corporation Limited`,
  },

  {
    first: `BSNL Junior Telecom Officer (JTO)`,
    second: `Gas Authority of India Limited`,
  },

  {
    first: `Airport Authority of India (AAI)`,
    second: `Central Electronics Limited`,
  },

  {
    first: `Nuclear Power Corporation of India Limited (NPCIL)`,
    second: `BSNL Junior Telecom Officer (JTO)`,
  },

  {
    first: `Rashtriya Ispat Nigam Limited (RINL)`,
    second: `Defense Research Development Organisation (DRDO Recruitment)`,
  },

  {
    first: `National Highway Authorities of India (NHAI)`,
    second: `National Aluminium Company Limited (NALCO)`,
  },

  {
    first: `Magazin Dock Shipbuilders (MDL)`,
    second: `West Bengal State Electricity Distribution Company Limited (WBSEDCL)`,
  },
];

const Activities = [
  {
    data: "16-03-2021",
    activity: "Webinar on Process Design and Development- Prototyping",
    remark:
      "Mr. Piyush Ranjan, Manager at Eicher, Alwar addressed to the student regarding how to plan and Develop a Product for industrial point of view.",
  },

  {
    data: "29-05-2021",
    activity:
      "National level Webinar on “Motivational Talk for Online Studies in Covid-19 Era”",
    remark:
      "Mr. Kajal Sarmah Assistant Professor & Academic Head college of Aeronautical Engineering, Guwahati motivated students regarding their studies in this pandemic of covid-19 and explained the benefits of online studies.",
  },

  {
    data: "05-06-21",
    activity: "Quiz Competition for Mechanical Engineers",
    remark:
      "Department of Mechanical Engineering Organized a quiz competition for III sem Students, which was helpful in their studies.",
  },

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
    data: "30-10-21",
    activity: "Quiz Competition",
    remark:
      "Department of Mechanical engineering conducted a quiz competition for all semester students which will enhance the knowledge to face competitive exams.",
  },

  {
    data: "30-10-21",
    activity: "Industrial Visit",
    remark:
      "Department of Mechanical Engineering organized an industrial visit for Final engineering students at Hi-Tech Otto, Alwar where they learned about the all mechanical process and practical work in real time industries.",
  },
];

const MechanicalDepartment = () => {
  const [images, setImages] = React.useState([]);
  const [labImages, setLabImages] = React.useState([]);
  React.useEffect(() => {
    getImages(Collections.departments.machanical).then((imageList) => {
      setImages(imageList);
    });
    getImagesLab(Collections.departments.machanical).then((imageList) => {
      setLabImages(imageList);
    });
  }, []);
  return (
    <>
      <>
        <FillImage
          src={
            "https://www.mitrc.ac.in/wp-content/uploads/2020/08/front-1024x502.jpg"
          }
        />
        <Heading>{"About the Mechanical Engineering:"}</Heading>
        <Paragraph>{`One of the oldest and broadest fields of engineering, Mechanical engineering deals with the design, construction, and use of machines. The programme endows students with the basic understanding and knowledge of how heavy tools and machinery work. A student pursuing a mechanical engineering programme will acquire knowledge about designing of automobiles, electric motors, aircraft and other heavy vehicles. Mechanical engineers design everything from new batteries, athletic equipment to medical devices and from personal computers, air conditioners, automobile engines to electric power plants. These engineers also design machines that produce these innovations. The scope of mechanical engineering in India and abroad is huge for every aspect of our lives are touched by mechanical engineering in one way of the other. Spanning multiple industries, the career opportunities for students pursuing the programme is huge.`}</Paragraph>

        <Heading>{"About The Department:"}</Heading>
        <Paragraph>{`The Mechanical Department of the MITRC College, Alwar was founded in 2007 with the mission of providing quality education in the field of Mechanical Engineering. The Mechanical Engineering is One of the most diverse and versatile engineering fields, mechanical engineering is the study of objects and systems in motion. As such, the field of mechanical engineering touches virtually every aspect of modern life, including the human body, a highly complex machine. A mechanical engineer requires a fine balance of theoretical knowledge and practical experience. The Mechanical Engineering Department of MITRC boasts of well qualified faculty and well-equipped laboratories for the same. The students are also frequently taken to industrial visits to expose them to the industry and real-world situations. Seminars, talk shows and guest lectures from prominent practicing engineers, professors and scholars are also held time to time. Faculties are providing complete opportunity to learn from their experience and inculcate professional values in student’s lives.`}</Paragraph>

        <Section>
          <Heading>{"Mechanical Engineering Labs at MITRC:"}</Heading>
          <ul>
            <ListItem style={{ marginTop: "0.4rem", color: "#152D35" }}>
              Mechanical Workshop
            </ListItem>
            <ListItem style={{ marginTop: "0.4rem", color: "#152D35" }}>
              Thermal Engineering Lab
            </ListItem>
            <ListItem style={{ marginTop: "0.4rem", color: "#152D35" }}>
              Material Testing Lab
            </ListItem>
            <ListItem style={{ marginTop: "0.4rem", color: "#152D35" }}>
              Basic Mechanical Engineering Lab
            </ListItem>
            <ListItem style={{ marginTop: "0.4rem", color: "#152D35" }}>Turbo Lab</ListItem>
            <ListItem style={{ marginTop: "0.4rem", color: "#152D35" }}>
              Auto Cad Lab
            </ListItem>
            <ListItem style={{ marginTop: "0.4rem", color: "#152D35" }}>
              Machine Drawing Lab
            </ListItem>
            <ListItem style={{ marginTop: "0.4rem", color: "#152D35" }}>
              Production Engineering Lab
            </ListItem>
            <ListItem style={{ marginTop: "0.4rem", color: "#152D35" }}>
              Heat Transfer Lab
            </ListItem>
            <ListItem style={{ marginTop: "0.4rem", color: "#152D35" }}>
              Vibration Lab
            </ListItem>{" "}
            <ListItem style={{ marginTop: "0.4rem", color: "#152D35" }}>
              Automobile Engineering Lab
            </ListItem>{" "}
            <ListItem style={{ marginTop: "0.4rem", color: "#152D35" }}>
              Fluid Machinery Lab
            </ListItem>{" "}
            <ListItem style={{ marginTop: "0.4rem", color: "#152D35" }}>
              Dynamics of Machines Lab
            </ListItem>
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
          <Heading>{"Career in Mechanical Engineering:"}</Heading>
          <Paragraph>{`Society depends on mechanical engineering. The need for this expertise is great in so many fields, and as such, there is no real limit for the freshly minted mechanical engineer. Jobs are always in demand, particularly in the automotive, aerospace, electronics, biotechnology, and energy industries.`}</Paragraph>
          <Paragraph>{`Here are a handful of mechanical engineering fields.`}</Paragraph>
          <Paragraph>{`In statics, research focuses on how forces are transmitted to and throughout a structure. Once a system is in motion, mechanical engineers look at dynamics, or what velocities, accelerations and resulting forces come into play. Kinematics then examines how a mechanism behaves as it moves through its range of motion.`}</Paragraph>
          <Paragraph>{`Materials science delves into determining the best materials for different applications. A part of that is materials strength—testing support loads, stiffness, brittleness and other properties—which is essential for many constructions, automobile, and medical materials.`}</Paragraph>
          <Paragraph>{`How energy gets converted into useful power is the heart of thermodynamics, as well as determining what energy is lost in the process. One specific kind of energy, heat transfer, is crucial in many applications and requires gathering and analyzing temperature data and distributions.`}</Paragraph>
          <Paragraph>{`Fluid mechanics, which also has a variety of applications, looks at many properties including pressure drops from fluid flow and aerodynamic drag forces.
                        Manufacturing is an important step in mechanical engineering. Within the field, researchers investigate the best processes to make manufacturing more efficient. Laboratory methods focus on improving how to measure both thermal and mechanical engineering products and processes. Likewise, machine design develops equipment-scale processes while electrical engineering focuses on circuitry. All this equipment produces vibrations, another field of mechanical engineering, in which researchers’ study how to predict and control vibrations.`}</Paragraph>
          <Paragraph>{`Engineering economics makes mechanical designs relevant and usable in the real world by estimating manufacturing and life cycle costs of materials, designs, and other engineered products.`}</Paragraph>
        </Section>

        <Section>
          <Heading>
            {"List of PSUs & State Govt. Jobs in Mechanical Engineering:"}
          </Heading>
          <SubHeading>{"PSU:- "}</SubHeading>
          <Table>
            {PsuData.map((item) => (
              <TableRow>
                <TableData>{item.first}</TableData>
                <TableData>{item.second}</TableData>
              </TableRow>
            ))}
          </Table>

          <SubHeading>{"State Govt. Jobs: "}</SubHeading>
          <Paragraph>{`RPSC- Lecturer, RPSC- Asst. Professor, Raj. Income Tax, Jaipur Metro Ltd., RVUNL, DMRC, RPSC- Engg. Service, RPSC-RAS & many more.`}</Paragraph>

          <SubHeading>{"Private Companies:"}</SubHeading>
          <Paragraph>{`TATA, Mahindra & Mahindra, Maruti Suzuki, Honda, Hero, Nissan, Toyota, Hyundai, Kia, Renault, Hindustan Motors, Bosch, Reliance & many more.`}</Paragraph>

          <SubHeading>{"Other Opportunities:"}</SubHeading>
          <Paragraph>{`CSIR, All India Radio, Armed Forces (NDA, UPSC-CDS, Indian Navy, Indian Army, Indian Coast Guard), Merchant Navy, Aerospace Industries, Indian Railways (Loco Pilot, Section Engineer, Jr. Engineer, Traffic Apprentice, Commercial Apprentice, Goods Guard, Station Master & many more.`}</Paragraph>
        </Section>

        <Section>
          <Heading>{"Job Profile:"}</Heading>
          <ul>
            <ListItem
              style={{
                marginTop: "0.4rem",
                color: "#152D35",
                fontSize: "1.2rem",
              }}
            >
              Object Oriented Analysis & Design.
            </ListItem>
            <ListItem
              style={{
                marginTop: "0.4rem",
                color: "#152D35",
                fontSize: "1.2rem",
              }}
            >
              Test theoretical design.
            </ListItem>
            <ListItem
              style={{
                marginTop: "0.4rem",
                color: "#152D35",
                fontSize: "1.2rem",
              }}
            >
              Discuss proposals with clients.
            </ListItem>
            <ListItem
              style={{
                marginTop: "0.4rem",
                color: "#152D35",
                fontSize: "1.2rem",
              }}
            >
              Carry out project planning & prepare budget.
            </ListItem>
            <ListItem
              style={{
                marginTop: "0.4rem",
                color: "#152D35",
                fontSize: "1.2rem",
              }}
            >
              Mechanical engineer work in public & private sector in all
              branches of design, development and maintenance of machineries
              etc.
            </ListItem>
          </ul>
        </Section>

        <Heading>{"Start-Up Schemes for Engineers:"}</Heading>
        <Paragraph>
          {
            "A comprehensive list of start-up schemes introduced by Govt. of India in Last few years. The Indian govt. has introduced over 50+ start-up for engineers, each startup scheme is boosting towards New Era & Dream. There are closed to 4400 technology start-ups exist in India & the No. is expected to reach over 10,000 by 2020. India is also at 3rd place behind US & Britain in terms of start-up."
          }
        </Paragraph>

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
            {images.map((item) => (
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
      </>
    </>
  );
};

export default MechanicalDepartment;

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
