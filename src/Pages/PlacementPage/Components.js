import styled from "styled-components";
import {
    FillImage,
  Heading,
  Paragraph,
} from "../../components/styledComponents/GlobalComponents";
import {
  govtSelectionImages,
  placementActivitiesImages,
  studentPlacementImages,
  testimonialImages
} from "./staticData/doc";

export const CoporateFeedback = ({ feedback }) => {
  const { name, company, imageUrl, description } = feedback;
  return (
    <FeedBackMainContainer>
      <FeedbackImage src={imageUrl} alt="recruiter-image" />
      <FeedBackSecondContainer>
        <Heading style={{ paddingTop: 0, marginTop: 0 }}>{name}</Heading>
        <Paragraph style={{ fontSize: "1.7rem", fontWeight: 700 }}>
          {company}
        </Paragraph>
        <Paragraph>{description}</Paragraph>
      </FeedBackSecondContainer>
    </FeedBackMainContainer>
  );
};

const FeedBackMainContainer = styled.div`
  display: flex;
  width: 80%;
  background-color: #fff;

  padding: 20px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  box-shadow: 5px 2px 10px 4px #888888;
  margin: 20px auto;
  @media (max-width: 768px) {
    flex-direction: column;
    row-gap: 20px;
  }
`;
const FeedbackImage = styled.img`
  width: 140px;
  height: 140px;
  object-fit: contain;
`;

const FeedBackSecondContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  flex: 1;
`;

export const PlcaementSummary = ({obj}) => {
    const {heading , description , imageUrl} = obj;
  return (
    <PlacementSummaryContainer>
      <Heading>{heading}</Heading>
      <Paragraph>{description}</Paragraph>
      <FillImage src={imageUrl} alt={"placement-image"}/>
    </PlacementSummaryContainer>
  );
};

const PlacementSummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

export function About() {
  return (
    <Cont>
      <PageHead>Training and Placement Cell</PageHead>
      <p>
        At Training and Placement Cell, we foster a climate where collaboration with industry thrives, generating breakthrough discoveries that can support continuous innovation and growth. With a perfect track record of very productive relationships with organisations of all sizes, from startups, growth stage to successful enterprises, our institutions provide the students perfect blend of technical education, soft skills development, and entrepreneurial mindset to make them industry ready. <br />
        Globalization and technological transformation has a big impact on economy of the country and needs to be kept in view since engineers and managers happen to be the engines of the economy of any nation. MITRC has been continuously putting efforts to understand the needs of the industry in order to prepare engineers and managers for facing the emerging challenges. Cooperation of the industry sought in this regard has proved very helpful and students are getting placed in reputed companies in good numbers.
      </p>
      <H4>Total Placements (2021 Batch): 662 and counting</H4>
      <H4>Highest Package Offered: 18.0 LPA</H4>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2F2020-8%2Ftop-recruiters.jpg?alt=media&token=4ff63492-692e-43d6-834c-e10c194de7fd"
        alt="Placement"/>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2F2020-8%2Fplacement_highlights.jpg?alt=media&token=202ec1ff-77c3-43dc-b4cc-c4781e9b455a"
        alt="Placement"/>
    </Cont>
  );
}

const PageHead = styled.div`
  border-radius: 5px;
  box-shadow: 5px 5px 5px grey;
  border: 1px solid black;
  font-size: 22px;
  width: fit-content;
  padding: 5px 20px;
  font-family: Arial, serif;
  font-weight: 500;
  font-style: italic;
`;
const H4 = styled.h4`
  border-left: 5px solid #1c2f46;
  box-shadow: 1px 1px 6px -2px;
  color: #1c2f46;
  display: table;
  font-family: serif;
  font-size: 22px;
  font-style: italic;
  font-weight: 700;
  margin: 10px 0;
  padding: 7px;
