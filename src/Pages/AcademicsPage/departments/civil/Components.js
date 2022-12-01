import React, {useEffect, useState} from "react";
import {getImagesLab} from "../../../../utils/firebase/department";
import {Collections} from "../../../../utils/firebase/storage";
import {Cont, Event, H3, H4, H5, PageHead} from "../../../../components/styledComponents/New";
import {Link} from "react-router-dom";
import {AData} from "./data";
import {listDocuments, listLabs} from "../../../../utils/firebase/db";
import {CircularProgress} from "@mui/material";
import { LabCard } from "../Components";

const Labs = [
  "Hydraulic Engineering Lab",
  "Geo Technical Engineering Lab",
  "Structural Lab",
  "Geology Lab",
  "Turbo Lab",
  "Surveying Lab",
  "Auto Cad Lab",
  "Building Drawing Lab",
  "Concrete Technology Lab",
  "RMT Lab Environmental Lab",
  "Water Resource Engineering Lab",
  "Estimating & Costing Lab",
  "Civil Engineering & Material Lab"
];

const queryConfig = {queries: [{name: "department", operator: "==", value: "CE"}]}

const getQueryConfig = session => {
  const arr = [];
  if (session) arr.push({name: "session", operator: "==", value: session})
  return { queries: [{name: "department", operator: "==", value: "CE"}, ...arr] };
};

