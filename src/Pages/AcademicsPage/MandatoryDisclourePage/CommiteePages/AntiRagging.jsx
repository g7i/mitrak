import React from "react";
import {
  Heading,
  Paragraph,
} from "../../../../components/styledComponents/GlobalComponents";
import { ComplaintButton, Heading2, PdfLinks } from "./styles";
const AntiRaggingPage = () => {
  return (
    <div>
      <Heading>Anti Ragging Committee</Heading>
      <Paragraph>
        Ragging at MITRC Campus is strictly prohibited and is a punishable
        offense as per institute honor code. There are strict guidelines from
        the Hon'ble Supreme Court to prevent ragging at the institute campus.
      </Paragraph>
      <Paragraph>
        As per AICTE/UGC Guidelines, Anti Ragging Committee & Anti Squad
        Committee has been formed at (Institute Level as well as Hostel Level ).
        In view of the directions of Hon'ble Supreme Court of India in the
        matter of "University of Kerala Vs Council, Principals, Colleges &
        Others" in SLP no. 24295/2006 dated 16.05.2007 and dated 08.05.2009 in
        Civil Appeal no. 887/2009 and in consideration of the determination of
        Govt. of India and University Grants Commission to prohibits, prevent
        and eliminate the scourge of ragging, UGC Regulations on curbing the
        menace of Ragging in Higher Educational Institutions in 2009 came to be
        issued and which were published in the Gazette of India on 04.07.2009.
        The said regulations are applicable on all the Institutions coming
        within the definition of University, Deemed University and all other
        Higher Educational Institutions, including MITRC, Alwar. <br /> If any
        student is found indulged in activity of Ragging then severe action will
        taken including lodging of FIR against such student/students. At the
        time of registration, students and their parents have given an
        undertaking that he/she will not indulge in any kind of activity which
        amounts to ragging. Thus, it is requested that all the students of
        Institution will be watchful and help the administration in all possible
        ways to curb and to root out ragging in all its forms.
      </Paragraph>

      <PdfLinks
        target="_blank"
        href="https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2Fmandatory-disclosure%2FFOR%20MORE%20INFORMATION%20-ANTI%20RAGGING%20COMITTE%20%26%20ANTI%20RAGGING%20SQUAD.pdf?alt=media&token=dc7468d8-3b57-42dd-a2a7-ee02499a8666"
      >
        FOR MORE INFORMATION ABOUT ANTI RAGGING COMMITTEE PLEASE CLICK ON IT
      </PdfLinks>

      {/* <Heading2>
        FOR MORE INFORMATION ABOUT ANTI RAGGING COMMITTEE PLEASE CLICK ON IT
      </Heading2> */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Paragraph>
          Please report to Hostel Warden and Dean Student Affairs/Committee
          Members about any ragging incident.  <br /> The details of
          anti-ragging policy can be found in the following documents:
        </Paragraph>

        <PdfLinks
          target={"_blank"}
          href={
            "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2Fmandatory-disclosure%2FSupreme-court-Judgment-2009-03-06-21.pdf?alt=media&token=649d6b2f-c441-4eb1-84ac-37f7c6cd72de"
          }
        >
          Supreme Court of India Orders - Curbing Ragging in Educational
          Institutions
        </PdfLinks>
        <PdfLinks
          target={"_blank"}
          href={
            "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2Fmandatory-disclosure%2FUGC%20Notice%20reg.Curbing%20the%20menace%20of%20ragging%20in%20Higher%20Educational%20Institutions.pdf?alt=media&token=5d7c4ed9-1277-4bd2-8b98-788985d55a33"
          }
        >
          UGC Notice reg.:"Curbing the menace of ragging in Higher Educational
          Institutions"
        </PdfLinks>
        <PdfLinks
          target={"_blank"}
          href={
            "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2Fmandatory-disclosure%2FUGC%20Letter%20reg.Curbing%20the%20menace%20of%20ragging%20in%20Higher%20Educational%20Institutions.pdf?alt=media&token=247a5a40-9dd5-4abb-a94d-9ec03e55d68c"
          }
        >
          UGC Letter reg.:"Curbing the menace of ragging in Higher Educational
          Institutions"
        </PdfLinks>
        <PdfLinks
          target="_blank"
          href="https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2Fmandatory-disclosure%2FSome%20points%20to%20remember%20about%20Ragging.pdf?alt=media&token=008b9958-c3b3-4cfc-9b12-87a5d9d4ee3c"
        >
          Some Points to remember about Ragging UGC Letter regarding
        </PdfLinks>
        <PdfLinks
          target="_blank"
          href="https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2Fmandatory-disclosure%2FPOSTER-ANTI%20RAGGING.pdf?alt=media&token=92c1fbaf-351f-4d58-b3b2-229fba054a15"
        >
          Posters that aware about Anti Ragging.
        </PdfLinks>
      </div>

      <ComplaintButton
        onClick={() => {
          window.location.href = "https://forms.gle/NX25Em56kCs7GxKS9";
        }}
      >
        Click here to complaint
      </ComplaintButton>
    </div>
  );
};

export default AntiRaggingPage;