`;

const Cont = styled.section`
  margin: 30px 0 50px;
  p {
    font-weight: 400;
    font-family: serif;
    font-size: 14px;
    line-height: 20px;
    margin: 15px 0 20px;
    text-align: justify;
  }
  img {
    width: 100%;
    height: auto;
    object-fit: contain;
    margin-top: 15px;
  }
  ul {
    margin-left: 20px;
  }
  li {
    list-style-position: inside;
    font-weight: 400;
    font-family: serif;
    font-size: 14px;
    line-height: 20px;
  }
  .grid {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-gap: 5px;
    
    img.loaded {
      background-color: #324a8a;
      height: 100%;
    }
  }
  @media screen and (max-width: 1024px) {
    margin-bottom: 20px;
  }
`;

export function CRT() {
  return (
    <Cont>
      <PageHead>Campus Recruitment Training</PageHead>
      <p>
        Campus Recruitment Training Program is a comprehensive training module of 90 Hours, which runs for Third Year engineering students.
      </p>
      <p>
        Campus Recruitment Training Program comprises preparation of aptitude exam for initial screening round of companies, Resume Writing, Group Discussions and Personal Interviews etc.
      </p>
      <H4>Modules of CRT Program</H4>
      <ul>
        <li>Quantitative Skills</li>
        <li>Logical reasoning</li>
        <li>Comprehension</li>
        <li>Verbal reasoning</li>
        <li>Data Interpretation</li>
        <li>Data Sufficiency</li>
        <li>Resume Writing</li>
        <li>Group Discussion</li>
        <li>Personal Interview</li>
        <li>Mock Tests</li>
      </ul>
      <p>Campus Recruitment Training is taken by external agency having expertise in the same field.</p>
      <H4>Campus Recruitment Training Partners</H4>
      <ul>
        <li>TIME</li>
        <li>MyPerfectice</li>
        <li>FACE</li>
      </ul>
    </Cont>
  );
}

export function SoftSkills() {
  return (
    <Cont>
      <PageHead>Soft Skills</PageHead>
      <p>
        Soft Skills plays a vital role in employability, we at MITRC understands the ever increasing need of versatile technocrats in industry.
        To enhance communications skills and soft skills MITRC in association with external partners runs various comprehensive training programs for students.
        <br />
        Soft Skills plays a vital role in employability, we at MITRC understands the ever increasing need of versatile technocrats in industry.
      </p>
      <p>
        To enhance communications skills and soft skills MITRC in association with external partners runs various comprehensive training programs for students.
      </p>
      <H4>Training Programs focus on following modules</H4>
      <ul>
        <li>Business Communication Skills</li>
        <li>Effective Communication</li>
        <li>Intrapersonal Personal Relationship Skills</li>
        <li>Interpersonal Skills</li>
        <li>Campus To Company</li>
        <li>Presentation, Group Discussion And Interviews</li>
        <li>Entrepreneurship Skills Development</li>
      </ul>
    </Cont>
  );
}

export function Internship() {
  return (
    <Cont>
      <PageHead>Internship</PageHead>
      <p style={{ marginBottom: '40px' }}>
        We believe that hands on exposure is the best way of learning, so to prepare students for industrial environment in better way, MITRC offers students opportunity to work with startup or growth stage companies during pre final and final year as interns after college hours.
      </p>
      <PageHead>Mou's with Industries</PageHead>
      <p>
        We believe that hands on exposure is the best way of learning, so to prepare students for industrial environment in better way, MITRC offers students opportunity to work with startup or growth stage companies during pre final and final year as interns after college hours.
      </p>
    </Cont>
  );
}

export function Recruiters() {
  return (
    <Cont>
      <PageHead>Our Recruiters</PageHead>
      <p>
        We believe that hands on exposure is the best way of learning, so to prepare students for industrial environment in better way, MITRC offers students opportunity to work with startup or growth stage companies during pre final and final year as interns after college hours.
      </p>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2Fplacement-poster%2FCompany-Logo-2018-768x1627.jpg?alt=media&token=b198e53d-86d8-411d-8be9-8fc3a4c872a0"
        alt="Recruiters"/>
    </Cont>
  );
}

export function Journey() {
  return (
    <Cont>
      <PageHead>Journey of Student in T&P Cell</PageHead>
      <p>
        At MITRC, placement cell focus a lot on industry readiness of budding technocrats, other than the technical education Training and Placement department runs mandatory programs for students.
      </p>
      <H4>Typical Journey of a student in Placement Department</H4>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2F2022%2Fjourney-T%26P.jpg?alt=media&token=200ed5ad-77e9-4123-92a5-81b11d753d99"
        alt="Journey of Student in T&P"/>
    </Cont>
  );
}

export function Activities() {
  return (
    <Cont>
      <PageHead>Placement Activities</PageHead>
      <p>
        At MITRC, placement cell focus a lot on industry readiness of budding technocrats, other than the technical education Training and Placement department runs mandatory programs for students.
      </p>
      <div className="grid">
        {placementActivitiesImages.map(item => (
          <img key={item.url} src={item.url} alt="Placement Activities" onLoad={e => e.target.classList.add('loaded')}/>
        ))}
      </div>
    </Cont>
  );
}

export function StudentPlacements() {
  return (
    <Cont>
      <PageHead>Student Placement</PageHead>
      <p>
        At MITRC, placement cell focus a lot on industry readiness of budding technocrats, other than the technical education Training and Placement department runs mandatory programs for students.
      </p>
      <H4>Placements 2021-22</H4>
      <img
        style={{ marginBottom: '20px' }}
        src="https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2F2022%2Fphoto6257849762560716826.jpg?alt=media&token=a7ab6177-be0f-479a-a035-d1b66542dc25"
        alt="Placement"/>
      <H4>Previous Placements</H4>
      <div className="grid">
        {studentPlacementImages.map(item => (
          <img key={item.url} src={item.url} alt="Student Placements" onLoad={e => e.target.classList.add('loaded')}/>
        ))}
      </div>
    </Cont>
  );
}

export function GovtSelection() {
  return (
    <Cont>
      <PageHead>Government Selection</PageHead>
      <p>
        At MITRC, placement cell focus a lot on industry readiness of budding technocrats, other than the technical education Training and Placement department runs mandatory programs for students.
      </p>
      <div className="grid">
        {govtSelectionImages.map(item => (
          <img key={item.url} src={item.url} alt="Student Placements" onLoad={e => e.target.classList.add('loaded')}/>
        ))}
      </div>
    </Cont>
  );
}

export function PlacementNews() {
  return (
    <Cont>
      <PageHead>Placement News</PageHead>
      <p>
        At MITRC, placement cell focus a lot on industry readiness of budding technocrats, other than the technical education Training and Placement department runs mandatory programs for students.
      </p>
      <H4>Job Notification</H4>
      <p>
        At MITRC, placement cell focus a lot on industry readiness of budding technocrats, other than the technical education Training and Placement department runs mandatory programs for students.
      </p>
    </Cont>
  );
}

export function PlacementStatistics() {
  return (
    <Cont>
      <PageHead>Placement Statistics</PageHead>
      <p>
        At MITRC, placement cell focus a lot on industry readiness of budding technocrats, other than the technical education Training and Placement department runs mandatory programs for students.
      </p>
    </Cont>
  );
}

export function Testimonials() {
  return (
    <Cont>
      <PageHead>Testimonials</PageHead>
      <p>
        At MITRC, placement cell focus a lot on industry readiness of budding technocrats, other than the technical education Training and Placement department runs mandatory programs for students.
      </p>
      <H4>What does Alumni say about us?</H4>
      <div className="grid">
        {testimonialImages.map(item => (
          <img key={item.id} src={item.image} alt="Student Testimonial" onLoad={e => e.target.classList.add('loaded')} />
        ))}
      </div>
    </Cont>
  );
}
