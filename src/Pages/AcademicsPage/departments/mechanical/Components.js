import React, {useState} from "react";
import {getImagesLab} from "../../../../utils/firebase/department";
import {Collections} from "../../../../utils/firebase/storage";
import {Cont, Event, H3, H4, H5, PageHead} from "../../../../components/styledComponents/New";
import {Link} from "react-router-dom";
import {ActData} from "../../../CampusLifePage/ClubAndActivities/data";
import {AData} from "./data";

const Labs =[
  "Mechanical Workshop",
  "Thermal Engineering Lab",
  "Thermal Engineering Lab",
  "Basic Mechanical Engineering Lab",
  "Turbo Lab",
  "Auto Cad Lab",
  "Machine Drawing Lab",
  "Production Engineering Lab",
  "Heat Transfer Lab",
  "Vibration Lab",
  "Automobile Engineering Lab",
  "Fluid Machinery Lab",
  "Dynamics of Machines Lab",
];

export function Home() {
  return (
    <Cont>
      <PageHead>Mechanical Engineering</PageHead>
      <p>Mechanical Engineering is the scientific approach along with its wide range of applications. Mechanical scientists study the feasibility and mechanisation of procedures, known as algorithms, which underlie the acquisition, processing, storage and communication of data.</p>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/departments%2Fmechanical%2Fdepartment%2Fme-1.jpg?alt=media&token=c5032a0d-62c5-4656-b375-492d73a52e2c"
        alt=""/>
      <p>Mechanical Engineering (ME) encompasses a variety of topics that relates to computation, like analysis of algorithms, programming languages, program design, software, and computer hardware.</p>
      <p>Mechanical Engineering uses principles from Computer Science and Electrical Engineering to create hardware (physical components) and firmware which are used in a wide range of areas: consumer electronics, medical devices, communication systems, aircraft, self-driving cars, etc.</p>
      <p>Mechanical Engineering students learn how to develop, prototype, and test microchips, circuits, processors, conductors and any other component used in computer devices or systems (e.g. super computers, smart phones, laptops, servers, IoT gadgets). They also develop firmware, an essential type of software that allows operating systems and applications to take full advantage of the hardware.</p>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/departments%2Fmechanical%2Fdepartment%2Fme-2.jpg?alt=media&token=fc85df23-a21a-48f5-9d3e-235b166bd9cc"
        alt=""/>
      <p>Today we are speeding up towards the computerization and modernization in our entire social, professional, occupational, defense and many other activities. Computer is now an essential part of our life and needs. It is mainly because of the error free and fast operation, and no need to keep hard store and transport the data. “Your time is in your one click”.</p>
      <H4>Career in ME</H4>
      <p>ME job opportunities vary depending on the degree. Graduates with associate degrees often pursue roles as computer support specialists or web developers. Bachelor’s degrees open doors to many more computer science careers in software development, database administration, and computer programming.</p>
      <p>Employers typically expect computer and information research scientists to hold master’s degrees at minimum. Since its inception during the Industrial Revolution, computer science has become essential to everyday life and changed nearly every part of society: Cyber security experts protect companies from foreign and domestic interference, while everyday people stream movies and connect with video conferencing technology</p>
    </Cont>
  );
}

export function About() {
  return (
    <Cont>
      <PageHead>Computer Science & Engineering</PageHead>
      <p>The Mechanical Engineering Department of MITRC has a reputation of being among the finest in the state. It is dedicated towards the advancement of technology and science. The department was established in 2007 with the objective to impart quality education in the core field of Mechanical Engineering.</p>
      <p>Presently the department is running the B. Tech program with an intake of 60 students and M. Tech program in Production Engineering with intakes of 18 students.The aim of the department is to create and disseminate knowledge and to provide service to the society. The department consistently strives to provide world class facilities for education and research. An interactive relationship is maintained, between the students and staff, which enables the students to develop a sound foundation in a conducive environment. This is also reflected in our campus placement which has been growing year after year with our students getting placed in the top industrial houses of the country.</p>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/departments%2Fmechanical%2Fdepartment%2Fme-3.jpg?alt=media&token=375bab5a-9e8b-4819-90c7-6a69634fe6ae"
        alt=""/>
      <p>The department has an excellent industrial interaction and contributes to the industry by offering consultancy services. The department gets updated from time to time with the latest developments and trends in the field. The faculty in Mechanical engineering department is highly qualified, experienced and dedicated.</p>
      <H4>About The Department</H4>
      <p>The ME Department of MITRC was started in the year 2007 with an intake of 30 students. Currently the
        Department offers an under-graduate program (B. Tech) in Computer science and engineering with an intake of 180
        students and post graduate program (M. Tech) in computer science and engineering with an intake of 18. The
        department has highly qualified faculty members with minimum M. Tech qualification in Mechanical
        engineering. Department of ME is committed to impart Technical
        and Research based quality education and to develop innovative skills among the students and to enrich the
        academic activities through continual improvement in the teaching and learning processes. The department also
        focuses on infusing confidence in the minds of students and to develop them as entrepreneurs.</p>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/departments%2Fmechanical%2Fdepartment%2Fme-4.jpg?alt=media&token=a44fda94-02df-4f28-9529-93bab94b17aa"
        alt=""/>
      <p>It develops expertise for consultative activities by providing opportunities for company– institute,
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
      <H4>Career in ME</H4>
      <p>Computer science job opportunities vary depending on the degree. Graduates with associate degrees often pursue
        roles as computer support specialists or web developers. Bachelor’s degrees open doors to many more computer
        science careers in software development, database administration, and computer programming.</p>
      <p>Employers typically expect computer and information research scientists to hold master’s degrees at minimum.
        Since its inception during the Industrial Revolution, computer science has become essential to everyday life and
        changed nearly every part of society: Cyber security experts protect companies from foreign and domestic
        interference, while everyday people stream movies and connect with video conferencing technology.</p>
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
      <p>The Vision and Mission of the Department of Mechanical Engineering at MITRC are as follows.</p>
      <H4>Vision</H4>
      <p>To be recognized as a Centre of excellence in the field of Mechanical Engineering quality education, research, innovation & technical leadership.</p>
      <H4>Mission</H4>
      <ul>
        <li>To educate, prepare and mentor Mechanical Engineering students to excel as professionals.
        </li>
        <li>To develop, Strengthen and expand collaborations with industries and other organizations of repute.
        </li>
        <li>To create an environment that stimulates stack holders to reach their highest potential.
        </li>
        <li>To guide students in acquiring career-oriented jobs in the field of Mechanical Engineering. </li>
      </ul>
    </Cont>
  );
}

