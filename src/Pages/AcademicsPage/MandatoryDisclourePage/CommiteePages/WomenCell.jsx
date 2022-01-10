import React from "react";
import {
  Heading,
  Paragraph,
} from "../../../../components/styledComponents/GlobalComponents";
import { ComplaintButton, Heading2, PdfLinks } from "./styles";
import styled from "styled-components";

const scholarship = [
  {
    name: "AICTE Pragati Scholarship for Girls",
    provider: "All India Council for Technical Education (AICTE)",
    eligibility: "Girl students studying in first year of Technical courses",
    award: "Up to Rs 30,000 and other benefits",
    applicationTimeline: "Between September and October (Tentative)",
  },
  {
    name: "Post-Graduate Indira Gandhi Scholarship for Single Girl Child",
    provider: "University Grants Commission",
    eligibility: "Single girl child of up to 30 years of age",
    award: "Rs 36,200 per annum for two years",
    applicationTimeline: "Between December and January (Tentative)",
  },
  {
    name: "Women Scientist Scheme-B (WOS-B)",
    provider: "Department of Science & Technology (DST), Government of India",
    eligibility:
      "Women scientists/technologists between 27 and 57 years of age",
    award: "Up to Rs 55,000 per month",
    applicationTimeline: "Between February and March (Tentative)",
  },
  {
    name: "Oréal India For Young Women in Science Scholarship",
    provider: "L’Oréal India",
    eligibility:
      "Class 12 passed Girls (Science) with at least 85 percent marks",
    award: "Up to Rs 2,50,000 for Graduation",
    applicationTimeline: "Between June and July (Tentative)",
  },
  {
    name: "Fair and Lovely Scholarship",
    provider: "Fair and Lovely Career Foundation",
    eligibility: "Female students pursuing UG orPG studies",
    award: "Rs 25,000 to Rs 50,000 (fixed, One-Time Award)",
    applicationTimeline: "Between October and December (Tentative)",
  },
  {
    name: "Rolls-Royce Unnati Scholarships for Women Engineering Students",
    provider: "Rolls-Royce India Private Limited",
    eligibility: " Girl students studying in 1st/2nd/3rd year of Engineering",
    award: "Rs 35,000",
    applicationTimeline: "Between January and April (Tentative)",
  },
  {
    name: "LILAVATI AWARD",
    provider: "AICTE",
    eligibility:
      "Female students pursuing UG or PG studies for Entrprenuership.",
    award: "Rs 25,000 to Rs 50,000 (fixed, One-Time Award)",
    applicationTimeline: "Between October and December (Tentative)",
  },
];

const WomenCellPage = () => {
  return (
    <div>
      <Heading>Women Cell</Heading>
      <Paragraph>
        Women Empowerment and Gender Equality are the most important
        requirements for the upliftment and progress of our nation. In the
        effort to make MITRC a strong kernel of gender sensitization, Institute
        has constituted Women Cell.
      </Paragraph>

      <Paragraph>
        To present a solution to the prevalent issues of gender discrimination,
        such as illiteracy, unemployment, economic and nutritional disparities,
        maternal mortality, human rights, etc. Also, if anyone has already made
        a successful effort towards making a mark in the society, in
        establishing women’s emancipation/ empowerment at large, she/ he can
        showcase their efforts/ contributions.
      </Paragraph>

      <Paragraph>
        The Cell has both the faculty and students of the Institute as its
        members and works with an aim to create a gender sensitized community
        within campus as well as in the society. It has been organizing varied
        academic, technical, medical, cultural and social events for the
        upliftment of women and spread the real importance of gender equality in
        the society through College students.
      </Paragraph>

      <Heading>SCHOLARSHIPS FOR GIRLS</Heading>
      <Paragraph>
        Scholarships for girls in India are meant to encourage better education
        and career opportunities for females who are yet to match their male
        counterparts on different socio-economic parameters. Still, if given an
        opportunity, woman doesn’t lag behind men either in the professional
        arena or academics. Here comes the role of women-specific scholarships
        that encourages them to counter their financial constraints and pursue
        academic and career opportunities.
      </Paragraph>

      <Paragraph>
        Several government departments and private organisations offer a number
        of scholarship opportunities to uplift the condition of female education
        within the country.
      </Paragraph>

      {scholarship.map((item) => (
        <div style={{ marginTop: "50px" }}>
          <Paragraph style={{ fontWeight: 800, color: "#2C7EC6" }}>
            {item.name}
          </Paragraph>
          <ScholSecndContainer>
            <HeadingSchol>Provider Details:</HeadingSchol>
            {item.provider}
          </ScholSecndContainer>
          <ScholSecndContainer>
            <HeadingSchol>Eligibility:</HeadingSchol>
            {item.eligibility}
          </ScholSecndContainer>
          <ScholSecndContainer>
            <HeadingSchol>Award:</HeadingSchol>
            {item.award}
          </ScholSecndContainer>
          <ScholSecndContainer>
            <HeadingSchol>Application Timeline:</HeadingSchol>
            {item.applicationTimeline}
          </ScholSecndContainer>
        </div>
      ))}

      <PdfLinks
        target="_blank"
        href="https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2Fmandatory-disclosure%2FFOR%20MORE%20INFORMATION%20-WOMEN%20CELL.pdf?alt=media&token=db766934-76f7-426c-9549-c38049400093"
      >
        FOR MORE INFORMATION REGARDING WOMEN CELL CLICK ON IT
      </PdfLinks>

      {/* <ComplaintButton
        onClick={() => {
          window.location.href = "https://forms.gle/NX25Em56kCs7GxKS9";
        }}
      >
        Click here to complaint
      </ComplaintButton> */}
    </div>
  );
};

export default WomenCellPage;

const ScholSecndContainer = styled.div`
  display : flex;
  gap : 20px ;
  font-size : 1.2rem ; 
  color : rgb(0,0,0,0.8) ;
`

const HeadingSchol = styled.h3`
  font-size : 1.2rem ; 
  font-weight : bold ; 
  color : black ;
`

