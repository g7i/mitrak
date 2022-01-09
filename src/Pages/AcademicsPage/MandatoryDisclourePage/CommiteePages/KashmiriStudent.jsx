import React from "react";
import {
  Heading,
  Paragraph,
} from "../../../../components/styledComponents/GlobalComponents";
import { ComplaintButton, Heading2 } from "./styles";
import styled from "styled-components";

const studentData = [
  {
    name: "Zahoor khan",
    father: "mohd iliyaz khan",
    course: "b.tech",
    address: "poonch,j&k",
  },
  {
    name: "Maqsood Ahmad tali",
    father: "mohd akbar tali",
    course: "b.tech",
    address: "baramulla,j&k",
  },
  {
    name: "Mohit sharma",
    father: "Surti lal sharma",
    course: "b.tech",
    address: "Kathua jammu",
  },
  {
    name: "Rakesh sharma",
    father: "baburam sharma",
    course: "b.tech",
    address: "Kathua jammu",
  },
  {
    name: "Manoj kumar",
    father: "Sunil kumar",
    course: "b.tech",
    address: "Kathua jammu",
  },
  {
    name: "Anmol Shrama",
    father: "Kuldeep raj",
    course: "b.tech",
    address: "Bishnah jammu",
  },
  {
    name: "Sahid Aziz",
    father: "mohd. Aziz",
    course: "b.tech",
    address: "Poonch,j&k",
  },
  {
    name: "Shahor khan",
    father: "mohd. iliyaz khan",
    course: "b.tech",
    address: "Poonch,j&k",
  },
];

const KashmiriStudentPage = () => {
  return (
    <div>
      <Heading>KASHMIR STUDENT’S GRIEVANCE REDRESSAL CELL</Heading>
      <Paragraph>
        o uplift the youth of Kashmir, Indian Government started the PMSS
        Student Welfare Scheme for Kashmir Students. Through this scheme, many
        Kashmir students are taking Technical Education from outside of Jammu &
        Kashmir. Kashmir Students are also pursuing B.Tech from MITRC. So as per
        guidelines of AICTE & University, Our Institute has constituted Kashmir
        Student’s Grievance Redressal Cell which shall take of all grievances
        and issues of Kashmir Students regarding academic, PMSS Scholarship,
        Accommodation, Safety & other issues.
      </Paragraph>

      <Table>
        <tr>
          <th>NAME OF STUDENT</th>
          <th>FATHER'S NAME</th>
          <th>COURCES</th>
          <th>ADDRESS</th>
        </tr>
        {studentData.map((item) => (
          <tr>
            <td>{item.name}</td>
            <td>{item.father}</td>
            <td>{item.course}</td>
            <td>{item.address}</td>
          </tr>
        ))}
      </Table>
      <div style={{marginTop : "40px"}}></div>
      <ComplaintButton
        onClick={() => {
          window.location.href = "https://forms.gle/sPdHZnHpiUh9VRi67";
        }}
      >
        CLICK FOR ONLINE GRIEVANCE FORM FOR KASHMIR STUDENTS
      </ComplaintButton>
    </div>
  );
};

export default KashmiriStudentPage;

const Table = styled.table`
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
  td {
    border: 1px solid #ddd;
    padding: 8px;
  }
  th {
    border: 1px solid #ddd;
    padding: 8px;
  }
  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
  tr:hover {
    background-color: #ddd;
  }

  th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #04aa6d;
    color: white;
  }
`;



