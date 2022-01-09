import React from "react";
import {
  Heading,
  Paragraph,
} from "../../../../components/styledComponents/GlobalComponents";
import { BulletPoint, ComplaintButton, Heading2 } from "./styles";

const StudentCounsilCommitteePage = () => {
  return (
    <div>
      <Heading>STUDENT’S COUNSELLING COMMITTEE </Heading>

      <Paragraph>
        During the Educational period and later, overall development of our
        younger generation is highly significant. The internal and external
        challenges of our youngsters are to be resolved in order to empower them
        properly to become not only a good Engineer but also a good human being.
        For this, close assessment and warm interaction with each individual
        student is mandatory. 
      </Paragraph>

      <Paragraph>
        Personal & Vocational Guidance is necessary to students in their life
        for building a good career. Keeping this in mind, as per direction of
        AICTE, Institute has constituted Student’s Counselling Committee. Its
        main objectives are :
      </Paragraph>
      <BulletPoint>
        <li>
          To enable the parents to know about the performance & regularity of
          their wards.
        </li>
        <li>Improvement of Teacher-Student relationship.</li>
        <li>
          Giving an opportunity for students to learn to improve their
          emotional, behavioral, personal, interpersonal characteristics, to
          develop confidence, make better choices, and increase educational
          efficiency.
        </li>
        <li>
          Helping students to explore and express feelings and ways of thinking
          about their present situation and work toward making a healthier and
          happier future.
        </li>
        <li>
          To help the students in solving their personal, educational, social as
          well as psychological problems.
        </li>
        <li>
          To create awareness about issues and problems related to mental health
          of student.
        </li>
        <li>To motivate them by faculty in counseling activities.</li>
        <li>
          To provide a support system for the students to address the major
          academic related issues.
        </li>
        <li>
          To provide a support system for the students to address the major
          academic related issues.
        </li>
        <li>
          To analyze the grievances of students and to take corrective action
          with the appropriate authorities for redressal.
        </li>
        <li>To get suggestions regularly from the students for improvement.</li>
      </BulletPoint>

      <Heading2>ROLE & RESPONSIBILITIES</Heading2>
      <BulletPoint>
        <li>
          Solve personal problems of student by conducting individual counseling
          session
        </li>
        <li>
          Diagnose the learning difficulties of students and help them to
          overcome the same.
        </li>
        <li>
          Conduct training program on counseling skills for faculty & staff.
        </li>
        <li>
          Conduct seminars for students on mental health and addiction issues.
        </li>
        <li>
          Inform the parents about psychological misbehavior of the student.
        </li>
        <li>
          Students are encouraged to meet the counseling committee regularly to
          address their suggestions and grievances.
        </li>
      </BulletPoint>

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

export default StudentCounsilCommitteePage;
