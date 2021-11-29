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
import ImageSlider from "../components/imageSlider";

const Activities = [
  {
    data: "13-03-2021",
    activity: "Webinar on How to start up Green Construction Technology",
    remark:
      "Mr. D.P.Singh renowned person in the field of construction addressed to the student regarding how to plan and initiated the start up related to the civil engineering.",
  },

  {
    data: "15-03-2021",
    activity: "Webinar on Smart Cities: A challenge For Civil Engineer",
    remark:
      "Mr.Dinesh Goyal well experience personality for the development smart city project who is presently working on Dharamshala Project guided and delivered the major points regarding Smart city Project",
  },

  {
    data: "31-05-21",
    activity: "Renewable Energy India Perspective",
    remark:
      "Praveen Mittar Nanda, senior vice president in Greenko group delivered a webinar & share his experience about the renewable Energy",
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
    data: "26-10-21",
    activity: "Quiz Competition",
    remark:
      "Department of civil engineering conducted a quiz competition for all semester students which will enhanced the knowledge & facing of competitive exams.",
  },
];

const CivilDepartment = () => {
  const [images, setImages] = React.useState([]);
  const [labImages, setLabImages] = React.useState([]);
  React.useEffect(() => {
    getImages(Collections.departments.civil).then((imageList) => {
      setImages(imageList);
    });
    getImagesLab(Collections.departments.civil).then((imageList) => {
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
        <Heading>{"About the Civil Engineering:"}</Heading>
        <Paragraph>{`“Civil    Engineering   is   a    professional engineering discipline that deals with the design, construction and maintenance of the   physically     and     naturally     built environment.”Civil Engineering has   been   since    the dawn of humanity. Since, the civilizations   of   Ancient   Egypt, Indus Valley and Mesopotamia (ancient Iraq), civil engineering has been the driver of the socio-economic development of the human race. One of the earliest examples of scientific approach to civil engineering dates back to 7 AD. Civil engineering is a broad field of engineering covering many specialties. It includes construction engineering, environmental engineering, fire protection engineering, geotechnical engineering, hydraulic engineering, structural engineering, and transportation engineering. The term "civil engineering" was first used in the eighteenth century, to distinguish it from military engineering. Most civil engineering projects today deal with the planning, construction, and maintenance of power plants, bridges, roads, railways, structures, water supply systems, irrigation, pollution control systems, sewer systems`}</Paragraph>

        <Heading>{"About The Department:"}</Heading>
        <Paragraph>{`The Civil Department of the MITRC College, Alwar was founded in 2011 with the mission of providing quality education in the field of Civil Engineering. The Civil Engineering is an evergreen and a booming sector and one of the major driving industries of the Indian economy. A civil engineer requires a fine balance of theoretical knowledge and practical experience. The Civil Department of MITRC boasts of well qualified faculty and well-equipped laboratories for the same. The students are also frequently taken to industrial trips to expose them to the industry and real world situations. Seminars, talk shows and guest lectures from prominent practicing engineers, professors and scholars are also held. The students are given complete opportunity to learn from their experience and inculcate professional values in their lives.`}</Paragraph>

        <Section>
          <Heading>{"Civil Engineering Labs at MITRC:"}</Heading>
          <ul>
            <li style={{ marginTop: "0.4rem", color: "#152D35" }}>
              Hydraulic Engineering Lab
            </li>
            <li style={{ marginTop: "0.4rem", color: "#152D35" }}>
              Geo Technical Engineering Lab
            </li>
            <li style={{ marginTop: "0.4rem", color: "#152D35" }}>
              Structural Lab
            </li>
            <li style={{ marginTop: "0.4rem", color: "#152D35" }}>
              Geology Lab
            </li>
            <li style={{ marginTop: "0.4rem", color: "#152D35" }}>Turbo Lab</li>
            <li style={{ marginTop: "0.4rem", color: "#152D35" }}>
              Surveying Lab
            </li>
            <li style={{ marginTop: "0.4rem", color: "#152D35" }}>
              Auto Cad Lab
            </li>
            <li style={{ marginTop: "0.4rem", color: "#152D35" }}>
              Building Drawing Lab
            </li>
            <li style={{ marginTop: "0.4rem", color: "#152D35" }}>
              Concrete Technology Lab
            </li>
            <li style={{ marginTop: "0.4rem", color: "#152D35" }}>
              RMT Lab Environmental Lab
            </li>{" "}
            <li style={{ marginTop: "0.4rem", color: "#152D35" }}>
              Water Resource Engineering Lab
            </li>{" "}
            <li style={{ marginTop: "0.4rem", color: "#152D35" }}>
              Estimating & Costing Lab
            </li>{" "}
            <li style={{ marginTop: "0.4rem", color: "#152D35" }}>
              Civil Engineering & Material Lab
            </li>
          </ul>

          <FlexContainer wrap={"wrap"} rowGap={40} justify={"center"} gap={30}>
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
          <Heading>{"Career in Civil Engineering:"}</Heading>
          <Paragraph>{`Civil Engineering is the oldest branch of engineering &incorporate the design & construction of roads, airport, tunnel, bridges, water supply & sewage system, dams, harbors,  Railroad system, Nuclear & Thermal Power plants. Civil engineer works us construction engineer, Environmental Engineer, Public Work Engineer.`}</Paragraph>
        </Section>

        <Section>
          <Heading>
            {"List of Psu & State Govt. Jobs in Civil Engineering:"}
          </Heading>
          <SubHeading>{"PSU:- "}</SubHeading>
          <Paragraph>{`ECIL, BARC, DRDO, PFC,BEL, SSC-CPWD, SSC-CWC, SSC-MES, MTNL, BSNL, NFL, BHEL, Irrigation Department, UIT, Housing Board, NTPC, ONGC, IOCL, GAIL, NHPC, AAI, SAIL, CIL, NLC, NMDC, EIL, NPCIL, BNPM, BBNL, SCI, OIL, HAL, HPCL, BIS, UPSC-IFS, UPSC-IPS, IBPS- Clerk & PO & many more.`}</Paragraph>

          <SubHeading>{"State Govt. Jobs: "}</SubHeading>
          <Paragraph>{`RPSC- Lecturer, RPSC- Asst. Professor, Raj. Income Tax, PSPCL, KRIBHCO, BSPHCL, MH Knowledge Corp. Ltd. Jaipur Metro Ltd., Rajasthan High Court, RVNL, DMRC, MPPSC- Engg. Service, MHES, Lucknow Metro, MP- Elec. Board, RPSC-RAS & many more.`}</Paragraph>

          <SubHeading>{"Private Companies:"}</SubHeading>
          <Paragraph>{`DLF, JP, Ansal, Ashina Housing, Unitech, Unique Builder, Reliance, R-Tech &  many more.`}</Paragraph>

          <SubHeading>{"Other Opportunities:"}</SubHeading>
          <Paragraph>{`CSIR, All India Radio, Doordarshan, KVS,Armed Forces (NDA, UPSC-CDS, Indian Navy, Indian Army, Indian Coast  Guard), Aerospace Industries, Indian Railways (Loco Pilot, Section Engineer, Jr. Engineer, Traffic Apprentice, Commercial Apprentice, Goods Guard, Station Master & many more.`}</Paragraph>
        </Section>

        <Section>
          <Heading>{"Job Profile:"}</Heading>
          <ul>
            <li
              style={{
                marginTop: "0.4rem",
                color: "#152D35",
                fontSize: "1.2rem",
              }}
            >
              Object Oriented Analysis & Design.
            </li>
            <li
              style={{
                marginTop: "0.4rem",
                color: "#152D35",
                fontSize: "1.2rem",
              }}
            >
              Test theoretical design.
            </li>
            <li
              style={{
                marginTop: "0.4rem",
                color: "#152D35",
                fontSize: "1.2rem",
              }}
            >
              Discuss proposals with clients.
            </li>
            <li
              style={{
                marginTop: "0.4rem",
                color: "#152D35",
                fontSize: "1.2rem",
              }}
            >
              Carry out project planning & prepare budget.
            </li>
            <li
              style={{
                marginTop: "0.4rem",
                color: "#152D35",
                fontSize: "1.2rem",
              }}
            >
              Civil engineer work in public & private sector in all branches of
              design construction, maintenance of road, highway, bridges, dams,
              canals etc.
            </li>
          </ul>
        </Section>

        <Heading>{"Start-Up Schemes for Engineers:"}</Heading>
        <Paragraph>
          {
            "A comprehensive list of start-up schemes introduced by Govt. of India in Last few years. The Indian govt. has introduced over 50+ start-up for engineers, each startup scheme is boosting towards New Era & Dream. There are closed to 4400 technology start-up exist in India & the No. is expected to reach over 10,000  by 2020. India is also at 3rd place behind US & Britain in terms of start-up."
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
          <Heading>{"List of Notable Startup In Civil Engineering:"}</Heading>
          <ul>
            <li
              style={{
                marginTop: "0.4rem",
                color: "#152D35",
                fontSize: "1.2rem",
              }}
            >
              Spartek Group
            </li>
            <li
              style={{
                marginTop: "0.4rem",
                color: "#152D35",
                fontSize: "1.2rem",
              }}
            >
              BGR Energy System
            </li>
            <li
              style={{
                marginTop: "0.4rem",
                color: "#152D35",
                fontSize: "1.2rem",
              }}
            >
              Urban Tech System
            </li>
            <li
              style={{
                marginTop: "0.4rem",
                color: "#152D35",
                fontSize: "1.2rem",
              }}
            >
              Cityrene
            </li>
            <li
              style={{
                marginTop: "0.4rem",
                color: "#152D35",
                fontSize: "1.2rem",
              }}
            >
              Altra Design
            </li>
          </ul>
        </Section>

        <Section>
          <ImageSlider imageArray={images} />
        </Section>
      </>
    </>
  );
};

export default CivilDepartment;

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
