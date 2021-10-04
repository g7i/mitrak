import React from "react";
import { data } from "./../staticData/departments";
import {
  FillImage,
  FlexContainer,
  HalfImage,
  Heading,
  HyperLink,
  Paragraph,
  SubHeading,
} from "../../../components/styledComponents/GlobalComponents";
import { Wrapper } from "../../../components/styledComponents/Navbar";
import { OR_Span, Table, TableData, TableHeading, TableRow } from "./styles";

const MtechPage = () => {
  return (
    <>
      <HalfImage
        src={"https://www.mitrc.ac.in/wp-content/uploads/2020/08/gajal3.jpg"}
        alt="Content Image"
        style={{ marginTop: "2rem", maxHeight: "600px" }}
      />
      <div>
        {/* section1 */}
        <Heading>ELIGIBILITY FOR B.TECH (UG PROGRAMME)</Heading>
        <Paragraph>
          Candidates should have passed B.E./B.Tech from RTU or any other
          recognized University. Also, candidates who have obtained
          qualifications through examinations conducted by professional
          societies recognized by MHRD/ UGC/ AIU/ UPSC/ AICTE.
          <br />
          <br />
          Candidates should have obtained at least 55% marks (6.25 CGPA on 10
          point scale and equivalent) in qualifying exam.
          <br />
          <br />
          *There is a relaxation of 5% for SC/ST category with a minimum of 50%
          marks
          <br />
          <br />
          Admission in various Specialization for M.Tech Course(PG Programmes)
          for Session 2021-22 will be based on valid & eligible GATE Score along
          with Qualifying Degree or only having Qualifying Degree . Preference
          will be given to those who have valid & eligible GATE Score Card of
          Year 2021/2020.
          <br />
          <br />
          Admission will be done through Centralized Counseling Process CAM
          -2021.
        </Paragraph>

        <HalfImage
          src={"https://www.mitrc.ac.in/wp-content/uploads/2021/09/1.png"}
          alt="content-img"
        />

        <SubHeading margin={"4vh 0 0 0 "}>Note:</SubHeading>
        <Paragraph>
          The equivalency of any degree for admission to any programme will be
          decided by University. If a recognized university has an approved
          conversion formula of CGPA into percentage then it will be applicable
          on producing the certificate of conversion from the concerned
          University. Otherwise AICTE approved conversion formula will be used
          i.e. Equivalent percentage = (C.G.P.A -0.75) X 10.
        </Paragraph>

        <SubHeading margin={"4vh 0 0 0 "}>Age limit</SubHeading>
        <Paragraph>No Age limit is Applicable.</Paragraph>

        <SubHeading>SEAT INTAKE FOR SESSION 2021</SubHeading>
        <HalfImage
          src={"https://www.mitrc.ac.in/wp-content/uploads/2021/09/2.png"}
          alt="content-img"
        />

        <Heading margin={"4vh 0 0 0 "}>FEES STRUCTURE </Heading>

        <SubHeading>FOR M.TECH- PG PROGRAMME</SubHeading>

        <Paragraph>
          <strong>Tution Fee: </strong> Rs. 24500 PER SEMESTER
          <br />
          <strong>DEVELOPEMENT FEES: </strong> Rs. 21000/ PER YEAR
          <br />
          <strong>UNIVERSITY DEVELOPEMENT FEES: </strong> Rs. 2000 ( ONE TIME
          -ONLY IN FIRST YEAR)
          <br />
          <strong>CAUTION MONEY:</strong> Rs. 7500 ( ONE TIME – REFUNDABLE)
        </Paragraph>
      </div>
    </>
  );
};

export default MtechPage;
