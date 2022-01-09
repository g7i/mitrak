import React from "react";
import {
  Heading,
  Paragraph,
} from "../../../../components/styledComponents/GlobalComponents";
import { ComplaintButton, Heading2 } from "./styles";

const AntiRaggingSquad = () => {
  return (
    <div>
      <Heading>Prevention of Ragging</Heading>
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

      <Heading2>
        FOR MORE INFORMATION ABOUT ANTI RAGGING COMMITTEE PLEASE CLICK ON IT
      </Heading2>

      <Paragraph>
        Please report to Hostel Warden and Dean Student Affairs/Committee
        Members about any ragging incident.  <br /> The details of anti-ragging
        policy can be found in the following documents:
      </Paragraph>

      <Paragraph>
        Supreme Court of India Orders - Curbing Ragging in Educational
        Institutions
      </Paragraph>
      <Paragraph>
        UGC Notice reg.:"Curbing the menace of ragging in Higher Educational
        Institutions"
      </Paragraph>
      <Paragraph>
        UGC Letter reg.:"Curbing the menace of ragging in Higher Educational
        Institutions"
      </Paragraph>
      <Paragraph>
        Some Points to remember about Ragging UGC Letter regarding:
      </Paragraph>
      <Paragraph>
        Revised procedure for students to file online Anti Ragging Affidavit.
      </Paragraph>
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

export default AntiRaggingSquad;
