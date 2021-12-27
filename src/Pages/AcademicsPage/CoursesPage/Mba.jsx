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
const MbaImg =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpVY4-a9s00pYmU8D9Hfw-s0wxQle-XeJ15A&usqp=CAU";

const MbaPage = () => {
  return (
    <>
      <div>
        {/* section1 */}
        <HalfImage
          src={MbaImg}
          alt="Content Image"
          style={{ marginTop: "2rem", maxHeight: "600px" }}
        />

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
