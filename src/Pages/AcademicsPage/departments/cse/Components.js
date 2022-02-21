import React, {useEffect, useState} from "react";
import {getImagesLab} from "../../../../utils/firebase/department";
import {Collections} from "../../../../utils/firebase/storage";
import {Cont, Event, H3, H4, H5, PageHead} from "../../../../components/styledComponents/New";
import {Link} from "react-router-dom";
import {AData} from "./data";
import {listDocuments} from "../../../../utils/firebase/db";
import {CircularProgress} from "@mui/material";

const Labs = [
  "Data Structure Lab",
  "DBMS Lab",
  "OOP Lab",
  "Software Engineering Lab",
  "Computer Graphics Lab",
  "Compiler Design Lab",
  "Java Lab",
  "Cyber Security Lab",
  "IoT Lab",
  "Python Lab",
  "C Programming Lab",
  "LSP Lab",
  "Network Programming Lab",
  "Android Lab",
];

const queryConfig = { queries: [{name: "department", operator: "==", value: "CSE"}] }

export function Home() {
  return (
    <Cont>
      <PageHead>Computer Science & Engineering</PageHead>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2Fcse1.png?alt=media&token=9d8edf35-b1fd-4ad1-8497-344c266d576b"
        alt="img"/>
      <p>Computer science is the scientific approach to computation, along with its wide range of applications. Computer scientists study the feasibility and mechanisation of procedures, known as algorithms, which underlie the acquisition, processing, storage and communication of data.</p>
      <p>Computer Science Engineering (CSE) encompasses a variety of topics that relates to computation, like analysis of algorithms, programming languages, program design, software, and computer hardware.</p>
      <p>Computer Science Engineering uses principles from Computer Science and Electrical Engineering to create hardware (physical components) and firmware which are used in a wide range of areas: consumer electronics, medical devices, communication systems, aircraft, self-driving cars, etc.</p>
      <p>Computer Science Engineering students learn how to develop, prototype, and test microchips, circuits, processors, conductors and any other component used in computer devices or systems (e.g. super computers, smart phones, laptops, servers, IoT gadgets). They also develop firmware, an essential type of software that allows operating systems and applications to take full advantage of the hardware.</p>
      <p>Today we are speeding up towards the computerization and modernization in our entire social, professional, occupational, defense and many other activities. Computer is now an essential part of our life and needs. It is mainly because of the error free and fast operation, and no need to keep hard store and transport the data. “Your time is in your one click”.</p>
      <img src="/static/media/coding-platform-STEM-code.bb95b27d.jpg" alt="img"/>
      <H4>Career in CSE</H4>
      <p>Computer science job opportunities vary depending on the degree. Graduates with associate degrees often pursue roles as computer support specialists or web developers. Bachelor’s degrees open doors to many more computer science careers in software development, database administration, and computer programming.</p>
      <p>Employers typically expect computer and information research scientists to hold master’s degrees at minimum. Since its inception during the Industrial Revolution, computer science has become essential to everyday life and changed nearly every part of society: Cyber security experts protect companies from foreign and domestic interference, while everyday people stream movies and connect with video conferencing technology</p>
      <H5>Top Jobs for CSE Engineer</H5>
      <ul>
        {[
          "Full Stack Developer",
          "Application Analyst",
          "Mobile Application Developer",
          "Business Intelligence Analyst",
          "Software Engineer",
          "Computer Programmer",
          "System Architect",
          "Data Architect",
          "Network Analyst",
          "Database Manager",
          "Data Science Engineer",
          "Data Warehouse Developer",
          "Machine Learning Learner",
          "Graphic Designer",
          "Full Stack Developer",
          "Information Security Analyst",
          "IT Manager"
        ].map(f => <li key={f}>{f}</li>)}
      </ul>
      <img src="https://a.ilovecoding.org/img/_blogs/software-development8.png" alt=""/>
      <H3>Rising fields in CSE that are hitting the computer industry</H3>
      <pre>{`   • Cyber Security
    • AI/ML
    • NLP
    • IOT
    • Big Data Analytics
    • Blockchain
    • Web Developer ( REACT, Python & Django, Node JS, Javascript, MERN, Angular)
    • Mobile Application Developer ( Android Studio, Flutter )
      `}</pre>
      <H4>Jobs in CSE</H4>
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
          <td>Programmer</td>
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
          <td>Software Developer</td>
        </tr>
        <tr>
          <td>6</td>
          <td>MHRD</td>
          <td>IT Manager</td>
        </tr>
        <tr>
          <td>7</td>
          <td>PNB, SBI</td>
          <td>Specialist Officer</td>
        </tr>
        <tr>
          <td>8</td>
          <td>National Banks</td>
          <td>Specialist Officer</td>
        </tr>
        <tr>
          <td>9</td>
          <td>RPSC</td>
          <td>Programmer</td>
        </tr>
        <tr>
          <td>10</td>
          <td>CDAC</td>
          <td>Developer</td>
        </tr>
        <tr>
          <td>11</td>
          <td>Govt Organisation</td>
          <td>Programmer</td>
        </tr>
        <tr>
          <td>12</td>
          <td>AICTE</td>
          <td>Technical Support</td>
        </tr>
      </table>
      <H3>Jobs in Private Companies</H3>
      <p>Here we have listed out 15 of the top computer science companies which are highly recommended for you to work 2021 and 2022 as well. <br/>
        Amazon, Deloitte, CGI, Mindtree, Infosys, Cognizant, TCS, HCL, Google, Wipro, Tech Mahindra, IBM, Microsoft, Mphasis, and HP Inc. So, these are 15 of the top technology service companies which are ideal for computer science graduates to begin their career in.</p>
      <H3>Jobs in PSU’s ( Through GATE / Direct Recruitment)</H3>
      <p>BHEL, IOCL, NFL, NLC, ONGC, ECIL etc.</p>
      <H3>Other Opportunities</H3>
      <p>KVS, Indian Railways (Section Engineer, Jr. Engineer, Traffic Apprentice, Commercial Apprentice, Goods Guard, Station Master, Banking(Clerk, PO, SO) & SSC, IBPS  many more.</p>
      <H3>Start-Up Schemes for Engineers</H3>
      <p>Startups are ideal for computer science graduates. Most of the startups are technology driven, and a computer science graduate will understand it better. In fact, a computer science graduate is likely to make their start ideas successful than non-technical persons. The following is the list of the top 10 business startup ideas for computer science graduates.</p>
      <H4>Notable Startup in CSE</H4>
      <ul>
        <li>Digital Application Designing</li>
        <li>Mobile App Development</li>
        <li>Software Development</li>
        <li>Publishing Business</li>
        <li>Online Recruitment Testing Service</li>
        <li>Digital Marketing Service</li>
        <li>Customized Desktop Computers</li>
        <li>Games Development</li>
        <li>Publishing Business</li>
      </ul>
    </Cont>
  );
}

export function About() {
  return (
    <Cont>
      <PageHead>Computer Science & Engineering</PageHead>
      <p>Computer Science Engineering (CSE) encompasses a variety of topics that relates to computation, like analysis
        of algorithms, programming languages, program design, software, and computer hardware.</p>
      <p>Computer Science Engineering uses principles from Computer Science and Electrical Engineering to create
        hardware (physical components) and firmware which are used in a wide range of areas: consumer electronics,
        medical devices, communication systems, aircraft, self-driving cars, etc.</p>
      <p>Computer Science Engineering students learn how to develop, prototype, and test microchips, circuits,
        processors, conductors and any other component used in computer devices or systems (e.g. super computers, smart
        phones, laptops, servers, IoT gadgets). They also develop firmware, an essential type of software that allows
        operating systems and applications to take full advantage of the hardware.</p>
      <p>Today we are speeding up towards the computerization and modernization in our entire social, professional,
        occupational, defense and many other activities. Computer is now an essential part of our life and needs. It is
        mainly because of the error free and fast operation, and no need to keep hard store and transport the data.
        “Your time is in your one click”.</p>
      <img src="https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/departments%2Fcomputer%2FABOUT%20CSE%2F1.jpg?alt=media&token=3ec1201b-364f-40b7-b1d2-d5f190fd5498" alt="img"/>
      <H4>About The Department</H4>
      <p>The CSE Department of MITRC was started in the year 2007 with an intake of 30 students. Currently the
        Department offers an under-graduate program (B. Tech) in Computer science and engineering with an intake of 180
        students and post graduate program (M. Tech) in computer science and engineering with an intake of 18. The
        department has highly qualified faculty members with minimum M. Tech qualification in Computer science and
        engineering, Computer Technology and Software Engineering. Department of CSE is committed to impart Technical
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
          "Empowered with IBM Software Center of Excellence",
          "Microsoft Ed - Vantage Platinum Campus",
          "Capegemini Certification Partner",
          "Internet facility, Departmental library facility and classrooms equipped with smart boards and projectors",
          "Apart from active participation in various extracurricular activities, students also work on live projects from industry and various professional bodies like DST, IE and AICTE etc.",
          "Membership of CSI, ISTE, DELNET, Institute of Engineer.",
        ].map(f => <li key={f}>{f}</li>)}
      </ul>
      <H4>Career in CSE</H4>
      <p>Computer science job opportunities vary depending on the degree. Graduates with associate degrees often pursue
        roles as computer support specialists or web developers. Bachelor’s degrees open doors to many more computer
        science careers in software development, database administration, and computer programming.</p>
      <p>Employers typically expect computer and information research scientists to hold master’s degrees at minimum.
        Since its inception during the Industrial Revolution, computer science has become essential to everyday life and
        changed nearly every part of society: Cyber security experts protect companies from foreign and domestic
        interference, while everyday people stream movies and connect with video conferencing technology.</p>
      <H4>Job Profile</H4>
      <p>For the Computer science engineering many profile are such as Application Analyst, Business Intelligence
        Analyst, Computer Programmer, Data Architect, Database Manager, Data Warehouse Developer, Graphic Designer,
        Information Security Analyst, IT Manager, Mobile App Developer, Network Security Engineer, Programmer Analyst,
        Software Developer, Telecommunications Manager, Web Developer, Data Scientist, Data Engineer, Full Stack
        Developer, and Technical Content Engineer etc.</p>
      <H4>Start-Up Schemes for Engineers</H4>
      <p>Startups are ideal for computer science graduates. Most of the startups are technology driven, and a computer
        science graduate will understand it better. In fact, a computer science graduate is likely to make their start
        ideas successful than non-technical persons. The following is the list of the top 10 business startup ideas for
        computer science graduates.</p>
    </Cont>
  );
}

