import React from "react";
import {
  Heading,
  Paragraph,
} from "../../../../components/styledComponents/GlobalComponents";
import { BulletPoint, ComplaintButton, Heading2 } from "./styles";

const STSCPage = () => {
  return (
    <div>
      <Heading>
        SC/ST CELL COMMITTEE : Prevention of Caste Based Discrimination
      </Heading>
      <Paragraph>
        Scheduled Castes and Scheduled Tribes have been identified as the two
        most backward groups of Indian Society. They include all such castes,
        races or tribes, which have been declared as scheduled castes and
        scheduled tribes by the Constitution of India under the provisions of
        Article 341 and 342 of the Constitution of India. Scheduled Castes
        generally represent those communities, which have suffered from the
        stigma of untouchability in one form or the other.
      </Paragraph>
      <Paragraph>
        To ensure the effective implementation of the reservation policy in
        admission, recruitment, allotment of rooms in Hostels etc. SC/ST Cell is
        established in MITRC. The SC/ST Students Cell addresses academic and
        non-academic issues and complaints received from students in reserved
        categories. The Institute strives to maintain a work environment wherein
        faculty and staff members from different community can work in a
        coherent environment. It is the Institutes endeavor to ensure that no
        kind of caste based discrimination take place at workplace. It should be
        ensure that communities can participate in academic and research
        activities without any sort of discrimination with respect to caste or
        creed. In order to maintain such an atmosphere, the SC/ST students cell
        is responsible for sensitizing the campus community about the importance
        of having diversity.
      </Paragraph>

      <ComplaintButton
        onClick={() => {
          window.location.href = "https://forms.gle/iqpQQsetqRjvyd9P8";
        }}
      >
        CLICK FOR ONLINE GRIEVANCE REDRESSAL FOR CASTE DISCRIMINATION BY SC/ST
        STUDENTS.
      </ComplaintButton>
    </div>
  );
};

export default STSCPage;
