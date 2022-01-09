import React from "react";
import {
  FillImage,
  Heading,
  Paragraph,
} from "../../../../components/styledComponents/GlobalComponents";
import { ComplaintButton, Heading2, PdfLinks } from "./styles";

const GriReadressalPage = () => {
  return (
    <div>
      <Heading>ORGANIZATIONAL CHART AND PROCESSES</Heading>
      <Paragraph>
        As per the F.No. 1-103/AICTE/GRC/Regulation/2021 of the All-India
        Council for Technical Education, notification dated March 22, 2021, ‘A
        Grievance Redressal Committee (GRC) for Students/Faculty/Staff members
        has been constituted.  The Students/Faculty/Staff are ought to lodge
        their grievances in the prescribed form available with their Head of the
        respective department. The form, duly filled, is required to be
        submitted in the drop box placed outside the Principal's/Director’s
        office.
      </Paragraph>

      <Heading>Grievance Redressal Committee</Heading>
      <Paragraph>
        It is good to air a grievance rather than to keep it bottled up.
        Protection of human rights is essential for all round development of an
        individual’s personality. To realize the primary needs of the students
        and faculty & staff and secure civil liberties for everybody, a
        Grievance Redressal Cell already working in College. According to Guide
        lines of AICTE, a GRC has been constituted.
      </Paragraph>

      <Paragraph>
        The GRC is indented to find solutions for problems like harassment – any
        kind of physical or mental harassment, Complaints regarding Class Room
        Teaching – Class Room Management, Completion of Syllabus, Teaching
        Methods etc, if and when they arise. The GRC convenes meetings
        periodically and takes steps to redress the grievance.
      </Paragraph>

      <PdfLinks
        target="_blank"
        href="https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2Fmandatory-disclosure%2FFOR%20MORE%20INFORMATION%20-GRIEVANCE%20REDRESSAL%20MECHANISM.pdf?alt=media&token=be2e72c6-8ed2-4f7c-9744-e710dc92188a"
      >
        FOR MORE INFORMATION CLICK ON IT.
      </PdfLinks>

      <Paragraph>
        Grievances may also be sent through e-mail to the Member/Officer
        In-Charge of Students' Grievance Cell.
      </Paragraph>
      <Paragraph>Email: hr@mitrc.ac.in/deansa@mitrc.ac.in</Paragraph>
    </div>
  );
};

export default GriReadressalPage;