export function VM() {
  return (
    <Cont>
      <PageHead>Vision and Mission</PageHead>
      <p>The Vision and Mission of the Department of Computer Science and Engineering at MITRC are as follows.</p>
      <H4>Vision</H4>
      <p>To create competent software professionals and leaders for serving society and world at large through
        excellence in academics, research, development and innovations.</p>
      <H4>Mission</H4>
      <ul>
        <li>Provide strong theoretical and practical computer based skills to meet the global technological changes.
        </li>
        <li>Provide a learning environment to enhance complex problem solving skills, research based projects/activities
          and innovation.
        </li>
        <li>Establish Industry Institute Interaction Program to enhance the entrepreneurship skills, leadership
          qualities, team-spirit and ethical responsibilities.
        </li>
        <li>Prepare students for lifelong learning through sustainable development.</li>
      </ul>
    </Cont>
  );
}

export function Infra() {
  const [labImages, setLabImages] = React.useState([]);
  React.useEffect(() => {
    getImagesLab(Collections.departments.computer).then((imageList) => {
      setLabImages(imageList);
    });
  }, []);

  return (
    <Cont>
      <PageHead>Infrastructure</PageHead>
      <p>MITRC CSE Department have following infrastructure.</p>
      <ul>
        <li><strong>Class Rooms: </strong> 10 (Each having Area 900 Square meter)</li>
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
        {labImages.map(item => (
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
        <li>Minakshi Sain got 12 lakh per annumn package in MSTC Ltd. –Mini-Ratna Company at Kolkata.</li>
        <li>Akansha Gupta (2014-2018) got Gold Medal for first position in RTU KOTA for best Academic performance.</li>
        <li>Tanya Sharma ( 2010-2016) got Xth position in RTU Merit List.</li>
        <li>4 students qualified GATE 2020 Exam.</li>
        <li>Manish Gupta got AIR 498 in GATE 2019 & got selected as Research Scholar in IIT Guwahati.</li>
        <li>4 Teams named as Panda Coders ( Gargi Gupta),Dynamic Dudes( Pratiksha Goyal),Coder Vibes(Shailina Jain),Tech
          Player(Kriti Kaushik) got selected in SIH 2019 Grand Finale for Software Edition. Teams solved the problem of
          ISRO,Mind Tree, SSEPL, AICTE.
        </li>
        <li>4 Teams named as Panda Coders ( Gargi Gupta),Dynamic Dudes( Shailina Jain), Transworkers(Kartik Jain),Tech
          Player(Kriti Kaushik) got selected in SIH 2020 Grand Finale for Software Edition. Teams solved the problem of
          ISRO, Uttarakhand Government, Tripura Institute & Govt. of Bihar.
        </li>
        <li>Team Heart Vibes(Sanchit Mangal) got selected in National Convention of Chaatra Vishwakarma Award 2019 held
          at AICTE HQ.
        </li>
        <li>3 Teams selected for Regional Convention of CVA 2019 at Jagan Institute of Mgmt,Delhi.</li>
        <li>One Team Selected for Toycathon in Digital Toy Category.</li>
        <li>One Team selected for Manthan 2021 organised by BPRD & AICTE for idea” Automatic Monitoring of Chain
          Snatching & Knife Attack using CCTV Footage with timestamp & location.
        </li>
        <li>One Team selected for Samadhan –Fight with Covid 19 in 2020.</li>
        <li>Sanchit Mangal team got 2nd position in Codethon organized by Govt. Engg. College Ajmer</li>
        <li>The placement records of the department are excellent. The students are placed in highly renowned companies
          namely Infosys, IBM, TCS, Cognizant, Wipro,Naggaro,MSTC,Government Bodies, Paytm, BEL and several other
          Government/PSUs & IT companies.
        </li>
        <li>Many students have been Certified in various FOSS Courses (IIT, Bombay) under Spoken Tutorial Training
          Program and in Swayam/NPTEL Courses
        </li>
      </ul>
      <div className="grid">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/departments%2Fcomputer%2FSTUDENT%20ACHIEVEMENTS%2F1.jpg?alt=media&token=ecf482af-dcb7-4bc8-8bad-c2eb02ca8614"
          alt=""/>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/departments%2Fcomputer%2FSTUDENT%20ACHIEVEMENTS%2F2.jpg?alt=media&token=fb2a49f3-f741-487a-aa38-c807cc2fd1e3"
          alt=""/>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/departments%2Fcomputer%2FSTUDENT%20ACHIEVEMENTS%2F3.jpg?alt=media&token=4d7cb692-e314-4073-8acd-8aa835afe00f"
          alt=""/>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/departments%2Fcomputer%2FSTUDENT%20ACHIEVEMENTS%2F4.jpg?alt=media&token=6bf88dbf-ff26-46fa-8773-21faabb389a3"
          alt=""/>
      </div>
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
      <p><strong>Mr. Arvind Sharma</strong></p>
      <p>
        Block A, MITRC College, 6<sup>th</sup> Mile Stone, village Jharkhera, Delhi Tijara Highway , Alwar - 301028
      </p>
      <p><strong>Contact Number :</strong> 0144-2980851/52, 9828273227</p>
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
    • BEL,Ghaziabad
    • CRL,Ghaziabad
    • ARIES
    • Parle G
    • Saras Dairy & many more 
      `}</pre>
      <div className="grid">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/departments%2Fcomputer%2FVISITS%2F1.jpg?alt=media&token=c418306c-4922-42e7-8998-351a5ee3e109"
          alt=""/>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/departments%2Fcomputer%2FVISITS%2F2.jpg?alt=media&token=984207bf-8302-46c7-9d85-5fa7a5b5e1ab"
          alt=""/>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/departments%2Fcomputer%2FVISITS%2F3.jpg?alt=media&token=1d33b1fd-c1c3-4632-8340-d7e80f5cbb9c"
          alt=""/>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/departments%2Fcomputer%2FVISITS%2F4.jpg?alt=media&token=ab2ef6c6-87d0-4671-8ae1-4b8bf3b222e8"
          alt=""/>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/departments%2Fcomputer%2FVISITS%2F5.jpg?alt=media&token=2782bb11-5d04-4f42-924b-edc31dd7074b"
          alt=""/>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/departments%2Fcomputer%2FVISITS%2F7.jpg?alt=media&token=949c52a9-c0a3-4388-ba90-1914d6367d8c"
          alt=""/>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/departments%2Fcomputer%2FVISITS%2F8.jpg?alt=media&token=64167ce6-ccbf-4f7a-9e1f-2d2adba5af65"
          alt=""/>
      </div>
    </Cont>
  );
}

export function Testimonials() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [data2, setData2] = useState([]);
  const [loading2, setLoading2] = useState(true);

  useEffect(() => {
    (async () => {
      setLoading(true);
      setData(await listDocuments('departmentsData', 'departmentTestimonials', queryConfig))
      setLoading(false);
    })();
    (async () => {
      setLoading2(true);
      setData2(await listDocuments('departmentsData', 'departmentStories', queryConfig))
      setLoading2(false);
    })();
  }, []);

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
        {data.map(item => (
          <img key={item.photo} src={item.photo} alt="" onLoad={e => e.target.classList.add('loaded')}/>
        ))}
      </div>
      <div className="loader">
        {loading && <CircularProgress size={30} />}
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
        {data2.map(item => (
          <img key={item.photo} src={item.photo} alt="" onLoad={e => e.target.classList.add('loaded')}/>
        ))}
      </div>
      <div className="loader">
        {loading2 && <CircularProgress size={30} />}
      </div>
    </Cont>
  );
}

const yrs = ["2021-2022", "2020-2021", "2019-2020"];
export function Activities() {
  const [active, setActive] = useState(null);
  const [current, setCurrent] = useState(null);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      if (!current) return;
      setData([]);
      setLoading(true);
      const res = await listDocuments('departmentsData', 'departmentActivities', queryConfig);
      // setData(res.concat(AData[current] ?? []));
      setData(res);
      setLoading(false);
    })();
  }, [current]);

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
      {current && (
        <>
          <H4>Activities Session {current}</H4>
          <div className="loader">
            {loading && <CircularProgress size={30} />}
          </div>
          {data.map((item, i) => (
            <Event
              key={i}
              onClick={() => setActive(p => p === i ? null : i)}
              full={i === active}
            >
              <div className="title">{item.title}</div>
              <div className="text">{item.description}</div>
              <div className="foot">
                <div className="date">{item.date}</div>
                <div className="inst">Click to read more <span>&gt;&gt;</span></div>
              </div>
            </Event>
          ))}
        </>
      )}
    </Cont>
  );
}