export function Home() {
  return (
    <Cont>
      <PageHead>Civil Engineering</PageHead>
      <p>Civil engineering is arguably the oldest engineering discipline. It deals with the built environment and can be
        dated to the first time someone placed a roof over his or her head or laid a tree trunk across a river to make
        it easier to get across.</p>
      <p>Engineering branches such as Mechanical Engineering and Electrical engineering have originated from military
        engineering and become independent fields. At the same time, CE remains the All the other branches such as
        Mechanical Engineering and Electrical engineering have originated from military engineering and become separate
        fields. In contrast, CE remains the same. </p>
      <p>The built environment encompasses much of what defines modern civilization. Buildings and bridges are often the
        first constructions that come to mind, as they are the most conspicuous creations of structural engineering, one
        of civil engineering's major sub-disciplines. Roads, railroads, subway systems, and airports are designed by
        transportation engineers, another category of civil engineering. And then there are the less visible creations
        of civil engineers. Every time you open a water faucet, you expect water to come out, without thinking that
        civil engineers made it possible. </p>
      <p>Similarly, not many people seem to worry about what happens to the water after it has served its purposes. The
        old civil engineering discipline of sanitary engineering has evolved into modern environmental engineering of
        such significance that most academic departments have changed their names to civil and environmental
        engineering.</p>
      <p>These few examples illustrate that civil engineers do a lot more than design buildings and bridges. They can be
        found in the aerospace industry, designing jetliners and space stations; in the automotive industry, perfecting
        the load-carrying capacity of a chassis and improving the crashworthiness of bumpers and doors; and they can be
        found in the ship building industry, the power industry, and many other industries wherever constructed
        facilities are involved. And they plan and oversee the construction of these facilities as construction
        managers.</p>
      <H4>Career in CE</H4>
      <p>Civil engineering, the most demanding and very much lucrative career option. We have tried to answer most of
        the questions to choose civil engineering as a career option. Find all the information you want to know about
        civil engineering to decide on opting for civil engineering as a career option.</p>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/departments%2Fee%2FScreenshot%20from%202022-02-09%2022-13-00.png?alt=media&token=ac7a9053-2634-499e-ad33-9b56249c8961"
        alt=""/>
      <H5>Top Jobs for CE Engineer</H5>
      <ul>
        {[
          "Construction manager.",
          "Geotechnical engineer.",
          "Environmental engineer",
          "Public Health engineer",
          "Transportation engineer",
          "Urban planning engineer",
        ].map(f => <li key={f}>{f}</li>)}
      </ul>
      <H4>Jobs in CE</H4>
      <H3>Jobs in Government Organisation / Government Undertaking Bodies</H3>
      <pre>{`       • Airports.
    • Tunnels and bridges.
    • Fire stations.
    • Mining.
    • Ports and harbors.
    • Drainage and flood barriers.
    • Railways.
      `}</pre>
      <H3>Jobs in Private Companies</H3>
      <ul>
        <li>Afcons Infrastructure Limited</li>
        <li>Punj Lloyd</li>
        <li>Newton Engineering & Chemicals Ltd</li>
        <li>Consolidated Construction Consortium Ltd (CCCL)</li>
        <li>Akme Projects Ltd</li>
        <li>Anant Raj Industries Limited</li>
        <li>B Seenaiah & Company (Projects) Ltd (BSCPL)</li>
        <li>BGR Energy Systems Ltd.</li>
        <li>L&T</li>
      </ul>
      <H3>Jobs in PSU’s ( Through GATE / Direct Recruitment)</H3>
      <p>BHEL, IOCL, NFL, NLC, ONGC, ECIL etc.</p>
      <H3>Other Opportunities</H3>
      <p>KVS, Indian Railways (Section Engineer, Jr. Engineer, Traffic Apprentice, Commercial Apprentice, Goods Guard,
        Station Master, Banking(Clerk, PO, SO) & SSC, IBPS many more.</p>
    </Cont>
  );
}

export function About() {
  return (
    <Cont>
      <PageHead>Civil Engineering</PageHead>
      <p>Due to extraordinary growth in the infrastructure development in India and abroad, demand of skilled civil
        engineers is growing with high pace. To meet the growing demand of construction industries, our institute
        started B. Tech. course in civil engineering from the academic session 2011-12.</p>
      <p>All laboratories of the department are having latest technological instruments as per requirement of curriculum
        and also for research purpose. Civil Engineering Department also provides consultancy services on various
        technical issues to the society and government departments. The department is supported by a team of faculty
        members having excellent research credentials as well as extensive industrial experience.</p>
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
      <H4>Career in CE</H4>
      <p>Civil Engineering job opportunities vary depending on the degree. Graduates with associate degrees often pursue
        roles as support specialists. Bachelor’s degrees open doors to many more civil
        science careers in various fields.</p>
      <p>Employers typically expect civil engineer scientists to hold master’s degrees at minimum.
        Since its inception during the Industrial Revolution, civil has become essential to everyday life and
        changed nearly every part of society: Cyber security experts protect companies from foreign and domestic
        interference, while everyday people stream movies and connect with video conferencing technology.</p>
      <H4>Start-Up Schemes for Engineers</H4>
      <p>Startups are ideal for civil engineers. Most of the startups are technology driven, and a civil engineer
        graduate will understand it better. In fact, a civil engineer graduate is likely to make their start
        ideas successful than non-technical persons. The following is the list of the top 10 business startup ideas for
        civil engineering graduates.</p>
    </Cont>
  );
}

export function VM() {
  return (
    <Cont>
      <PageHead>Vision and Mission</PageHead>
      <p>The Vision and Mission of the Department of Civil Engineering at MITRC are as follows.</p>
      <H4>Vision</H4>
      <p>To disseminate technical knowledge along with practical exposure and integrity in the field of Civil
        Engineering & Technology to create conceptually strong team of graduates at global standards to accept new
        challenges. </p>
      <H4>Mission</H4>
      <ul>
        <li>To impart knowledge and quality with emphasis on research and other skill development for industry &
          Society..
        </li>
        <li>To create hub of excellence in emerging areas of research including moral & Ethical values.
        </li>
        <li>To motivate students to pursue higher education and take part in competitive exams & other career enhancing
          courses.
        </li>
        <li>To provide quality education, research, public service & consultancy for industrial and societal needs.</li>
      </ul>
    </Cont>
  );
}

export function Infra() {
  const [labImages, setLabImages] = React.useState([]);
  const [labs, setLabs] = React.useState([]);
  React.useEffect(async() => {
    getImagesLab(Collections.departments.civil).then((imageList) => {
      setLabImages(imageList);
    });
    const labsData = await listLabs();
    const temp = []
    labsData.map(lab => {
      if(lab.Department == "civil") {
        temp.push(lab)
      }
    })
    setLabs(temp)
  }, []);

  return (
    <Cont>
      <PageHead>Infrastructure</PageHead>
      <p>MITRC CE Department have following infrastructure.</p>
      <ul>
        <li><strong>Class Rooms: </strong> 9 (Each having Area 900 Square meter)</li>
        <li><strong>Total Labs: </strong> 1</li>
        <li><strong>Internet Facility: </strong> Yes (300 MBPS)</li>
        <li><strong>Projector: </strong> Yes</li>
        <li><strong>Audio System: </strong> Yes</li>
        <li><strong>Wi-Fi: </strong> Yes</li>
        <li><strong>Power Supply: </strong> Each Lab is running on UPS of 10KVA.</li>
        <li><strong>Seminar Hall: </strong> Yes</li>
        <li><strong>Seminar Hall: </strong> 1 (Each having Area 900 Square meter)</li>
        <li><strong>DG SET Available of 320 KVA</strong></li>
        <li><strong>Open Library with DELNET.</strong></li>
      </ul>
      <H4>CE Labs at MITRC</H4>
      <ul>
        {Labs.map(f => <li key={f}>{f}</li>)}
      </ul>
      <div className="grid">
        {/* {labImages.map(item => (
          <img key={item} src={item} alt={item} onLoad={e => e.target.classList.add('loaded')}/>
        ))} */}
        {
          labs.map(lab => <LabCard lab={lab} />)
        }
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
        <li>Alumni of the department have been placed at reputed Government positions e.g., RPSC (AEN), Banking Sector,
          SSC-JE, Defense Services, PSUs, etc.
        </li>
        <li>Students have been placed in reputed companies e.g. HG Infra, BYSU’s, RTech, Kalpatru etc.</li>
        <li>Students Qualified GATE with good Score and Selected IIT’s & NIT’s for Masters.</li>
      </ul>
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
      <p><strong>Mr. Naresh Aggarwal</strong></p>
      <p>
        CE Block, MITRC College, 6<sup>th</sup> Mile Stone, village Jharkhera, Delhi Tijara Highway , Alwar - 301028
      </p>
      <p><strong>Contact Number :</strong> 0144-2980851/52, 9352202216</p>
      <p><strong>Extension :</strong> 204</p>
    </Cont>
  );
}

export function Teaching() {
  return (
    <Cont>
      <PageHead>Teaching & Learning Process</PageHead>
      <p>In the department of Civil Engineering, MITRC Alwar, we define Teaching & Learning as
        follows.</p>
      <p>Teaching and learning process can be defined as a transformation process of knowledge from teachers to
        students. It is referred as the combination of various elements within the process where an educator identifies
        and establish the learning objectives and develop teaching resources and implement the teaching and learning
        strategy. On the other hand, learning is a cardinal factor that a teacher must consider while teaching students.
        The paper evaluated various academic journals, pedagogy, and inclusive practices to assess the teaching
        effectiveness within the higher education setting. The objective of the research is to assess the teaching
        effectiveness in a higher education setting.</p>
      <p>Many of innovative initiatives taken by faculty and staff members of Department of Civil
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
      <pre>{`    • BALA QUILA
    • SURVEY CAMP
    • ARIES
    • Parle G
    • Saras Dairy & many more 
      `}</pre>
      <div className="grid">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/departments%2Fcivil%2FVISIT%2F4.JPG?alt=media&token=5071b12d-e1c8-4a8c-9a32-c2faa9112e91"
          alt=""/>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/departments%2Fcivil%2FVISIT%2FWhatsApp%20Image%202019-01-11%20at%2011.41.18%20AM.jpeg?alt=media&token=927bc1f8-a1dc-4137-807c-227d3ed9e292"
          alt=""/>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/departments%2Fcivil%2FVISIT%2Fsurvey%2FIMG_20200207_105030.jpg?alt=media&token=4f51b585-488e-486f-b41b-6b5c25ca404f"
          alt=""/>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/departments%2Fcivil%2FVISIT%2Fsurvey%2FIMG_20200207_105030.jpg?alt=media&token=4f51b585-488e-486f-b41b-6b5c25ca404f"
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
          src="https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/departments%2Fcivil%2Ftestimonial%2F61654122_2276966702383805_1151582561437220864_n.jpg?alt=media&token=b8170051-3614-4e7d-a3ce-d64776ddd441"
          alt=""/>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/departments%2Fcivil%2Ftestimonial%2F61986376_2276966892383786_4584311370056466432_n.jpg?alt=media&token=2fda1090-5eb4-4a50-b97d-6dafcbd57807"
          alt=""/>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/departments%2Fcivil%2Ftestimonial%2F60913990_2265145676899241_2827174948580098048_n.jpg?alt=media&token=5b1b9fdc-2a50-441b-9c79-e5caed41c681"
          alt=""/>
        {data.map(item => (
          <img key={item.photo} src={item.photo} alt="" onLoad={e => e.target.classList.add('loaded')}/>
        ))}
      </div>
      <div className="loader">
        {loading && <CircularProgress size={30}/>}
      </div>
      <br/>
      {loading2 && <PageHead>Success Stories</PageHead>}
      {!loading2 && data2.length > 0 && (
        <>
          <PageHead>Success Stories</PageHead>
          <div className="grid">
            {data2.map(item => (
              <img key={item.photo} src={item.photo} alt="" onLoad={e => e.target.classList.add('loaded')}/>
            ))}
          </div>
        </>
      )}
      <div className="loader">
        {loading2 && <CircularProgress size={30}/>}
      </div>
    </Cont>
  );
}

const yrs = ["2022-2023","2021-2022", "2020-2021", "2019-2020"];

export function Activities() {
  const [active, setActive] = useState(null);
  const [current, setCurrent] = useState(null);
  const [show,setShow] = useState(false);
  const [hide,setHide] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const onclickhide = ()=>setHide(true);
  const onClick = () => setShow(true)
  
  useEffect(() => {
    (async () => {
      if (!current) return;
      setData([]);
      setLoading(true);
      const res = await listDocuments('departmentsData', 'departmentActivities', getQueryConfig(current));
      setData(res);
      // setData(res.concat(AData[current] ?? []));
      setLoading(false);
    })();
  }, [current]);

  return (
    <Cont>
      <PageHead>Activities</PageHead>
      <p>
        MITRC CE Department carried out various activities for students & teachers for developing their personal,
        technical and social skills.
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
            {loading && <CircularProgress size={30}/>}
          </div>
          {data.map((item, i) => (
            <Event
              key={i}
              onClick={() => setActive(p => p === i ? null : i)}
              full={i === active}
            >
             <div className="title">{item.title}</div>
              <div className="text">{item.description}</div>
              <div className="date">{item.date.toDate().toDateString()}</div>
              <div className="" onClick={onclickhide}>
                <div className="" onClick={onClick}>{hide ? <> </>: <p>Click to read more </p> } {
                    show?  <> 
                    {item.photos.map(p => <img src={p} alt="" className="w-30 h-30" />)}</> : <> </>
                  }<span>
                  </span></div>
              </div>
            </Event>
          ))}
        </>
      )}
    </Cont>
  );
}
