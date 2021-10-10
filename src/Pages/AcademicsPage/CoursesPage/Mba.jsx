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

const MbaPage = () => {
  return (
    <>
      <div>
        {/* section1 */}

        <Paragraph>
          The 2 year MBA programme by Department of Management of Modern
          Institute of Technology & Research Centre is approved by AICTE and
          affiliated to Rajasthan Technical University, Kota and Bikaner
          Technical University, Bikaner.
        </Paragraph>
        <Heading>Admission Criteria</Heading>
        <Paragraph>
          85% through CMAT & 15% through management quota. Graduation degree
          with 50% marks (45% marks for SC/ST/OBC)
        </Paragraph>
        <SubHeading>Seats</SubHeading>
        <Paragraph>60</Paragraph>
        <SubHeading>Specializations</SubHeading>
        <Paragraph>
          Human Resources
          <br />
          Finance
          <br />
          Marketing
        </Paragraph>
      </div>
    </>
  );
};

export default MbaPage;
