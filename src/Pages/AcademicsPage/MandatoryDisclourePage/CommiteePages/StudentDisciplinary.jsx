import React from "react";
import {
  Heading,
  Paragraph,
} from "../../../../components/styledComponents/GlobalComponents";
import { BulletPoint, ComplaintButton, Heading2 } from "./styles";

const StudentDisciplinaryCounsilPage = () => {
  return (
    <div>
      <Heading>STUDENT DISCIPLINARY COUNCIL</Heading>
      <Paragraph>
        As per direction of AICTE/BTU/RTU, Institute has constituted a
        Disciplinary Council which maintains discipline, dignity, decorum and
        rapport of the institute. Controlling the students through rules and
        regulations and channelization their youth energy into positive and
        creative direction and promotion of the manners, personality, character
        and civilization.
      </Paragraph>
      <Heading2>OBJECTIVES</Heading2>
      <BulletPoint>
        <li>
          To maintain the activities of Institute in regards to disciplinary
          act.
        </li>{" "}
        <li>
          To uplift the student’s potential and to develop them as a balanced
          citizen in the society.
        </li>{" "}
        <li>
          The institute is driven with a passion and mission for imparting
          peaceful, safe and friendly environment.
        </li>{" "}
        <li>
          To scrutinize and prevent any indisciplinary activities (lack of
          attendance, unpunctuality, misbehaving with staff, colleague, damage
          to institute property) and riots.
        </li>{" "}
        <li>
          To provide a medium through which the committee can monitor and
          control the discipline of its students.
        </li>
      </BulletPoint>

      <Heading2>Role:</Heading2>
      <BulletPoint>
        <li>
          To make the rules and regulations as per the disciplinary requirement.
        </li>{" "}
        <li>To make the student aware about the discipline.</li>{" "}
        <li>To make the student follow the disciplinary rules.</li>{" "}
        <li>To take disciplinary action against any of the misconduct.</li>{" "}
      </BulletPoint>

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

export default StudentDisciplinaryCounsilPage;
