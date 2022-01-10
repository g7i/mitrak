import React from "react";
import {
  Heading,
  Paragraph,
} from "../../../../components/styledComponents/GlobalComponents";
import { BulletPoint, ComplaintButton, Heading2, PdfLinks } from "./styles";

const InternalComplaintCommitteePage = () => {
  return (
    <div>
      <Heading>Internal Complaint Committee</Heading>
      <Paragraph>
        MITRC endeavours to create a sustainable, equal-opportunity environment
        conducive to an all-round development of women members of the campus
        community, both professionally and personally.
      </Paragraph>

      <Paragraph>
        The institute constantly strives to ensure that women from all walks of
        life, residing in or visiting the campus, are treated with respect and
        dignity. It is committed to making the campus-environment safe for women
        – free from exploitation, harassment, and violence of any nature.
      </Paragraph>

      <Paragraph>
        The ICC of MITRC was constituted in accordance with the Sexual
        Harassment of Women at Workplace (Prevention, Prohibition, and
        Redressal) Act, 2013. The Cell's mandate includes sensitizing the
        community towards gender-related issues, and in this regard
      </Paragraph>

      <BulletPoint>
        <li>Organizing orientation programs for new students and employees,</li>
        <li>
          Conducting workshops and Open houses for various sections of the
          community.
        </li>
      </BulletPoint>

      <Paragraph>
        The ICC is constituted to help maintain a harmonious atmosphere at the
        Institute, to enable women to pursue their work with dignity and
        reassurance. The Cell has been working to raise awareness on gender
        equality issues.
      </Paragraph>

      <Paragraph>
        The Cell also advises on available courses of action to women on campus
        who may be in distress.
      </Paragraph>

      <Paragraph>
        The complaints w.r.t the above points can be made to the committee by
        female students/employees of Cell in the following manner:
      </Paragraph>

      <BulletPoint>
        <li>
          The female staff/student can make a complaint, in writing, to the
          local committee within a period of 1 months from the date of the
          incident.
        </li>
        <li>
          The complainant should clearly write down her identity, i.e, name,
          group, division, and office premises, to ensure fast and fruitful
          results and to solve the problems in a positive way.
        </li>
        <li>
          The committee is giving complete assurance to the students/employees
          that these details will be kept strictly confidential and will not be
          discussed outside, by any of the members of the committee.
        </li>
        <li>
          The committee also ensures to take action as per Sexual Harassment of
          Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013.
        </li>
      </BulletPoint>

      <Heading>
        Do not stay silent because you are afraid that no one will believe you.
      </Heading>
      <Heading>Do not stay silent  because you fear ridicule.</Heading>

      <PdfLinks
        target="_blank"
        href="https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2Fmandatory-disclosure%2FFOR%20MORE%20INFORMATION%20-ICC.pdf?alt=media&token=31d332a8-afc9-4340-bd5f-02eb514c8541"
      >
        FOR MORE INFORMATION REGARDING ICC CLICK ON IT
      </PdfLinks>

      <ComplaintButton
        onClick={() => {
          window.location.href = "https://forms.gle/3Pc3N4dLL8SVyKdx6";
        }}
      >
        CLICK FOR ONLINE GRIEVANCE FOR SEXUAL HARASSMENT OF WOMEN
      </ComplaintButton>
    </div>
  );
};

export default InternalComplaintCommitteePage;
