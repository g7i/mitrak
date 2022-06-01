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
const BTechImg =
  "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/ACADEMICS%2FB.TECH%2FB.TECH.jpg?alt=media&amp;token=792bfa12-15c5-476c-a0df-2fcc301d8634";

const BtechPage = () => {
  return (
    <>
      <HalfImage
        src={BTechImg}
        alt="Content Image"
        style={{ marginTop: "2rem", maxHeight: "600px" }}
      />
      <div>
        {/* section1 */}
        <Heading>ELIGIBILITY FOR B.TECH (UG PROGRAMME)</Heading>
        <Paragraph>
          The minimum academic qualification for admission in B.E. /B.Tech.
          program in Rajasthan is,
        </Paragraph>
        <Paragraph>
          Passed class 10+2 (12th ) examinations with Physics and/or Mathematics
          / Chemistry/ Computer Science/ Electronics/ Information Technology/
          Biology/ Informatics Practices/ Biotechnology/ Technical Vocational
          subject/ Agriculture/ Engineering Graphics/ Business Studies/
          Entrepreneurship.(Any of the three) Obtained at least 45% marks (40%
          marks in case of candidates belonging to reserved category SC/ ST/ Non
          creamy layer OBC/ Non creamy layer MBC and PwD
          category of Rajasthan State) in the above subjects taken together in
          the final examination of Board of Secondary Education, Rajasthan(RBSE)
          or Central Board of Secondary Education (CBSE) or any other
          examination recognized and equivalent thereto by Board of Secondary
          Education, Rajasthan/Central Board of Secondary Education (CBSE).
        </Paragraph>
        <Paragraph>
          Passed min. 3 years Diploma examination with at least 45% marks (40%
          marks in case of candidates belonging to reserved category SC/ ST/ Non
          creamy layer OBC/ Non creamy layer MBC and PwD category of Rajasthan
          State) subjected to vacancies in the First Year, in case the vacancies
          at lateral entry are exhausted.
        </Paragraph>

        <SubHeading margin={"4vh 0 0 0 "}>Note:</SubHeading>
        <Paragraph>
          (1) List of Technical Vocational Subject is in accordance to the RBSE
          and CBSE Board.
          <br /> (2) The Universities will offer suitable bridge courses such as
          Mathematics, Physics, Engineering drawing, etc., for the students
          coming from diverse backgrounds to achieve desired learning outcomes
          of the programme.
          <br />
          Subject combination required in the qualifying examination for
          admission to B.E. / B.Tech. course shall be as under:
          <br /> Candidates must obtained at least 45% marks (40% marks in case
          of candidates belonging to reserved category) in any of the below
          three subjects taken together.
        </Paragraph>

        <HyperLink
          href={"https://www.reap2021.com/documents/REAP_2021_booklet.pdf"}
          style={{ textDecoration: 'none', fontSize: '1.4rem', marginTop: '16px', display: 'block' }}
        >
          REAP 2021 Booklet
        </HyperLink>
        {/* section2 */}

        <Heading margin={"5vh 0 0 0 "}>
          Priorities of Admission for B.Tech. Courses
        </Heading>
        <Paragraph>
          Candidate is required to register through REAP-2021 web portal
          (www.reap2021.com). Candidate may register on the basis of marks
          obtained in class 10+2 (12th )
          <br />
          <FlexContainer justify={"center"} margin={"0px"}>
            <Heading margin={"10px auto"} color={"blue"} style={{ fontSize: '1rem' }}>
              OR
            </Heading>
          </FlexContainer>
          Marks obtained in Diploma in Engineering & Technology , as per
          eligibility criterion for admission. However, Percentile of marks
          obtained in class 12th would be given higher priority in comparison to
          percentage obtained in Diploma in Engineering & Technology in
          preparing the combined merit list during all the stages of counseling
          in REAP-2021 as
        </Paragraph>
        {/* table */}
        <Table>
          <TableRow>
            <TableHeading>S.No</TableHeading>
            <TableHeading>Basic of Admission</TableHeading>
            <TableHeading>Priority</TableHeading>
          </TableRow>
          <TableRow>
            <TableData>1</TableData>
            <TableData>Rank Obtained in JEE MAINS 2021</TableData>
            <TableData>1st</TableData>
          </TableRow>
          <TableRow>
            <TableData>2</TableData>
            <TableData>
              Persentile obtained in class 12th & having Physics & Methametics
              subjects
            </TableData>
            <TableData>2nd</TableData>
          </TableRow>
          <TableRow>
            <TableData>3</TableData>
            <TableData>
              Persentile obtained in class 12th & having Physics Or Methametics
              subjects
            </TableData>
            <TableData>3rd</TableData>
          </TableRow>
          <TableRow>
            <TableData>4</TableData>
            <TableData>
              Percentage obtained in Diploma and Engineering and Technology
              approved by state govt.{" "}
            </TableData>
            <TableData>4th</TableData>
          </TableRow>
        </Table>
        {/* section3 */}
        <Heading>Admission in B.Tech. Courses under Management Quota</Heading>
        <Paragraph>
          Admission against 15% of total intake in management seats in private
          colleges will be completed by institutes latest by 26-10-2021 strictly
          as per eligibility mentioned above for B.E./B.Tech. and B.Arch.
          respectively and as per guidelines issued by Govt. of Rajasthan and
          Convenor REAP 2021 in this regard. Application fee will be charged Rs
          250/- (Rupees Two hundred fifty Only) per candidate by concerned
          college / university and collected fee have to be deposited to
          REAP-2021 office before the last date of admission notified in
          schedule of activities.
        </Paragraph>

        {/* section4 */}
        <Heading margin={"4vh 0 0 0 "}>
          Supernumerary Seat TFWS (Only for B.Tech. Courses) :-
        </Heading>
        <SubHeading>Requirements and Eligibility</SubHeading>
        <Paragraph>
          Sons/ Daughters of parents whose annual income from all sources does
          not exceed 8.00 Lakh.
        </Paragraph>
        <Paragraph>
          The Waiver is limited to the Tuition Fee as approved by the State
          Level Fee Committee for Self-Financing Institutions and by the
          Government for the Government/ Government aided Institutions. All
          other Fees except Tuition Fee shall have to be paid by the
          beneficiary.
        </Paragraph>
        <SubHeading>Admission Procedure</SubHeading>
        <Paragraph>
          Under this Scheme, up to a maximum of 5% of “Approved Intake” per
          Course shall be available for this admission. These seats shall be
          supernumerary in nature. These supernumerary seats shall be available
          only to such Course(s) in an Institution, where a minimum of 50% of
          “Approved Intake” are filled up in last Academic year.
          <br />
          Admission in this category is given by the State Government or its
          designated authority i.e. REAP-2021.
          <br />
          In the event of non-availability of students in this category, the
          same shall not be given to any other category of candidates.
          <br />A letter/list in this respect will be issued by the REAP-2021
          office for admission to each beneficiary student admitted under this
          scheme and he/ she shall not be allowed to change the Institution/
          Course under any circumstances.
        </Paragraph>
        {/* section 5 */}
        <Heading margin={"4vh 0 0 0 "}>LEEP Admission Process : </Heading>
        <Paragraph>
          LEEP Admission /Lateral Entry Admission has been conducting through
          online counseling process (other than PMSSS seats) for admission in
          2nd year B.Tech. course for academic session 2021-22 on the basis of
          polytechnic diploma and/or B.Sc. exam marks merit.
        </Paragraph>
        <SubHeading>ELIGIBILITY CRITERIA</SubHeading>

        <Paragraph>
          Passed Diploma examination (3 years) with at least 45% marks (40%
          marks in case of candidate belonging to reserved category- SC, ST, Non
          Creamy layer OBC, Non Creamy layer MBC and PwD) in any branch of
          Engineering and Technology from AICTE approved Institution/ UGC
          Approved Universities.
          <br />
          <FlexContainer justify={"center"} margin={"0px"}>
            <Heading margin={"10px auto"} color={"blue"} style={{ fontSize: '1rem' }}>
              OR
            </Heading>
          </FlexContainer>
          Passed B.Sc. degree from a UGC recognized institution/university with
          at least 45% marks (40% marks in case of candidate belonging to the
          reserved category – SC, ST, Non Creamy layer OBC, Non Creamy layer MBC
          and PwD) and passed 10+2 examination with Mathematics as a subject.
          <br />
          <FlexContainer justify={"center"} margin={"0px"}>
            <Heading margin={"10px auto"} color={"blue"} style={{ fontSize: '1rem' }}>
              OR
            </Heading>
          </FlexContainer>
          Passed D.Voc. Stream in the same or allied sector.
        </Paragraph>
        {/* <SubHeading>SEAT INTAKE FOR SESSION 2021</SubHeading>
        <HalfImage
          src={
            "https://www.mitrc.ac.in/wp-content/uploads/2021/09/Untitled.png"
          }
          alt="content-img"
        /> */}

        {/* section 6 */}
        <Heading margin={"4vh 0 0 0 "}>FEES STRUCTURE </Heading>

        <SubHeading>FOR B.TECH- UG PROGRAMME</SubHeading>

        <Paragraph>
          <strong>Tution Fee: </strong> Rs. 24500 PER SEMESTER
          <br />
          <strong>DEVELOPEMENT FEES: </strong> Rs. 21000/ PER YEAR
          <br />
          <strong>UNIVERSITY DEVELOPEMENT FEES: </strong> Rs. 2500 ( ONE TIME
          -ONLY IN FIRST YEAR)
          <br />
          <strong>CAUTION MONEY:</strong> Rs. 7500 ( ONE TIME – REFUNDABLE)
        </Paragraph>
      </div>
    </>
  );
};

export default BtechPage;
