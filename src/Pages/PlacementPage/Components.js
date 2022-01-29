import {
  govtSelectionImages,
  placementActivitiesImages,
  studentPlacementImages,
  testimonialImages
} from "./staticData/doc";
import {Cont, H4, PageHead} from "../../components/styledComponents/New";

export function About() {
  return (
    <Cont>
      <PageHead>Training and Placement Cell</PageHead>
      <p>
        At Training and Placement Cell, we foster a climate where collaboration with industry thrives, generating breakthrough discoveries that can support continuous innovation and growth. With a perfect track record of very productive relationships with organisations of all sizes, from startups, growth stage to successful enterprises, our institutions provide the students perfect blend of technical education, soft skills development, and entrepreneurial mindset to make them industry ready. <br />
        Globalization and technological transformation has a big impact on economy of the country and needs to be kept in view since engineers and managers happen to be the engines of the economy of any nation. MITRC has been continuously putting efforts to understand the needs of the industry in order to prepare engineers and managers for facing the emerging challenges. Cooperation of the industry sought in this regard has proved very helpful and students are getting placed in reputed companies in good numbers.
      </p>
      <H4>Total Placements (2021 Batch): 120 and counting</H4>
      <H4>Highest Package Offered: 12.0 LPA</H4>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2F2020-8%2Ftop-recruiters.jpg?alt=media&token=4ff63492-692e-43d6-834c-e10c194de7fd"
        alt="Placement"/>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2F2020-8%2Fplacement_highlights.jpg?alt=media&token=202ec1ff-77c3-43dc-b4cc-c4781e9b455a"
        alt="Placement"/>
    </Cont>
  );
}

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
