import React from "react";
import Banner from "../../../components/Banner";
import {
  Container,
  FillButton,
  FormInput,
  Heading,
  Paragraph,
} from "../../../components/styledComponents/GlobalComponents";
import { FcDocument } from "react-icons/fc";
import styled from "styled-components";
const ComplaintForm = ({ title }) => {
  const pdfs = [
    {
      title: "Cigarette and tabacco product act protection committee",
      url: "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/grievance%2Fcigarette%20and%20tobacco%20act%20protection%20committe.pdf?alt=media&token=b8f0fc4b-660f-4364-8c16-8aac4e4df689",
    },
    {
      title: "implementation of anti ragging committee",
      url: "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/grievance%2Fimplementation%20of%20antiragging%20committe.pdf?alt=media&token=352dde60-a02f-44a1-8643-5ce254ab8c2f",
    },
    {
      title:
        "implementation of kashmiri student's Grievence/Redressal cell in campus",
      url: "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/grievance%2Fimplementation%20of%20kashmiri%20residential.pdf?alt=media&token=5e79b500-279e-4e1b-85e2-264062cea309",
    },
    {
      title: "implementation of student disciplinary committee",
      url: "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/grievance%2Fimplementation%20of%20student%20disiplanry%20counsil.pdf?alt=media&token=0ff9631e-4725-487e-bea2-f4aa45ef89aa",
    },

    {
      title: "institute induction program cell",
      url: "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/grievance%2Finstitue%20induction%20programme%20cell.pdf?alt=media&token=c1ff43cd-1ff3-4be1-be6c-4a6f05949508",
    },
    {
      title: "internal complaints committee",
      url: "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/grievance%2Finternal%20compliant%20cometee.pdf?alt=media&token=b827a694-1055-414d-8651-96e68857ad6f",
    },
    {
      title: "internal quality assurance cell",
      url: "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/grievance%2Finternal%20quality%20assurance.pdf?alt=media&token=13093bea-81f1-4808-9619-b4e0e69a837a",
    },
    {
      title: "student council committee",
      url: "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/grievance%2Fstudent%20counsling%20committe.pdf?alt=media&token=98f6d4d8-1d80-4824-a086-ba654ce3997c",
    },
    {
      title: "women cell",
      url: "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/grievance%2Fwomen's%20cell.pdf?alt=media&token=24fb17f9-d1da-467c-a2dd-10bf80bc886e",
    },
  ];

  return (
    <>
      <Heading>{title + " MITRC | ALWAR"}</Heading>
      {pdfs.map((pdf, index) => {
        return (
          <PdfLink key={index}>
            <FcDocument style={{minWidth : "40px" , height : "40px"}}/>
            <a href={pdf.url}>{pdf.title}</a>
          </PdfLink>
        );
      })}
    </>
  );
};

export default ComplaintForm;

const PdfLink = styled.div`
  display: flex;
  margin : 10px 0;
  gap : 20px;
  a{
      font-size : 1.5rem ; 
  }
`;