export function Infra() {
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
        {[
          "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/departments%2Fmechanical%2Flabs%2FWhatsApp%20Image%202021-10-30%20at%201.15.59%20PM%20(11).jpeg?alt=media&token=f769fb0c-c8f9-4b40-a72e-ac31c21f0664",
          "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/departments%2Fmechanical%2Flabs%2FWhatsApp%20Image%202021-10-30%20at%201.15.59%20PM%20(2).jpeg?alt=media&token=929e735a-5e94-43fe-bc48-5abd2db398e8",
          "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/departments%2Fmechanical%2Flabs%2FWhatsApp%20Image%202021-10-30%20at%201.15.59%20PM%20(4).jpeg?alt=media&token=78eea311-7c13-4f7d-8e3e-2786db673ce5",
          "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/departments%2Fmechanical%2Flabs%2FLAB%2FDSC02032.JPG?alt=media&token=0a903132-86e3-4658-b197-0eed7ea07bd2",
          "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/departments%2Fmechanical%2Flabs%2FLAB%2FDSC02035.JPG?alt=media&token=a9148ff5-3665-4560-be3e-63add351917d",
          "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/departments%2Fmechanical%2Flabs%2FLAB%2FDSC02036.JPG?alt=media&token=3eedfef9-1ced-4008-baf8-727fb6661966",
          "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/departments%2Fmechanical%2Flabs%2FLAB%2FDSC02038.JPG?alt=media&token=6ecfc0b6-163d-4ef7-960e-032bd9a72235",
          "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/departments%2Fmechanical%2Flabs%2FLAB%2FDSC02040.JPG?alt=media&token=f195834c-3715-49df-ab30-097fd264d16e",
          "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/departments%2Fmechanical%2Flabs%2FLAB%2FDSC02042.JPG?alt=media&token=bcacb072-d3ec-481a-973e-a4cec43b0f6c",
          "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/departments%2Fmechanical%2Flabs%2FLAB%2FDSC02046.JPG?alt=media&token=116793d3-a861-45b7-aee9-9e5819d8ba63",
          "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/departments%2Fmechanical%2Flabs%2FLAB%2FDSC02048.JPG?alt=media&token=fe7fd3d8-1411-468e-a8bf-f29248b17cb5"
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
      <div className="grid">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/departments%2Fmechanical%2Fplacements%2F267664479_4663994897014295_5986047476074280976_n.jpg?alt=media&token=7b8948c7-1d85-4f17-8a94-75181900e326"
          alt=""/>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/departments%2Fmechanical%2Fplacements%2F121492493_3426927100721087_7032233191031659773_n.jpg?alt=media&token=c49819b5-04a5-4604-ac6d-1cb45cd1428c"
          alt=""/>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/departments%2Fmechanical%2Fplacements%2F267664479_4663994897014295_5986047476074280976_n.jpg?alt=media&token=7b8948c7-1d85-4f17-8a94-75181900e326"
          alt=""/>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/departments%2Fmechanical%2Fplacements%2F60800275_2258345044245971_6436667079046201344_n.jpg?alt=media&token=b465567c-12ce-471f-b68b-9b7c08177d4c"
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
      <H4>HOD</H4>
      <p><strong>Mr. Mukesh Kumar</strong></p>
      <p><strong>Email :</strong> hodme@mitrc.ac.in</p>
      <p><strong>Extension :</strong> 257</p>

      <H4>Deputy HOD</H4>
      <p><strong>Mr. Kalyan Singh</strong></p>
      <p><strong>Email :</strong> kalyan_me@mitrc.ac.in</p>
      <p><strong>Extension :</strong> 251</p>

      <H4>M. Tech. Coordinator</H4>
      <p><strong>Mr. Surendra Kumar</strong></p>
      <p><strong>Email :</strong> surendra_me@mitrc.ac.in</p>
      <p><strong>Extension :</strong> 259</p>
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
  return (
    <Cont>
      <PageHead>Testimonials</PageHead>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/departments%2Fmechanical%2Ftestimonials%2F110174885_3170667203013746_9030661624025140017_n.jpg?alt=media&token=0788ce66-4c07-454b-becb-77365f8581ec"
        alt=""/>
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
