import React, {useState} from "react";
import {getImagesLab} from "../../../../utils/firebase/department";
import {Collections} from "../../../../utils/firebase/storage";
import {Cont, Event, H3, H4, H5, PageHead} from "../../../../components/styledComponents/New";
import {Link} from "react-router-dom";
import {ActData} from "../../../CampusLifePage/ClubAndActivities/data";
import {AData} from "./data";

const Labs = [
  "Machine Lab", "High Voltage Engg. Lab", "Power System Lab", "Control System Lab", "EEE Lab", "Measurement Lab", "Power Electronics Lab", "Circuit Analysis Lab etc"
];

export function Home() {
  return (
    <Cont>
      <PageHead>Electrical Engineering</PageHead>
      <p>Electrical power and systems are at the heart of modern society – and so too are electrical and electronics engineers. Engineers specializing in these fields have transformed the 21st century with technologies such as universal electric power systems, television, radio and medical imaging to name just a few examples.</p>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/departments%2Fee%2FIMG_20180915_153603035.jpg?alt=media&token=1dc74059-154a-43bd-9517-5f824ae081cf "
        alt=""/>
      <p>Electrical Engineering is a section of the engineering discipline that deals with electric systems, electricity, and electromagnetism. Electrical engineers use the latest tools in computer science as well as more old-fashioned disciplines to build everything from electric cars to massive electrical infrastructures and control systems. It's a relatively new field within engineering, but it's been around since the advent of electric commercialization in the 19th century. It's divided into a wide range of subfields, including traditional ones such as signal processing and newer ones like computer engineering.</p>
      <p>Among the most famous <strong>electrical engineers</strong> that you may have heard of are Nikola Tesla (pioneer of commercial electricity and electromagnetism), Thomas Edison (developer of the light bulb and inventor of the record player), Jack Kilby (inventor of the pocket calculator and the integrated circuit), Marcian Hoff (inventor of the microprocessor) and Martin Cooper (inventor of the mobile phone).</p>
      <p><strong>Electrical engineering degrees</strong> will equip students with knowledge of how the industry works, as well as giving them the engineering skills and technological knowledge needed to design, assess and improve electrical and electronic systems.</p>
      <p>If you’re interested in how electrical devices work, are inquisitive, and have a strong interest in mathematics and science, then you probably already have some essential engineering skills and an electrical engineering degree may well be for you. Although technical knowledge is essential, electrical engineers are also involved in designing and building a range of devices, often within teams.</p>
      <p>Electrical Engineers use knowledge of circuitry and power generation to plan, design, and manage the manufacturing of electrical equipment as well as implement projects that harness different components of electricity and power. They use their knowledge of electrical systems to work in projects so small they could fit into your pocket to larger projects like aircraft electrical systems or communications systems. They design and test their projects, ensuring that everything created is safe. Careers In Electrical Engineering The field is still lucrative with the advent of 21st-century computing technology and electrical devices like smartphones and computer systems. There's also an extensive opportunity within biomedical engineering. You can find space for an electrical engineer in a wide range of fields.</p>
      <H4>Career in Electrical Engineering</H4>
      <p>Electrical Engineers use knowledge of circuitry and power generation to plan, design, and manage the manufacturing of electrical equipment as well as implement projects that harness different components of electricity and power. They use their knowledge of electrical systems to work in projects so small they could fit into your pocket to larger projects like aircraft electrical systems or communications systems. They design and test their projects, ensuring that everything created is safe. Careers In Electrical Engineering The field is still lucrative with the advent of 21st-century computing technology and electrical devices like smartphones and computer systems. There's also an extensive opportunity within biomedical engineering. You can find space for an electrical engineer in a wide range of fields. </p>
      <H5>Top Jobs for EE Engineer</H5>
      <ul>
        {[
          "Micro Electrical engineer",
          "Electrical engineer",
          "Power Engineer",
          "Instrumentation Engineer",
          "Telecommunication Engineer",
          "Electrical Design Engineer",
          "Jobs in Scientific Research",
          "Jobs in Indian Engineering Services",
          "Jobs in Maintenance Field",
          "Jobs in Infrastructure",
          "Jobs in Manufacturing",
          "Jobs in Power System",
        ].map(f => <li key={f}>{f}</li>)}
      </ul>
      <img src="https://a.ilovecoding.org/img/_blogs/software-development8.png" alt=""/>
      <H3>Rising fields in CSE that are hitting the electrical industry</H3>
      <pre>{`       • Electric Vehicle
    • Smart Grid
    • IOT
      `}</pre>
      <H4>Jobs in EE</H4>
      <H3>Jobs in Government Organisation / Government Undertaking Bodies</H3>
      <table>
        <tr>
          <th>S.No.</th>
          <th>Organisation</th>
          <th>Job Profile</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Niti Ayog</td>
          <td>Startup Fellow</td>
        </tr>
        <tr>
          <td>2</td>
          <td>DRDO</td>
          <td>JRF</td>
        </tr>
        <tr>
          <td>3</td>
          <td>ISRO</td>
          <td>Scientist Engineer</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Niti Ayog</td>
          <td>Start-up Fellow</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Bharat Electronics Limited</td>
          <td>Operation Engineer</td>
        </tr>
        <tr>
          <td>6</td>
          <td>SAIL</td>
          <td>Graduate Engineer Trainee</td>
        </tr>
        <tr>
          <td>7</td>
          <td>NTPC</td>
          <td>Specialist Officer</td>
        </tr>
        <tr>
          <td>8</td>
          <td>BHEL</td>
          <td>Specialist Officer</td>
        </tr>
        <tr>
          <td>9</td>
          <td>RPSC</td>
          <td>Graduate Engineer Trainee</td>
        </tr>
        <tr>
          <td>10</td>
          <td>CDAC</td>
          <td>Graduate Engineer Trainee</td>
        </tr>
      </table>
      <H3>Jobs in Private Companies</H3>
      <p>Here we have listed major companies which are highly recommended for you to work 2021 and 2022 as well. L&T, HAVELLS, WONDER CEMENT, JK LAKSHMI CEMENT, ADANI POWER, TATA, SIEMENS , Mahindra,  Birla Group both AB and CK, TATA Group, Crompton Greaves, ABB, ALSTOM, GE, THERMAX, etc. </p>
      <H3>Jobs in PSU’s ( Through GATE / Direct Recruitment)</H3>
      <p>BEL , IOCL, NTPC, BHEL, HAL,COAL INDIA LIMITED,   NFL, NLC, ONGC ECIL etc.</p>
      <H3>Other Opportunities</H3>
      <p>KVS, Indian Railways (Section Engineer, Jr. Engineer, Traffic Apprentice, Commercial Apprentice, Goods Guard, Station Master, Banking(Clerk, PO, SO) & SSC, IBPS  many more.</p>
      <H3>Start-Up Schemes for Engineers</H3>
      <p>Startups are ideal for computer science graduates. Most of the startups are technology driven, and a computer science graduate will understand it better. In fact, a computer science graduate is likely to make their start ideas successful than non-technical persons. The following is the list of the top 10 business startup ideas for computer science graduates.</p>
      <H4>Notable Startup in CSE</H4>
      <ul>
        <li>Electric vehicle</li>
        <li>Renewable energy like solar, related products.</li>
        <li>Energy efficiency product design.</li>
        <li>Electrical consultant in rural area</li>
      </ul>
    </Cont>
  );
}

export function About() {
  return (
    <Cont>
      <PageHead>Electrical Engineering</PageHead>
      <p>The Electrical Engineering Department was established in the year 2010 with intake of 60 seats and which was further enhanced to 120 seats in 2012. The department is recognized by AICTE, affiliated to BTU, Bikaner.</p>
      <p>The Electrical Engineering Department has dynamic and emergent community of students with a good academic and research-oriented activity record. The Electrical Engineering Department aims at becoming a leading department that introduced courses to students, that covers latest technologies and cutting edge domains to the curriculum such as Electric Vehicle Technology, Renewable Energy Sources, Control Systems, Automation, Power Electronics, Drives, Power Systems and many more. The faculty of EE department regularly contributes to national and international conferences and journals for upgrading knowledge within their respective fields. The graduates of the EE department placed in reputed industries and public sector such as Power industries, Adani, , IBM, TCS, Metacube, Infosys Ltd., Nagarro, etc.</p>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2F2020-8%2Ffront-1024x502.jpg?alt=media&token=9a736de7-a30f-4faf-a4a5-e7b05bc41fef"
        alt="img"/>
      <H4>About The Department</H4>
      <p>The EE Department of MITRC was started in the year 2007 with an intake of 30 students. Currently the
        Department offers an under-graduate program (B. Tech) in Electrical engineering with an intake of 180
        students and post graduate program (M. Tech) in computer science and engineering with an intake of 18. The
        department has highly qualified faculty members with minimum M. Tech qualification in Electrical
        engineering. Department of EE is committed to impart Technical
        and Research based quality education and to develop innovative skills among the students and to enrich the
        academic activities through continual improvement in the teaching and learning processes. The department also
        focuses on infusing confidence in the minds of students and to develop them as entrepreneurs.</p>
      <p>It develops expertise for consultative activities by providing opportunities for company– institute
        interaction. It is also constantly upgrading the technical expertise for producing competent professionals to
        cater to the needs of society and to meet the global challenges. Much care is taken to involve the faculty in
        the development of laboratories and to take an active interest in counselling the students. Students of our
        department actively participate in National-level Student programs Contests being organized at IIT's, NITSs, and
        various other Engineering Colleges. A good number of Students are well placed in reputed organizations.</p>
      <H4>Salient Features</H4>
      <ul>
        {[
          "Department organizes International Conference, Workshops, Faculty Development Programs, Short Term Training Program and Seminars for its students and Faculty",
          "Various Hackathons have been organized and students won positions in outside participation as well",
          "Empowered with 150 KVA Solar Cell",
          "Internet facility, Departmental library facility and classrooms equipped with smart boards and projectors",
          "Apart from active participation in various extracurricular activities, students also work on live projects from industry and various professional bodies like DST, IE and AICTE etc.",
          "Membership of IEEE, DELNET, Institute of Engineer",
          "Apart from active participation in various extracurricular activities, students also work on live projects from industry and various professional bodies like DST, IE and AICTE etc.",
          "Membership of CSI, ISTE, DELNET, Institute of Engineer.",
          "Highly experienced faculty with good academic record and research activity.",
          "Department has well equipped laboratories.",
          "R & D activity of the staff have resulted in several publications in peer reviewed International Journals of High Impact Factor and International/ National conferences.",
          "Periodically update of Laboratories as per current industry / research requirements with inclusion of beyond syllabus experiments.",
        ].map(f => <li key={f}>{f}</li>)}
      </ul>
    </Cont>
  );
}

export function VM() {
  return (
    <Cont>
      <PageHead>Vision and Mission</PageHead>
      <p>The Vision and Mission of the Department of Electrical Engineering at MITRC are as follows.</p>
      <H4>Vision</H4>
      <p>The vision of the department is to produce comprehensively confident, technically strong, socially responsible and innovative electrical engineers in the region.</p>
      <H4>Mission</H4>
      <p>The mission of the department is to provide the high quality education and in depth knowledge with skill enhancement in the field of electrical engineering; Synchronizing with industries to meet the ever changing need of the technical era for future engineers.</p>
    </Cont>
  );
}

export function Infra() {
  return (
    <Cont>
      <PageHead>Infrastructure</PageHead>
      <p>MITRC EE Department have following infrastructure.</p>
      <ul>
        <li><strong>Class Rooms: </strong> 5 (Each having Area 900 Square meter)</li>
        <li><strong>Total Labs: </strong> 13</li>
        <li><strong>Internet Facility: </strong> Yes (300 MBPS)</li>
        <li><strong>Projector: </strong> Yes</li>
        <li><strong>Audio System: </strong> Yes</li>
        <li><strong>Wi-Fi: </strong> Yes</li>
        <li><strong>Power Supply: </strong> Each Lab is running on UPS of 10KVA.</li>
        <li><strong>Seminar Hall: </strong> Yes</li>
        <li><strong>Seminar Hall: </strong> 10 (Each having Area 900 Square meter)</li>
        <li><strong>DG SET Available of 320 KVA</strong></li>
        <li><strong>Open Library with DELNET.</strong></li>
      </ul>
      <H4>CSE Labs at MITRC</H4>
      <ul>
        {Labs.map(f => <li key={f}>{f}</li>)}
      </ul>
      <div className="grid">
        {[
          "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/departments%2Fee%2Flabs%2F11.jpg?alt=media&token=7fd7a4ec-98e0-43b9-9cf3-463b7da9beda",
          "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/departments%2Fee%2Flabs%2F1.jpg?alt=media&token=f49676c8-e030-4111-9e63-111f53f320ac",
          "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/departments%2Fee%2Flabs%2F10.jpg?alt=media&token=52df8b90-d699-4950-a6f6-cd155eece5fe",
          "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/departments%2Fee%2Flabs%2F2.jpg?alt=media&token=d9342f78-55da-43ae-9c8d-191821831717",
          "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/departments%2Fee%2Flabs%2F3.jpg?alt=media&token=a8ad9fad-2c0d-4384-9fc5-2326d987c34a",
          "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/departments%2Fee%2Flabs%2F4.jpg?alt=media&token=ff632fac-accc-4608-af82-7157ddfaebd8",
          "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/departments%2Fee%2Flabs%2F5.jpg?alt=media&token=6f59bace-a301-4d4e-9447-a4476183dacb",
          "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/departments%2Fee%2Flabs%2F6.jpg?alt=media&token=ccdfddfe-cb66-4972-96dd-17f5b7936e17",
          "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/departments%2Fee%2Flabs%2F7.jpg?alt=media&token=fb86e85e-ceaf-49e6-ab47-faf95d14a50d",
          "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/departments%2Fee%2Flabs%2F8.jpg?alt=media&token=ab24039b-fb52-4e23-adbe-ed97afca20d0",
          "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/departments%2Fee%2Flabs%2F9.jpg?alt=media&token=6994eb22-80f7-4497-85ab-4a4ad0bab93b",
          "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/departments%2Fee%2Flabs%2F9.jpg?alt=media&token=6994eb22-80f7-4497-85ab-4a4ad0bab93b",
          "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/departments%2Fee%2Flabs%2Fpsp%20lab%2F10.jpg?alt=media&token=d26c4cca-041f-418f-81c8-4211b7f1196e",
          "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/departments%2Fee%2Flabs%2Fpsp%20lab%2F2.jpg?alt=media&token=f2dac155-f85c-4e7b-85cf-7249f4028ae6",
          "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/departments%2Fee%2Flabs%2Fpsp%20lab%2F3.jpg?alt=media&token=bb6ce047-1afb-4807-b1d1-be6f0a469033",
          "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/departments%2Fee%2Flabs%2Fpsp%20lab%2F5.jpg?alt=media&token=5cb7cfb9-de98-456e-b69e-91ae04ee61dc",
          "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/departments%2Fee%2Flabs%2Fpsp%20lab%2F6.jpg?alt=media&token=2e3fa974-c169-426a-ab12-7c4ee8736874",
          "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/departments%2Fee%2Flabs%2Fpsp%20lab%2F7.jpg?alt=media&token=2820bb5e-0697-4100-abd9-f72e2db5fac5",
          "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/departments%2Fee%2Flabs%2Fpsp%20lab%2F8.jpg?alt=media&token=ef155f17-d487-4cbe-baad-f179c271b43c"
        ].map(item => (
          <img key={item} src={item} alt={item} onLoad={e => e.target.classList.add('loaded')}/>
        ))}
      </div>
    </Cont>
  );
}

export function Achieve() {
  return (
    <Cont>
      <PageHead>Achievements & Awards</PageHead>
      <br/>
      <H3>Achievements, Awards & Recognitions</H3>
      <ul>
        <li>Eva Katta & Ruby Gautam got 5th & 6th in RTU Merit List of 2014-18 Batch. </li>
        <li>4 students qualified GATE 2020 Exam.</li>
        <li>Hemant Gupta got 10 Lakh Package in Byjus</li>
        <li>4 students qualified GATE 2020 Exam.</li>
        <li>The placement records of the department are excellent. The students  are placed in highly renowned companies namely Havells, Government Bodies, and several other Government/PSUs & IT companies.</li>
        <li>Many students have been Certified in various FOSS Courses (IIT, Bombay) under Spoken Tutorial Training Program and in Swayam/NPTEL Courses
        </li>
      </ul>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/departments%2Fee%2Fachievements%2F60492964_1151239531721742_5100200082620284928_n.jpg?alt=media&token=f2350d9c-c886-4405-b8ba-fe3f806cabab"
        alt=""/>
    </Cont>
  );
}

export function Academic() {
  return (
    <Cont>
      <PageHead>Academic Tie-ups</PageHead>
      <p>MITRC has collaboration with a number of companies to provide the practical exposure to the students and to
        understand the total significance of their subjects through Guest Lectures, Industrial Visit, Internship and
        Placement. By acknowledging them the current scenario of Industry and make them as per the needs of an Industry.
        Students are being provided ample opportunities by the joint efforts of different Companies & MITRC in their
        career growth.</p>
      <H4>CETPA Infotech</H4>
      <p>CETPA No.1 Training Company in Noida which is certified by ISO 9001:2008. CETPA InfoTech an efficient Training
        company constantly working towards imparting the best career to the students.</p>
      <p>CETPA has a tie-up with MITRC for Summer Training. CETPA aims to train students on different platforms with
        live projects and ensures in giving high-quality IT training institute in Noida. CETPA trains the students on
        the latest technologies in IT. Summer Internship is important for the technical students in their academic as
        well as professional growth.</p>
      <p>CETPA Trainer is very proficient in their skills and makes students experts in their learnings.CETPA Trainers
        clear students’ doubts and get new ideas with the help of summer training, and make them Â confident. If someone
        is looking for quality training, he/she must visit CETPA InfoTech to feel the difference.</p>
      <p>CETPA makes the students face the challenges of the industry. CETPA provide 100% placement assistance to their
        students in their career growth. Well, Equipped Labs and Excellent Infrastructure.</p>
    </Cont>
  );
}

export function Contact() {
  return (
    <Cont>
      <PageHead>Contact Us</PageHead>
      <br/>
      <p><strong>Mr. Prashant Tyagi</strong></p>
      <p>
        Block C, MITRC College, 6<sup>th</sup> Mile Stone, village Jharkhera, Delhi Tijara Highway , Alwar - 301028
      </p>
      <p><strong>Contact Number :</strong> 0144-2980851/52, Extension - 250</p>
    </Cont>
  );
}

export function Teaching() {
  return (
    <Cont>
      <PageHead>Teaching & Learning Process</PageHead>
      <p>In the department of Computer Science and Engineering, MITRC Alwar, we define Teaching & Learning as
        follows.</p>
      <p>Teaching and learning process can be defined as a transformation process of knowledge from teachers to
        students. It is referred as the combination of various elements within the process where an educator identifies
        and establish the learning objectives and develop teaching resources and implement the teaching and learning
        strategy. On the other hand, learning is a cardinal factor that a teacher must consider while teaching students.
        The paper evaluated various academic journals, pedagogy, and inclusive practices to assess the teaching
        effectiveness within the higher education setting. The objective of the research is to assess the teaching
        effectiveness in a higher education setting.</p>
      <p>Many of innovative initiatives taken by faculty and staff members of Department of Computer Science and
        Engineering can be observed in the Course Files, Laboratory Manuals and other documents that are well maintained
        in the department.</p>
      <H4>Objectives of Teaching & Learning</H4>
      <ul>
        <li>Enrich the learning experience of students in classroom & laboratories so that students explore their
          technical knowledge in core field & implement this knowledge in practical applications .
        </li>
        <li>Uplift the weak students & enhance the understanding and knowledge of students by which they can analyze the
          real time problems & solve them.
        </li>
        <li>Exploring the skills and broaden the perspective of students in every matters like academic, contemporary as
          well as social issues
        </li>
        <li>Motivate the students to think, formulate, and develop the solution of real time problems in society and
          industries .
        </li>
      </ul>
      <H4>Teaching & Learning Processes</H4>
      <p className="nomargin">Various process carried out for improving the academics which includes : </p>
      <pre>{`
    • Faculty prepare the Teaching Plan & teach students according to teaching plan.
    • Faculty prepare the academic notes and laboratory manuals in advance and submit them to library and also upload it on portal.
    • Use of PPT, Projector, Simulation carried out for enriching the knowledge of the students.
    • Mind Mapping Technology used by faculty members so that students easily understood the concept.
    • By various Club Activities, department tried to develop technical as well as extra curricular skills of students.
    • Weak students are identified & more attention is given to them like Zero Hour Class, Doubt Class,Pictorial way , new innovative technologies used in teaching etc. 
    • Quiz & Coding Competition are carried out to uplift the level of students according to market.
    • Daily Lecture Notes are shared on Social Media & Portal.
    • Assignments are given on weekly basis so that students revise and explore the topic.
    • Unit Test, Mid Term Exam, Discussion are the way of analyzing the performance of students.
    • Viva & Experiment perform carried out in laboratories.
    • Regular feedback taken on weekly basis.
    • Industrial Visits help the students to explore the knowledge and get familiar with practical exposure &  industry environment .
    • Exams are carried out on basis of Bloom taxonomy.
    • Counselling session helps in solving the academic and other problems.  
    • Induction Program helps students to get familiar with environment.
    • In House Training : Training carried out at MITRC by various organizations on latest technologies like Blockchain, IOT, REACT, AI & Cyber Security.
    • Faculty motivate the students for self learning through various Online Courses from MOOC Platforms like Swayam,NPTEL,IIRS.
    • Faculty motivate the students to carried out experiments on Virtual Lab & help them in doing this so that their knowledge level get expand.
    • Projects are developed on real time problems using latest technology and to motivate them for develop classical product that lead to Start Ups /Innovation.
    • Special Classes are conducted/arranged for Competitive Exams & Placements .
    • GATE Classes are conducted/arranged in each session for GATE Exam Preparation.
    • Motivate the students for participating in National level/ State Level Events organized by AICTE,MHRD, University and other Education bodies like Hackathon, CVA, Toycathon, Manthan etc.
    • Motivate students to develop the projects from 3rd semester by learning Web Development, App development, ML, AI etc.
    • Motivate students to write Research papers and to present them in Conference and to publish them in Journals.
    • Seminars & Workshops are arranged to get advance knowledge according to need and also interact with outside.
    • Develop the thinking level and formulation of solution of real time problems by assigning the tasks.
    • Teach the student by Audio-Video methods also.
    • Industrial Visits help the students to explore the knowledge and get familiar with practical exposure &  industry environment .
    • Exams are carried out on basis of Bloom taxonomy.
    • Counselling session helps in solving the academic and other problems.  
    • Induction Program helps students to get familiar with environment.
    • In House Training : Training carried out at MITRC by various organizations on latest technologies like Blockchain, IOT, REACT, AI & Cyber Security.
    • Faculty motivate the students for self learning through various Online Courses from MOOC Platforms like Swayam,NPTEL,IIRS.
    • Faculty motivate the students to carried out experiments on Virtual Lab & help them in doing this so that their knowledge level get expand.
    • Projects are developed on real time problems using latest technology and to motivate them for develop classical product that lead to Start Ups /Innovation.
    • Special Classes are conducted/arranged for Competitive Exams & Placements .
    • GATE Classes are conducted/arranged in each session for GATE Exam Preparation.
    • Motivate the students for participating in National level/ State Level Events organized by AICTE,MHRD, University and other Education bodies like Hackathon, CVA, Toycathon, Manthan etc.
    • Motivate students to develop the projects from 3rd semester by learning Web Development, App development, ML, AI etc.
    • Motivate students to write Research papers and to present them in Conference and to publish them in Journals.
    • Seminars & Workshops are arranged to get advance knowledge according to need and also interact with outside.
    • Develop the thinking level and formulation of solution of real time problems by assigning the tasks.
    • Teach the student by Audio-Video methods also.
        `}</pre>
    </Cont>
  );
}

export function Visits() {
  return (
    <Cont>
      <PageHead>Industrial Visits</PageHead>
      <p>Various Industrial Visits Carried out :</p>
      <pre>{`    • ISRO
    • MSME
    • 220 KV GSS
    • ARIES
    • Parle G
    • Saras Dairy & many more 
      `}</pre>
      <div className="grid">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/departments%2Fee%2Factivities%2FWhatsApp%20Image%202021-12-07%20at%206.06.52%20PM.jpeg?alt=media&token=29bf9c74-e463-4a98-81b3-ae3e5c210c17"
          alt=""/>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/departments%2Fee%2Factivities%2FWhatsApp%20Image%202021-12-07%20at%206.06.53%20PM.jpeg?alt=media&token=2c8432f5-68ce-4474-8b33-9e0a449d4247"
          alt=""/>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/departments%2Fee%2Factivities%2FWhatsApp%20Image%202021-12-07%20at%206.06.54%20PM.jpeg?alt=media&token=0a4457aa-2e9a-4223-a5a1-ad19a24a5501"
          alt=""/>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/departments%2Fee%2Factivities%2FWhatsApp%20Image%202021-12-07%20at%206.07.00%20PM.jpeg?alt=media&token=be970fad-a0a0-453f-a557-d2508946a054"
          alt=""/>
      </div>
    </Cont>
  );
}

export function Testimonials() {
  return (
    <Cont>
      <PageHead>Testimonials</PageHead>
      <div className="grid">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/departments%2Fcomputer%2FTestimonial%2F1.jpg?alt=media&token=8677e6e1-95fd-4150-908e-542aeeb5bc53"
          alt=""/>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/departments%2Fcomputer%2FTestimonial%2F10.jpg?alt=media&token=947f0b35-181a-47e4-9a81-bc409beca328"
          alt=""/>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/departments%2Fcomputer%2FTestimonial%2F2.jpg?alt=media&token=0ab16126-9a39-4845-ab9f-841050512564"
          alt=""/>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/departments%2Fcomputer%2FTestimonial%2F3.jpg?alt=media&token=eb2c420b-27e7-40aa-b438-d7a9f038238c"
          alt=""/>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/departments%2Fcomputer%2FTestimonial%2F4.jpg?alt=media&token=26fe99a3-5364-4bd8-b063-3ba0a057998e"
          alt=""/>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/departments%2Fcomputer%2FTestimonial%2F5.jpg?alt=media&token=419470ee-6b20-4442-8334-7a8152736480"
          alt=""/>
      </div>
      <br/>
      <PageHead>Success Stories</PageHead>
      <div className="grid">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/departments%2Fcomputer%2FSUCCESS%20STORIES%2F8.jpg?alt=media&token=da86afa5-c3a2-43af-b38b-411d5249b64a"
          alt=""/>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/departments%2Fcomputer%2FSUCCESS%20STORIES%2F3.jpg?alt=media&token=1d7825b5-7e84-45d4-895b-eea55404221a"
          alt=""/>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/departments%2Fcomputer%2FSUCCESS%20STORIES%2F4.jpg?alt=media&token=673e96e8-569d-4cde-b83b-f4231169f758"
          alt=""/>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/departments%2Fcomputer%2FSUCCESS%20STORIES%2F5.jpg?alt=media&token=827fb536-c794-46c4-ac2e-2721d654aa7b"
          alt=""/>
        <img src="https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/departments%2Fcomputer%2FSUCCESS%20STORIES%2F6.jpg?alt=media&token=b760f077-fa0c-46bc-9eb8-357180ec5610" alt=""/>
      </div>
    </Cont>
  );
}

const yrs = ["2021-2022", "2020-2021", "2019-2020"];
export function Activities() {
  const [active, setActive] = useState(null);
  const [current, setCurrent] = useState(null);

  return (
    <Cont>
      <PageHead>Activities</PageHead>
      <p>
        MITRC CSE Department carried out various activities for students & teachers for developing their personal, technical and social skills.
      </p>
      <H4>Activities Carried out</H4>
      <pre>{`    • Seminar
    • Workshop
    • FDP
    • Industrial Visit
    • Quiz Competition
    • Extra Curricular Activities
    • Curricular Activities
    • Conference
      `}</pre>
      <H4>Activities By Session</H4>
      <ul>
        {yrs.map(yr => (
          <li onClick={() => setCurrent(yr)} key={yr}>
            <Link to="#">Activity Session {yr}</Link>
          </li>
        ))}
      </ul>
      {!!AData[current] && (
        <>
          <H4>Activities Session {current}</H4>
          {AData[current].map((item, i) => (
            <Event
              key={i}
              onClick={() => setActive(p => p === i ? null : i)}
              full={i === active}
            >
              <div className="title">{item.Activity}</div>
              <div className="text">{item.Remarks}</div>
              <div className="foot">
                <div className="date">{item.Date}</div>
                <div className="inst">Click to read more <span>&gt;&gt;</span></div>
              </div>
            </Event>
          ))}
        </>
      )}
    </Cont>
  );
}
