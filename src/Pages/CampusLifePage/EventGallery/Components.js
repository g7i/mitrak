import {
  Cont,
  H3,
  H4,
  H5,
  PageHead,
  UL,
} from "../../../components/styledComponents/New";

export function IAF() {
  return (
    <Cont>
      <PageHead>IAF-IPEV Exhibition by DISHA Cell(Indian Airforce)</PageHead>
      <p>
        Indian Air Force conducts Induction Publicity programmes in different
        parts of the country through ‘DISHA’, Air HQ to spread career and
        induction related information for Officers’ cadre in the IAF. In
        continuation of the efforts towards induction of officers in the IAF,
        DISHA has developed an Induction Publicity Exhibition Vehicle (IPEV)
        with a Flight simulator and other gadgets aimed at motivating the target
        group towards opting for IAF as a career.
      </p>
      <p>
        IAF has planned a Student Interaction Road Drive at MITRC Campus to
        cover various educational institutions/schools in the district of Alwar.
        The aim of the drive is to showcase various facets of the IAF to
        aspirants and to provide guidance on career opportunities in the IAF to
        students towards selecting the best in the country.
      </p>
      <p>
        The drive will provide a great opportunity to interact with the students
        of reputed educational institutes to enlighten them about career in IAF
        as a composite package with life full of professional challenge and a
        high degree of job satisfaction where the quality of life is unmatched
        in terms of its traditional ethos.
      </p>
      <p>
        The drive is an effort by the IAF to benefit large cross section of
        capable and interested students to be part of the IAF which is ‘A Cut
        Above’.
      </p>
      <ul>
        <li>Date of Visit : 24-25 July 2019</li>
        <li>Total students visited : 3000+</li>
        <li>
          Features: Career Guidance in Indian Air Force, Bus equipped with
          latest model of aircrafts, fighter planes, 3D simulator.
        </li>
        <li>
          Who were the beneficiaries ? : Schools & College students of 12th &
          Graduation Pursuing.
        </li>
      </ul>

      <div className="grid three">
        {[
          "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FEVENTS%2FIAF%20IPEV%20BUS%2F1.jpg?alt=media&token=8c9aa3e2-d2ba-4046-9f53-d73ed09f674d",

          "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FEVENTS%2FIAF%20IPEV%20BUS%2F10.jpg?alt=media&token=4b100629-10ef-4ab7-8b95-62f80e608bd7",

          "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FEVENTS%2FIAF%20IPEV%20BUS%2F11.jpg?alt=media&token=65e67e71-082c-4d31-ad6c-4a534a2cb824",

          "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FEVENTS%2FIAF%20IPEV%20BUS%2F12.jpg?alt=media&token=ebe74cd0-27a2-4d64-ab26-c4ed97b101b3",

          "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FEVENTS%2FIAF%20IPEV%20BUS%2F13.jpg?alt=media&token=72a65e04-ef79-4663-9502-febb7152ba6b",

          "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FEVENTS%2FIAF%20IPEV%20BUS%2F2.jpg?alt=media&token=ec60ef73-a265-4011-8b59-a4bf07349279",

          "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FEVENTS%2FIAF%20IPEV%20BUS%2F3.jpg?alt=media&token=d91abb5a-1ad5-43f6-8f5c-64b326c77761",

          "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FEVENTS%2FIAF%20IPEV%20BUS%2F4.jpg?alt=media&token=76607087-ad85-4214-82b0-5223ef8faef0",

          "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FEVENTS%2FIAF%20IPEV%20BUS%2F5.jpg?alt=media&token=a6488a9e-f04b-45d4-b2ac-062c09d7999a",

          "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FEVENTS%2FIAF%20IPEV%20BUS%2F6.jpg?alt=media&token=169ec422-c676-4833-bc9e-cf5d1f8424c0",

          "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FEVENTS%2FIAF%20IPEV%20BUS%2F7.jpg?alt=media&token=283e91f1-b908-4113-9cdc-1df9924895c9",

          "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FEVENTS%2FIAF%20IPEV%20BUS%2F8.jpg?alt=media&token=a4c19d19-6084-4f23-bf97-ee51c4d14ff7",

          "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FEVENTS%2FIAF%20IPEV%20BUS%2F9.jpg?alt=media&token=f197b52f-27ba-4924-9bb6-d27776287a8a",

          "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FEVENTS%2FIAF%20IPEV%20BUS%2F13.jpg?alt=media&token=72a65e04-ef79-4663-9502-febb7152ba6b",
        ].map((item) => (
          <img
            key={item}
            src={item}
            alt={item}
            onLoad={(e) => e.target.classList.add("loaded")}
          />
        ))}
      </div>
    </Cont>
  );
}

export function ISRO() {
  return (
    <Cont>
      <PageHead>ISRO – Vikram Sarabhai Space Exhibition</PageHead>
      <p>
        The Department of Space, as the inheritor of the legacy of Dr. Sarabhai,
        the doyen of Indian Space Programme has dedicated its efforts to bring
        the benefits of space technology by developing and deploying satellite
        communications and earth observations systems which can enable and
        assist environment friendly and socially equitable development. India
        has firmly progressed step-by-step in this direction ever since it was
        given a go ahead by the Government of India. Vikram Sarabhai Space
        Exhibition (VSSE) is housed at Ahmedabad, which happens to be the
        hometown of Dr. Sarabhai. This exhibition is an attempt to share with
        the general public about ISRO achievements, hopes and concerns through
        the media of working models, live panels, static displays, the 3D
        theatre and the interactive multimedia presentations.
      </p>
      <p>
        This exhibition held at MITRC College for students of schools and
        college students.
      </p>
      <ul>
        <li>Date of Visit : 6-7 September,2018</li>
        <li>Total students visited : 3000+</li>
        <li>
          Features: 3D TV without spectacles, Augmented Reality, Virtual
          Presenter, GSLV , Animation Models, Quiz Section, Kids Section,
          Interactive BHUVAN, Flight suit
        </li>
        <li>
          Who were the beneficiaries ? : Schools & College students of 12th &
          Graduation Pursuing.
        </li>
      </ul>
      <div className="grid three">
        {[
          "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FEVENTS%2FISRO%20EXHIBITION%2F1.jpg?alt=media&token=b17c20d3-0876-4ad8-b33a-c618113ef03b",

          "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FEVENTS%2FISRO%20EXHIBITION%2F10.jpg?alt=media&token=c270a887-0e53-4e9a-9dce-2ddc4c5d1fb7",

          "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FEVENTS%2FISRO%20EXHIBITION%2F10.jpg?alt=media&token=c270a887-0e53-4e9a-9dce-2ddc4c5d1fb7",

          "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FEVENTS%2FISRO%20EXHIBITION%2F3.jpg?alt=media&token=5a33350c-c1d4-4b5a-8b1b-0bcbf3b5bb77",

          "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FEVENTS%2FISRO%20EXHIBITION%2F4.jpg?alt=media&token=869a76e1-552d-4b9a-b154-43d6fc292a06",

          "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FEVENTS%2FISRO%20EXHIBITION%2F5.jpg?alt=media&token=4869f7ed-aef2-43a7-8866-57f1ae1397cd",

          "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FEVENTS%2FISRO%20EXHIBITION%2F6.jpg?alt=media&token=76222c73-0c55-494e-8cc7-29a0e8138ae0",

          "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FEVENTS%2FISRO%20EXHIBITION%2F7.jpg?alt=media&token=cf8d58b1-e451-46bb-b04b-f1e768acee84",

          "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FEVENTS%2FISRO%20EXHIBITION%2F8.jpg?alt=media&token=8c9e02c8-4dd8-4c15-b47c-f85247972c45",

          "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FEVENTS%2FISRO%20EXHIBITION%2Fphoto.jpg?alt=media&token=3b30f69f-e96b-4ae9-9618-e6df55cd8442",
        ].map((item) => (
          <img
            key={item}
            src={item}
            alt={item}
            onLoad={(e) => e.target.classList.add("loaded")}
          />
        ))}
      </div>
    </Cont>
  );
}

export function MIH() {
  return (
    <Cont>
      <PageHead>MIH 2020 - Internal Hackathon</PageHead>
      <p>
        Smart India Hackathon is a nationwide initiative to provide students a
        platform to solve some of the pressing problems we face in our daily
        lives, and thus inculcate a culture of product innovation and a mindset
        of problem solving. Students have to develop the product or solution for
        given real time problems of society, ministries, state governments,
        industries in 48 hour non -stop coding/work .
      </p>
      <p>
        For selecting teams for SIH 2020 ,MITRC conducted Internal Hackathon
        named as MIH 2020.
      </p>
      <ul>
        <li>
          <strong>Name</strong>: MITRC Internal Hackathon 2020 (Intra College
          Level Hackathon)
        </li>
        <li>
          <strong>Date</strong>: 10-11 January 2020
        </li>
        <li>
          <strong>Total Teams Participated</strong>: 64
        </li>
        <li>
          <strong>Ideas selected for S/W finale</strong>: 13
        </li>
        <li>
          <strong>Ideas selected for H/W finale</strong>: 10
        </li>
      </ul>

      <div className="grid three">
        {[
          "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FNational%20Events%2FMIH%2Fmih-1.jpg?alt=media&token=e3aa3434-5c6e-47e6-ac98-994c47ce70ab",

          "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FNational%20Events%2FMIH%2Fmih-2.jpg?alt=media&token=dd18d5a4-2daa-4330-a18b-df68e456ceef",

          "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FNational%20Events%2FMIH%2Fmih-3.jpg?alt=media&token=4184cd1b-e71a-4685-b4a2-3f2a8eec3969",

          "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FNational%20Events%2FMIH%2Fmih-4.jpg?alt=media&token=2e3a1da4-8298-4c74-95e5-b35cf384f99c",

          "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FNational%20Events%2FMIH%2Fmih-5.jpg?alt=media&token=b4d8d2d9-a741-4e26-8708-afa386b30882",

          "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FNational%20Events%2FMIH%2Fmih-6.jpg?alt=media&token=10aca781-3636-4b36-a64a-68d229790cb2",

          "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FNational%20Events%2FMIH%2Fmih-7.jpg?alt=media&token=14105bcf-5227-4211-97b9-7679b9712022",
        ].map((item) => (
          <img
            key={item}
            src={item}
            alt={item}
            onLoad={(e) => e.target.classList.add("loaded")}
          />
        ))}
      </div>
    </Cont>
  );
}

export function FDP1() {
  return (
    <Cont>
      <PageHead>FDP on Latex & MATLAB</PageHead>
      <p>
        LATEX is a high-quality typesetting system,which includes features
        designed for the production of technical and scientific documentation
        and is considered as a standard for the communication and publication of
        scientific documents. It also has a prominent role in the preparation
        and publication of books and articles.
      </p>
      <p>
        The main aim of this FDP is to introduce the absolute beginners to latex
        and learning the basic commands and to write documents in LATEX.
      </p>
      <H4>FDP Details</H4>
      <ul>
        <li>
          <strong>Theme</strong>: Role of LATEX in Scientific Writing
        </li>
        <li>
          <strong>Keynote Speaker</strong>: Dr. Harish Sharma ( Asst. Professor,
          CSE, RTU Kota), Dr. Sumit Kumar ( Asst. Professor, CSE, AMITY
          University)
        </li>
        <li>
          <strong>Date</strong>: 9 - 13 December, 2018
        </li>
        <li>
          <strong>Time</strong>: 10:00AM TO 05:00PM
        </li>
      </ul>
      <p>
        <i>Sponsored by : TEQUIP-III</i>
      </p>

      <div className="grid three">
        {[
          "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FEVENTS%2FFDP%2FHUMAN%20VALUE%2F1.jpg?alt=media&token=0f10230a-5710-4d8f-8dff-3e93a25198ca",

          "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FEVENTS%2FFDP%2FHUMAN%20VALUE%2F2.jpg?alt=media&token=c15ba3ce-5dcc-418d-b23e-038401831a4e",

          "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FEVENTS%2FFDP%2FHUMAN%20VALUE%2F3.jpg?alt=media&token=2c6c6fc7-68f7-49b5-ac89-be3bc5a24de5",

          "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FEVENTS%2FFDP%2FHUMAN%20VALUE%2F5.jpg?alt=media&token=70f79389-611b-42e1-9b12-49b151534ed5",

          "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FEVENTS%2FFDP%2FHUMAN%20VALUE%2F6.jpg?alt=media&token=56d83bf9-fa52-4e06-9f5c-9bb27e3127b3",
        ].map((item) => (
          <img
            key={item}
            src={item}
            alt={item}
            onLoad={(e) => e.target.classList.add("loaded")}
          />
        ))}
      </div>
    </Cont>
  );
}

export function FDP2() {
  return (
    <Cont>
      <PageHead>FDP ON PYTHON</PageHead>
      <H3>FDP Details</H3>
      <ul>
        <li>
          <strong>Theme</strong>: Familiarity with Python
        </li>
        <li>
          <strong>Keynote Speaker</strong>: Mr. Dhawal Vyas(Assistant
          Professor,GEC Ghaziabad)
        </li>
        <li>
          <strong>Date</strong>: 27 november, 2018
        </li>
        <li>
          <strong>Time</strong>: 10:00AM TO 05:00PM
        </li>
      </ul>
      <p>
        <i>Sponsored by : TEQUIP-III</i>
      </p>
      <div className="grid three">
        {[
          "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FEVENTS%2FFDP%2FIOT%2F1.jpg?alt=media&token=61cbffca-ec3a-453d-8c70-38f78befe2c5",

          "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FEVENTS%2FFDP%2FIOT%2F2.jpg?alt=media&token=4ecad46d-0a6d-4e51-a885-88facc4239d8",

          "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FEVENTS%2FFDP%2FIOT%2F3.jpg?alt=media&token=cc9dcb2e-697e-4fd1-ace3-2b2d70b8fb8f",

          "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FEVENTS%2FFDP%2FIOT%2F4.jpg?alt=media&token=d7fb9abe-47fa-4b48-ba31-ef2c009a1974",

          "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FEVENTS%2FFDP%2FIOT%2F6.jpg?alt=media&token=b4520517-d8df-4081-94d6-21a31bfdc70d",
        ].map((item) => (
          <img
            key={item}
            src={item}
            alt={item}
            onLoad={(e) => e.target.classList.add("loaded")}
          />
        ))}
      </div>
    </Cont>
  );
}

export function ETSEM1() {
  return (
    <Cont>
      <PageHead>ETSEM 2019</PageHead>
      <p>
        International Conference on Emerging Trends in Science, Engineering &
        Management{" "}
      </p>
      <p>
        <strong>Dated : February 23-24, 2019.</strong>
      </p>
      <H4>Key Note Speaker</H4>
      <ul>
        <li>Prof Mike Hinchey (University of Limrick, Ireland)</li>
        <li>
          Dr. Sheikh Ansul Azeem (Al Mussana College of Technology Sultanate of
          Oman)
        </li>
      </ul>
      <p>
        In this international Conference, Department of Management Studies
        Faculties, Students, Faculties from Outside Colleges, Universities,
        Research Scholars presented their papers.
      </p>
    </Cont>
  );
}

export function ETSEM2() {
  return (
    <Cont>
      <PageHead>ETSEM 2018</PageHead>
      <p>
        International Conference on{" "}
        <i>
          "Emerging Trends in Science, Engineering and Management - ETSEM 2018"
        </i>
      </p>
      <p>
        <strong>Dated : 24 - 25 Feb, 2018</strong>
      </p>
      <H4>Key Note Speaker</H4>
      <ul>
        <li>Dr. Akshay Rathore, Concordia University,Canada</li>
        <li>Professor Rajeev Gupta, RTU Kota</li>
      </ul>
      <p>
        In this international Conference, Department of Management Studies
        Faculties, Students, Faculties from Outside Colleges, Universities,
        Research Scholars presented their papers.
      </p>

      <div className="grid three">
        {[
          "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FEVENTS%2FETSEM%202018%2F1.jpg?alt=media&token=742fbeea-3da5-4d94-80a6-d23260bd2052",

          "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FEVENTS%2FETSEM%202018%2F2.jpg?alt=media&token=fee4439a-4b77-47cd-8cfe-2a600369eb37",

          "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FEVENTS%2FETSEM%202018%2F3.jpg?alt=media&token=5f7d1739-0a3a-4bfc-9553-b8a9f13fda85",
          "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FEVENTS%2FETSEM%202019%2F1.jpg?alt=media&token=90def5a4-fd4f-49eb-ac97-8c67f08b8a7c",

          "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FEVENTS%2FETSEM%202019%2F2.jpg?alt=media&token=135fb499-be40-4421-b46a-5b3e13795683",

          "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FEVENTS%2FETSEM%202019%2F3.jpg?alt=media&token=8e746948-e325-4dba-921e-9a3348909237",

          "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FEVENTS%2FETSEM%202019%2F4.jpg?alt=media&token=8450d0b9-d121-4de5-ba62-72673f7bf263",

          "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FEVENTS%2FETSEM%202019%2F5.jpg?alt=media&token=f687bb9c-bc8b-4621-b0e5-425fa8d3beb2",

          "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FEVENTS%2FETSEM%202019%2F6.jpg?alt=media&token=d75da7b3-abfc-41d0-9275-3b51aa81234e",

          "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FEVENTS%2FETSEM%202019%2F7.jpg?alt=media&token=b6042d13-28d9-47a5-92c7-222c2cf66127",

          "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FEVENTS%2FETSEM%202019%2F8.jpg?alt=media&token=22fd92e2-d9e3-4b70-80d2-2376aed74456",
        ].map((item) => (
          <img
            key={item}
            src={item}
            alt={item}
            onLoad={(e) => e.target.classList.add("loaded")}
          />
        ))}
      </div>
    </Cont>
  );
}

export function Annual() {
  return (
    <Cont>
      <PageHead>Annual Function : Invincible</PageHead>
      <p>
        Every Year ,MITRC organizes Annual Function named as Invincible . This
        event organizes for 3 days . Various activities like Sports, Programmer
        war, Circuit Design, Singing(Rhythm), Dancing(Jhankar), Ramp Walk
        (Panch) , Play/Skit, Rangoli Making, Slow Bike Race, etc. Four Houses
        Red House , Green House, Blue House & Yellow House compete with each
        other for winning the trophy.{" "}
      </p>
      <H4>INVINCIBLE T-20</H4>
      <p>
        Due to Covid Pandemic , As per guidelines of MHRD & University & State
        Government, Invincible T -20 was in Online Mode through Video Submission
        or Google Meet{" "}
      </p>
      <H4>INVINCIBLE T-19</H4>
      <p>
        <strong>Dated : 16-18 March,2019</strong>
      </p>
      <H4>Chief Guests</H4>
      <ul>
        <li>Dr. Yadunath Singh ( Dean Academics Affairs, BTU,Bikaner )</li>
        <li>Professor Upendra Pandel (MNIT, Jaipur)</li>
        <li>Dr. R.K Duchaniya (MNIT, Jaipur)</li>
        <li>Mr. R.K Kumar (MNIT, Jaipur)</li>
      </ul>
      <p>
        <strong>Winner</strong> : Green House{" "}
      </p>
      <p>
        <strong>Best Student Award</strong> : Monika Saini (EE) & Yash Goyal
        (MBA)
      </p>
      <H4>INVINCIBLE T-18</H4>
      <p>
        <strong>Dated : 8-10 March, 2018</strong>
      </p>
      <H4>Chief Guests</H4>
      <ul>
        <li>Professor A.K Dwidedi ( Exam Controller, RTU Kota)</li>
        <li>Professor Vivek pandey ( Dean Academics Affairs, RTU Kota )</li>
        <li>Dr. Rohit Bhaskar (MNIT, Jaipur)</li>
        <li>Dr. G.K Agaarwal ( Orthopedic Surgeon ,Fortis Hospital)</li>
      </ul>
      <p>
        <strong>Winner</strong> : Green House{" "}
      </p>
      <p>
        <strong>Best Student Award</strong> : Ayushi Khandelwal (CSE) & Lavina
        Goyal (MBA)
      </p>

      <div className="grid three">
        {[
          "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FEVENTS%2FINVINCIBLE%20T-19%2F1.jpg?alt=media&token=20783481-c13b-4483-b74c-394f6f9f5f14",

          "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FEVENTS%2FINVINCIBLE%20T-19%2F2.jpg?alt=media&token=64a37b82-fbed-40df-8c7c-98f6598aca6a",

          "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FEVENTS%2FINVINCIBLE%20T-19%2F3.jpg?alt=media&token=9ab51047-fb4e-410b-be5d-ba0a17d43d52",

          "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FEVENTS%2FINVINCIBLE%20T-19%2F4.jpg?alt=media&token=c969f12a-7b8d-45a6-a4c3-7c74852c203d",

          "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FEVENTS%2FINVINCIBLE%20T-19%2F5.jpg?alt=media&token=2e868aa6-a8fc-479f-ae08-cf9de3e33906",

          "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FEVENTS%2FINVINCIBLE%20T-19%2F6.jpg?alt=media&token=a53d9cff-4714-44bb-b955-e5956045b736",

          "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FEVENTS%2FINVINCIBLE%20T-19%2F7.jpg?alt=media&token=202bf2cb-d9ca-476b-b03e-075be564dfc2",

          "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FEVENTS%2FINVINCIBLE%20T-18%2F1.jpg?alt=media&token=045d3cd1-5271-4459-8c26-0a06716f7250",

          "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FEVENTS%2FINVINCIBLE%20T-18%2F2.jpg?alt=media&token=dcc6fd1d-2516-4356-8645-77af1b69f739",

          "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FEVENTS%2FINVINCIBLE%20T-18%2F3.jpg?alt=media&token=101c5e53-c084-4645-afc9-efeffec3918e",

          "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FEVENTS%2FINVINCIBLE%20T-18%2F4.jpg?alt=media&token=6e0b5f07-5f23-414c-9ed0-cb7b32682dfa",

          "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FEVENTS%2FINVINCIBLE%20T-18%2F5.jpg?alt=media&token=f12b7c34-18e5-4c2e-a23b-854f35443897",

          "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FEVENTS%2FINVINCIBLE%20T-18%2F6.jpg?alt=media&token=d99ccef2-8e98-4f82-a1de-b7a90f54d397",

          "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FEVENTS%2FINVINCIBLE%20T-18%2F7.jpg?alt=media&token=def1fd5d-0818-4b1a-adac-2d1b54eecf65",

          "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FEVENTS%2FINVINCIBLE%20T-18%2F8.jpg?alt=media&token=2b9b2395-c697-4ea9-acfe-92dc4c85cbd6",

          "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FEVENTS%2FINVINCIBLE%20T-18%2F9.jpg?alt=media&token=e9580179-a10b-4b6e-9b2d-9352a5bcae5c",

          "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FEVENTS%2FINVINCIBLE%20T-18%2Fphoto.jpg?alt=media&token=ff00b73d-fc89-4bcd-8f24-06ef477fc5f8",
        ].map((item) => (
          <img
            key={item}
            src={item}
            alt={item}
            onLoad={(e) => e.target.classList.add("loaded")}
          />
        ))}
      </div>
    </Cont>
  );
}

export function Fresher() {
  return (
    <Cont>
      <PageHead>FRESHER’S PARTY</PageHead>
      <p>
        Fresher's Party is to welcome new students in college’s friendly
        atmosphere and to encourage their creative impulses to boost their
        confidence and pursue their passion. It is the day where seniors and
        juniors finally bond and unite to celebrate being part of the
        college.Freshers party is a way to welcome new comers in a college. The
        Freshers party isn’t just a day for the new comers (as the name says)
        but is also important and special for the seniors. Following are the
        four things which one must do on their freshers party
      </p>
      <H4>Know Your Seniors In A Fun-Filled Way!</H4>
      <p>
        The first years will miss out on a lot if they wont know how college
        goes. It is important to know your seniors and their behavior so you
        don’t feel uncomfortable to ask for anything, and freshers it is that
        one hell of an opportunity to check-out the fun-filled side of your
        serious seniors where they do all the hard work and preparation to make
        you feel protective and comfortable , to welcome you.
      </p>
      <p>
        Every Year , MITRC Second Year Students of all disciplines organizes
        Fresher’s Party named as AARAMBH for welcome the First Year students.{" "}
      </p>
      <p>
        <strong>Fresher Party for Session 2021-22</strong> was organized through
        Online Mode due to Covid Pandemic{" "}
      </p>
      <p>
        <strong>Fresher Party for Session 2020-21</strong> was organized through
        Online Mode due to Covid Pandemic{" "}
      </p>
      <p>
        <strong>Fresher Party for Session 2019-20</strong> was organized at
        Pratap auditorium,Alwar on 21 Septemeber, 2019.
        <ul>
          <li>Mr. Fresher (B.Tech ) : Priyanshu Saini</li>
          <li>Ms. Fresher ( B.Tech): Ezee Jain</li>
          <li>Mr. Fresher (MBA ) : Armaan Aggarwal</li>
          <li>Ms. Fresher ( MBA): Ravleen Makar</li>
        </ul>
      </p>
    </Cont>
  );
}

export function Teacher() {
  return (
    <Cont>
      <PageHead>TEACHER’s DAY CELEBRATION</PageHead>
      <p>
        The future of a country lies in the hands of its children, and teachers,
        as mentors, can mould students into future leaders who shape the destiny
        of India. They play an important role in our lives in helping us become
        successful in career and business. They help us to become good human
        beings, a better member of society, and an ideal citizen of the country.{" "}
      </p>
      <p>
        Teacher’s Day is celebrated by students of MITRC to acknowledge the
        challenges, hardships, and special roles that teachers play in our
        lives. Students and Teachers equally look forward. The Day is important
        for the students as it gives them a chance to understand the efforts put
        in by their teachers to ensure that they get a proper education.
        Similarly, teachers also look forward to the Teachers’ Day celebration
        as their efforts get recognised and honoured by students and other
        agencies as well.
      </p>
      <p>
        Many games, cultural activities carried out by teacher’s and students
        andstudents give title to their beloved faculty members.
      </p>
    </Cont>
  );
}

export function Farewell() {
  return (
    <Cont>
      <PageHead>FAREWELL PARTY</PageHead>
      <p>
        A college is a place where we learn new things. We meet many new people.
        Some of them remain with us while others teach us an important lesson
        after they leave.
      </p>
      <p>
        Students give farewell to their seniors & wish their bright future. Many
        games, cultural activities carried out by students and students give
        title to their beloved faculty seniors. Ramp Walk and other activities
        carried out by Seniors. At the end of the function, Mr. Evening & Ms.
        Evening declared.
      </p>
      <p>
        <strong>Farewell Party for Session 2020-21</strong> was cancelled due to
        Covid Pandemic.
      </p>
      <p>
        <strong>Farewell Party for Session 2019-20:</strong> was organized
        through Online Mode due to Covid Pandemic “DESPEDIA 2K19” was organized
        at MITRC Alwar . Dated : 5 April, 2019 Chief Guest : Mr. Rohitashwa
        Kajala ( HR manager, Havells india Pvt. Ltd.) Mr. Evening : Mihir
        Pradhan & Aarav Gupta (MBA) Ms. Evening : Harshita Gupta ( B.Tech)
      </p>
    </Cont>
  );
}

export function Convocation() {
  return (
    <Cont>
      <PageHead>CONVOCATION</PageHead>
      <p>
        MITRC College organize Convocation ceremony for the students who have
        completed their B.Tech & MBA Degree in 2011,2012,2013,2014,2015 & 2016.
      </p>
    </Cont>
  );
}

export function Women() {
  return (
    <Cont>
      <PageHead>WOMEN DAY CELEBRATION</PageHead>
      <p>
        <i>यत्र नार्यस्तु पूज्यंते रमंते तत्र देवता</i>
      </p>
      <p>
        Women are strong, powerful and invincible. With thousands of mantras
        encouraging women's existence every day, a special day is indeed a
        necessity to celebrate women's achievements in all aspects of life.
        Whether she's a teacher, homemaker, economist, engineer or pioneer,
        women have been making the world a better place with their infinite
        strength, determination and belief. With power enough to shatter the
        shackles of patriarchy, women are rising above societal hurdles every
        single day, making them a stronger force to reckon with, in modern
        times.
      </p>
      <p>So MITRC organizes International Women Day Celebration every year.</p>
    </Cont>
  );
}

export function Abhi() {
  return (
    <Cont>
      <PageHead>ABHINANDAN RETURN’S CELEBRATION</PageHead>
      <H3>#WelcomeHomeAbhinandan</H3>
      <p>
        MITRC faculty members & students celebrated Indian Air Force wing
        commander Abhinandan Varthaman’s imminent return from Pakistan at
        Company Garden along with soldiers.
      </p>
    </Cont>
  );
}

export function NationalLevelEvents() {
  return (
    <Cont>
      <PageHead>NATIONAL & STATE LEVEL EVENTS PARTICIPATION</PageHead>
      <p>
        Participation in Technical Events at National Level & State Level helps
        in improving the technical skills of students and students learn from
        the challenges which they face during these events .
      </p>
      <p>
        To create a innovative and learning environment for developing the
        technical skills , Students has been motivated by faculties to
        participate in various national level and state level technical
        competition such as Hackathon, Vishwakarma Award , Manthan 2021 etc.
      </p>
      <p>
        The main motto of the participation is to bring students out of stage
        fear and also improve their communication skills. It also helps the
        students to think, create and develop about the real time problem’s
        solutions. It also provides you an opportunity to learn in detailed
        about a core subject which is a part of curriculum and develop effective
        presentation skills.
      </p>
      <p>
        MITRC students participated in many national level and state level
        events like various Hackathons, and got selected in Grand Finale in many
        competitions.
      </p>
      <H4>EVENTS PARTICIPATION IN 2021-22</H4>
      <ul style={{ listStyle: "none" }}>
        <li>
          <H5>
            GRAND FINALE SELECTION IN MANTHAN 2021 – LETS CODE FOR COUNTRY
            SECURITY
          </H5>
          <ul>
            <li>
              <strong>EVENT NAME : </strong>MANTHAN 2021 (NATIONAL LEVEL
              HACKATHON)
            </li>
            <li>
              <strong>ORGANISED BY : </strong>BPRD, MHRD,MIC & AICTE
            </li>
            <li>
              <strong>LEVEL : </strong>NATIONAL LEVEL
            </li>
            <li>
              <strong>DATE : </strong>8-10 DECEMBER, 2021
            </li>
            <li>
              <strong>TOTAL TEAMS PARTICIPATED : </strong>5
            </li>
            <li>
              <strong>IDEAS SELECTED FOR GRAND FINALE : </strong>1
            </li>
            <li>
              <strong>IDEAS SELECTED IS : </strong>Event detection like chain
              snatching, theft, knife attack etc. Using CCTV footage and provide
              timestamp & location
            </li>
            <li>
              <strong>OTHER IDEAS : </strong>Identification of Crime Prone
              Areas, Detection of VPN, Identify Profile of Terrorist from Social
              Media Posts.
            </li>
            <li>
              <strong>ACHIEVEMENT : </strong>1 TEAM SELECTED FOR GRAND FINALE IN
              MANTHAN 2021 – LETS CODE FOR COUNTRY SECURITY ORGANISED BY BPRD &
              MIC & AICTE IN DECEMBER 2021 .
            </li>
          </ul>
        </li>
      </ul>

      <H4>EVENTS PARTICIPATION IN 2020-21</H4>
      <ul style={{ listStyle: "none" }}>
        <li>
          <H5>
            GRAND FINALE SELECTION IN TOYCATHON – LETS CODE DIGITAL TOYS FOR
            LEARNING
          </H5>
          <ul>
            <li>
              <strong>EVENT NAME : </strong>TOYCATHON (NATIONAL LEVEL HACKATHON)
            </li>
            <li>
              <strong>ORGANISED BY : </strong>AICTE & MHRD & MIC
            </li>
            <li>
              <strong>LEVEL : </strong>NATIONAL LEVEL
            </li>
            <li>
              <strong>DATE : </strong>22 JUNE-24 JUNE, 2021
            </li>
            <li>
              <strong>TOTAL TEAMS PARTICIPATED : </strong>3
            </li>
            <li>
              <strong>IDEAS SELECTED FOR GRAND FINALE : </strong>2
            </li>
            <li>
              <strong>ACHIEVEMENT : </strong>2 TEAMS SELECTED FOR GRAND FINALE
              IN TOYCATHON 2021 .
            </li>
          </ul>
        </li>

        <li>
          <H5>GRAND FINALE RUNNER UP IN CODETHON 2021</H5>
          <ul>
            <li>
              <strong>EVENT NAME : </strong>CODETHON 2021 (NATIONAL LEVEL
              HACKATHON)
            </li>
            <li>
              <strong>ORGANISED BY : </strong>GOVT. ENGINEERING COLLEGE AJMER
            </li>
            <li>
              <strong>LEVEL : </strong>NATIONAL LEVEL
            </li>
            <li>
              <strong>DATE : </strong>17-18 FEB, 2021
            </li>
            <li>
              <strong>TOTAL TEAMS PARTICIPATED : </strong>5
            </li>
            <li>
              <strong>IDEAS SELECTED FOR STAGE 1 : </strong>5
            </li>
            <li>
              <strong>IDEAS SELECTED FOR STAGE 2 : </strong>5
            </li>
            <li>
              <strong>IDEAS SELECTED FOR STAGE 3 : </strong>3
            </li>
            <li>
              <strong>IDEAS SELECTED FOR STAGE 4 : </strong>1
            </li>
            <li>
              <strong>FINAL RESULT : </strong>1 Team got 2nd Position & win
              amount of 11K.
            </li>
            <li>
              WINNING TEAM LEADER IS SANCHIT MANGAL 7 CSE & TITLE OF INNOVATION
              WAS AUTOMATIC ALERT TO SAFETY OFFICER
            </li>
          </ul>
        </li>

        <li>
          <H5>SELECTION OF STUDENT’S IDEA IN CHAATRA VISHWAKARMA AWARD 2021</H5>
          <ul>
            <li>
              <strong>EVENT NAME : </strong>TCHHATRA VISHWAKARMA 2020 (NATIONAL
              LEVEL HACKATHON)
            </li>
            <li>
              <strong>ORGANISED BY : </strong>AICTE
            </li>
            <li>
              <strong>LEVEL : </strong>NATIONAL LEVEL
            </li>
            <li>
              <strong>DATE : </strong>15 SEPTEMBER-3 OCTOBER, 2021
            </li>
            <li>
              <strong>TOTAL TEAMS PARTICIPATED : </strong>5
            </li>
            <li>
              <strong>IDEAS SELECTED FOR REGIONAL LEVEL : </strong>1
            </li>
          </ul>
        </li>

        <li>
          <H5>
            4 TEAMS SELECTION IN GRAND FINALE OF SIH 2020 –SOFTWARE EDITION & 2
            TEAMS FOR SIH 2020-HARDWARE EDITION STUDENT’S IDEA IN CHAATRA
            VISHWAKARMA AWARD 2021
          </H5>
          <ul>
            <li>
              <strong>EVENT NAME : </strong>SMART INDIA HACKATHON 2020 (NATIONAL
              LEVEL HACKATHON)
            </li>
            <li>
              <strong>ORGANISED BY : </strong>AICTE & MIC
            </li>
            <li>
              <strong>LEVEL : </strong>NATIONAL LEVEL
            </li>
            <li>
              <strong>DATE : </strong>2 AUGUST-4 AUGUST, 2020
            </li>
            <li>
              <strong>TOTAL TEAMS PARTICIPATED : </strong>5
            </li>
            <li>
              <strong>IDEAS SELECTED FOR S/W FINALE : </strong>4
            </li>
            <li>
              <strong>IDEAS SELECTED FOR H/W FINALE : </strong>2
            </li>
            <li>
              <strong>ORGANIZATIONS : </strong>ISRO, GOVT. OF BIHAR, GOVT. OF
              UTTARAKHAND, TRIPURA INSTITUTE OF TECHNOLOGY.
            </li>
            <li>
              <strong>IDEAS : </strong>ADHAR BASED TENDER , STUDENT COUNSELLING
              USING ML & AI , AIR & WATER TURBIDITY USING SUN IMAGE & SECHI
              DEPTH RESPECTIVELY , LAND MONITORING OF USAGE USING SATELLITE IN
              REAL TIME, SMART TRIP PLANNER, MOBILE BASED LASER VIBRATOMETER
            </li>
          </ul>
        </li>
      </ul>

      <H4>EVENTS PARTICIPATION IN 2019-20</H4>
      <ul style={{ listStyle: "none" }}>
        <li>
          <H5>1 TEAM SELECTED IN SAMADHAN- INDIA FIGHT WITH CORONA</H5>
          <ul>
            <li>
              <strong>EVENT NAME : </strong>SAMADHAAN ( NATIONAL LEVEL
              HACKATHON)
            </li>
            <li>
              <strong>ORGANISED BY : </strong>AICTE & MIC &IIC
            </li>
            <li>
              <strong>LEVEL : </strong>NATIONAL LEVEL
            </li>
            <li>
              <strong>DATE : </strong>24 APRIL-25 APRIL, 2020
            </li>
            <li>
              <strong>TOTAL TEAMS PARTICIPATED : </strong>3
            </li>
            <li>
              <strong>IDEAS SELECTED FOR GRAND FINALE : </strong>1
            </li>
            <li>
              <strong>IDEAS SELECTED IS : </strong>AN APP FOR CORONA & PUBLIC
              AWARENESS DURING CORONA
            </li>
          </ul>
        </li>

        <li>
          <H5>1 TEAM SELECTED IN IDEATHON- INDIA FIGHT WITH CORONA</H5>
          <ul>
            <li>
              <strong>EVENT NAME : </strong>IDEATHON ( NATIONAL LEVEL HACKATHON)
            </li>
            <li>
              <strong>ORGANISED BY : </strong>AICTE & MIC& FORGE
            </li>
            <li>
              <strong>LEVEL : </strong>NATIONAL LEVEL
            </li>
            <li>
              <strong>DATE : </strong>27 MARCH-28 MARCH, 2020
            </li>
            <li>
              <strong>TOTAL TEAMS PARTICIPATED : </strong>3
            </li>
            <li>
              <strong>IDEAS SELECTED FOR GRAND FINALE : </strong>1
            </li>
            <li>
              <strong>IDEAS SELECTED IS : </strong>AN APP FOR CORONA & PUBLIC
              AWARENESS DURING CORONA
            </li>
          </ul>
        </li>

        <li>
          <H5>5 TEAMS SELECTED IN CHATRA VISHWAKARMA AWARD 2019</H5>
          <ul>
            <li>
              <strong>EVENT NAME : </strong>CHHATRA VISHWAKARMA 2019 (NATIONAL
              LEVEL HACKATHON)
            </li>
            <li>
              <strong>ORGANISED BY : </strong>AICTE
            </li>
            <li>
              <strong>LEVEL : </strong>NATIONAL LEVEL
            </li>
            <li>
              <strong>DATE : </strong>21 JANUARY, 2020
            </li>
            <li>
              <strong>TOTAL TEAMS PARTICIPATED : </strong>3
            </li>
            <li>
              <strong>IDEAS SELECTED FOR REGIONAL FINALE : </strong>3
            </li>
            <li>
              <strong>IDEAS SELECTED FOR NATIONAL FINALE : </strong>1
            </li>
            <li>IDEA SELECTED WAS AN APP FOR EDUCATION & HEALTH</li>
            <li>
              <strong>YEAR IN A REVIEW : </strong>MITRC not only focuses
              theoretical aspects but also practical exposure to students, In
              this regard,3 Teams of MITRC participated in Regional conventional
              stage-NW Region (Chatra Vishwakarma Awards-2019) at Jagan
              Institute of Management and Science, Rohini, New Delhi. Jury
              expert were Dr. R.K. Soni and other officials from AICTE. Team
              names were Heart vibes, Farma Coders, Plantix Agro. Out of 3 ,
              Heart Vibes was selected for National Convention to be held at
              AICTE, Headquater.
            </li>
          </ul>
        </li>

        <li>
          <H5>13 TEAMS SELECTED FOR SIH 2020 BY INTERNAL HACKATHON MIH-2020</H5>
          <ul>
            <li>
              <strong>EVENT NAME : </strong>MITRC INTERNAL HACKATHON 2020 (INTRA
              COLLEGE LEVEL HACKATHON)
            </li>
            <li>
              <strong>ORGANISED BY : </strong>MITRC
            </li>
            <li>
              <strong>LEVEL : </strong>INTRA COLLEGE LEVEL
            </li>
            <li>
              <strong>DATE : </strong>10-11 JANUARY, 2020
            </li>
            <li>
              <strong>TOTAL TEAMS PARTICIPATED : </strong>64
            </li>
            <li>
              <strong>IDEAS SELECTED FOR S/W FINALE : </strong>13
            </li>

            <li>
              <strong>IDEAS SELECTED FOR H/W FINALE : </strong>10
            </li>
            <li>
              <strong>IDEAS ARE: </strong>TIME TABLE MANAGEMENT, VSAT SAARTHI,
              MEDICINE APP, AUTOMATIC ALERT TO SAFETY OFFICER, CHILD WELFARE.
            </li>
          </ul>
        </li>

        <li>
          <H5>5 TEAMS SELECTED FOR BUSINESS HACKATHON AT MANIPAL UNIVERSITY</H5>
          <ul>
            <li>
              <strong>EVENT NAME : </strong>BUSINESS HACKATHON
            </li>
            <li>
              <strong>ORGANISED BY : </strong>MANIPAL UNIVERSITY,JAIPUR
            </li>
            <li>
              <strong>LEVEL : </strong>NATIONAL LEVEL
            </li>
            <li>
              <strong>DATE : </strong>23-24 DECEMBER 2020
            </li>
            <li>
              <strong>TOTAL TEAMS PARTICIPATED : </strong>5
            </li>
            <li>
              <strong>IDEAS SELECTED FOR S/W FINALE : </strong>2
            </li>

            <li>
              <strong>IDEAS SELECTED FOR H/W FINALE : </strong>1
            </li>
            <li>
              <strong>IDEAS SELECTED IS : </strong>BUSINESS IDEA FOR FARMERS,
              MINI CNC MACHINE, ONLINE JOB PORTAL, E-COMMERCE FOR TRIBAL PROPLE
              PRODUCTS.
            </li>
          </ul>
        </li>

        <li>
          <H5>1 TEAM SELECTED IN IDEATHON- INDIA FIGHT WITH CORONA</H5>
          <ul>
            <li>
              <strong>EVENT NAME : </strong>IDEATHON ( NATIONAL LEVEL HACKATHON)
            </li>
            <li>
              <strong>ORGANISED BY : </strong>AICTE & MIC& FORGE
            </li>
            <li>
              <strong>LEVEL : </strong>NATIONAL LEVEL
            </li>
            <li>
              <strong>DATE : </strong>27 MARCH-28 MARCH, 2020
            </li>
            <li>
              <strong>TOTAL TEAMS PARTICIPATED : </strong>3
            </li>
            <li>
              <strong>IDEAS SELECTED FOR GRAND FINALE : </strong>1
            </li>
            <li>
              <strong>IDEAS SELECTED IS : </strong>AN APP FOR CORONA & PUBLIC
              AWARENESS DURING CORONA
            </li>
          </ul>
        </li>
      </ul>

      <H4>EVENTS PARTICIPATION IN 2018-19</H4>
      <ul style={{ listStyle: "none" }}>
        <li>
          <H5>SMART INDIA HACKATHON 2019 (NATIONAL LEVEL HACKATHON)</H5>
          <ul>
            <li>
              <strong>EVENT NAME : </strong>SAMADHAAN ( NATIONAL LEVEL
              HACKATHON)
            </li>
            <li>
              <strong>ORGANISED BY : </strong>AICTE & MIC
            </li>
            <li>
              <strong>LEVEL : </strong>NATIONAL LEVEL
            </li>
            <li>
              <strong>DATE : </strong>2 APRIL-4 APRIL, 2019
            </li>
            <li>
              <strong>TOTAL TEAMS PARTICIPATED : </strong>32
            </li>
            <li>
              <strong>IDEAS SELECTED FOR S/W FINALE : </strong>5
            </li>
            <li>
              <strong>IDEAS SELECTED FOR H/W FINALE : </strong>2
            </li>
            <li>
              <strong>ORGANISATIONS</strong> ISRO,SSEPL SKILLS PVT. LTD, COAL
              INDIA LTD, COGNIZANT, MIND TREE.
            </li>
            <li>
              <strong>IDEAS SELECTED IS : </strong> • VSAT SAARTHI, SAVE
              MEDICINES, SAVE LIFE, TIME TABLE MANAGEMENT, REPOSITORY FOR SPORTS
              PERSON, RESPOSITORY FOR PROJECTS.
            </li>
          </ul>
        </li>

        <li>
          <H5>1 TEAM SELECTED IN BUSINESS HACKATHON FINALE</H5>
          <ul>
            <li>
              <strong>EVENT NAME : </strong>BUSINEESS HACKATHON 2019
              (NATIONALLEVEL HACKATHON)
            </li>
            <li>
              <strong>ORGANISED BY : </strong>ARYA COLLEGE,JAIPUR & RTU
            </li>
            <li>
              <strong>LEVEL : </strong>NATIONAL LEVEL
            </li>
            <li>
              <strong>DATE : </strong>10 FEBRUARY, 2019
            </li>
            <li>
              <strong>TOTAL TEAMS PARTICIPATED : </strong>2
            </li>
            <li>
              <strong>IDEAS SELECTED FOR S/W FINALE : </strong>1
            </li>
          </ul>
        </li>
      </ul>
    </Cont>
  );
}

export function NationalLevelEvents21_22() {
  return (
    <Cont>
      <H4>EVENTS PARTICIPATION IN 2021-22</H4>
      <ul style={{ listStyle: "none" }}>
        <li>
          <H5>
            GRAND FINALE SELECTION IN MANTHAN 2021 – LETS CODE FOR COUNTRY
            SECURITY
          </H5>
          <UL>
            <li>
              <strong>EVENT NAME : </strong>MANTHAN 2021 (NATIONAL LEVEL
              HACKATHON)
            </li>
            <li>
              <strong>ORGANISED BY : </strong>BPRD, MHRD,MIC & AICTE
            </li>
            <li>
              <strong>LEVEL : </strong>NATIONAL LEVEL
            </li>
            <li>
              <strong>DATE : </strong>8-10 DECEMBER, 2021
            </li>
            <li>
              <strong>TOTAL TEAMS PARTICIPATED : </strong>5
            </li>
            <li>
              <strong>IDEAS SELECTED FOR GRAND FINALE : </strong>1
            </li>
            <li>
              <strong>IDEAS SELECTED IS : </strong>Event detection like chain
              snatching, theft, knife attack etc. Using CCTV footage and provide
              timestamp & location
            </li>
            <li>
              <strong>OTHER IDEAS : </strong>Identification of Crime Prone
              Areas, Detection of VPN, Identify Profile of Terrorist from Social
              Media Posts.
            </li>
            <li>
              <strong>ACHIEVEMENT : </strong>1 TEAM SELECTED FOR GRAND FINALE IN
              MANTHAN 2021 – LETS CODE FOR COUNTRY SECURITY ORGANISED BY BPRD &
              MIC & AICTE IN DECEMBER 2021 .
            </li>
          </UL>
          <div className="grid three">
            {[
              "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FNational%20Events%2FMANTHAN%2F1.jpg?alt=media&token=8426bdcd-6c70-44a9-aee3-714435432b0e",
              "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FNational%20Events%2FMANTHAN%2F2.jpg?alt=media&token=131ff96c-4ce1-4a77-8c34-8f58e498ad77",
              "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FNational%20Events%2FMANTHAN%2F3.jpg?alt=media&token=c78c4d32-68e4-41f6-902d-854adbae9b21",
            ].map((item) => (
              <img
                key={item}
                src={item}
                alt={item}
                onLoad={(e) => e.target.classList.add("loaded")}
              />
            ))}
          </div>
        </li>
      </ul>
    </Cont>
  );
}

export function NationalLevelEvents20_21() {
  return (
    <Cont>
      <H4>EVENTS PARTICIPATION IN 2020-21</H4>
      <ul style={{ listStyle: "none" }}>
        <li>
          <H5>
            GRAND FINALE SELECTION IN TOYCATHON – LETS CODE DIGITAL TOYS FOR
            LEARNING
          </H5>
          <UL>
            <li>
              <strong>EVENT NAME : </strong>TOYCATHON (NATIONAL LEVEL HACKATHON)
            </li>
            <li>
              <strong>ORGANISED BY : </strong>AICTE & MHRD & MIC
            </li>
            <li>
              <strong>LEVEL : </strong>NATIONAL LEVEL
            </li>
            <li>
              <strong>DATE : </strong>22 JUNE-24 JUNE, 2021
            </li>
            <li>
              <strong>TOTAL TEAMS PARTICIPATED : </strong>3
            </li>
            <li>
              <strong>IDEAS SELECTED FOR GRAND FINALE : </strong>2
            </li>
            <li>
              <strong>ACHIEVEMENT : </strong>2 TEAMS SELECTED FOR GRAND FINALE
              IN TOYCATHON 2021 .
            </li>
          </UL>
          <div className="grid three">
            {[
              "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FNational%20Events%2F1.png?alt=media&token=79432ec2-baf7-44a1-9f15-a39aff029959",

              "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FNational%20Events%2F2.jpg?alt=media&token=9666fb9d-aabf-4843-890b-d2d551e5e038",

              "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FNational%20Events%2F3.jpg?alt=media&token=811befb9-6452-4378-ad7e-52158c1ffb65",

              "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FNational%20Events%2F4.jpg?alt=media&token=507bce8b-8dd6-4732-8a4b-770cfb4a571f",
            ].map((item) => (
              <img
                key={item}
                src={item}
                alt={item}
                onLoad={(e) => e.target.classList.add("loaded")}
              />
            ))}
          </div>
        </li>

        <li>
          <H5>GRAND FINALE RUNNER UP IN CODETHON 2021</H5>
          <UL>
            <li>
              <strong>EVENT NAME : </strong>CODETHON 2021 (NATIONAL LEVEL
              HACKATHON)
            </li>
            <li>
              <strong>ORGANISED BY : </strong>GOVT. ENGINEERING COLLEGE AJMER
            </li>
            <li>
              <strong>LEVEL : </strong>NATIONAL LEVEL
            </li>
            <li>
              <strong>DATE : </strong>17-18 FEB, 2021
            </li>
            <li>
              <strong>TOTAL TEAMS PARTICIPATED : </strong>5
            </li>
            <li>
              <strong>IDEAS SELECTED FOR STAGE 1 : </strong>5
            </li>
            <li>
              <strong>IDEAS SELECTED FOR STAGE 2 : </strong>5
            </li>
            <li>
              <strong>IDEAS SELECTED FOR STAGE 3 : </strong>3
            </li>
            <li>
              <strong>IDEAS SELECTED FOR STAGE 4 : </strong>1
            </li>
            <li>
              <strong>FINAL RESULT : </strong>1 Team got 2nd Position & win
              amount of 11K.
            </li>
            <li>
              WINNING TEAM LEADER IS SANCHIT MANGAL 7 CSE & TITLE OF INNOVATION
              WAS AUTOMATIC ALERT TO SAFETY OFFICER
            </li>
          </UL>

          <div className="grid three">
            <img
              src={
                "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FNational%20Events%2FCodethon%2F123.png?alt=media&token=6bf68620-ff7c-4c43-9636-926265b09324"
              }
              onLoad={(e) => e.target.classList.add("loaded")}
            />
            <img
              src={
                "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FNational%20Events%2FCodethon%2FWhatsApp%20Image%202021-02-20%20at%2011.28.51%20AM.jpeg?alt=media&token=46a2cac1-8c39-4426-a41a-32013fc0c888"
              }
              onLoad={(e) => e.target.classList.add("loaded")}
            />
            <img
              src={
                "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FNational%20Events%2FCodethon%2F2.jpg?alt=media&token=3477adcd-f845-40c0-a658-be6774965958"
              }
              onLoad={(e) => e.target.classList.add("loaded")}
            />{" "}
            <img
              src={
                "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FNational%20Events%2FCodethon%2F123.png?alt=media&token=6bf68620-ff7c-4c43-9636-926265b09324"
              }
              onLoad={(e) => e.target.classList.add("loaded")}
            />
          </div>
        </li>

        <li>
          <H5>SELECTION OF STUDENT’S IDEA IN CHAATRA VISHWAKARMA AWARD 2021</H5>
          <UL>
            <li>
              <strong>EVENT NAME : </strong>CHHATRA VISHWAKARMA 2020 (NATIONAL
              LEVEL HACKATHON)
            </li>
            <li>
              <strong>ORGANISED BY : </strong>AICTE
            </li>
            <li>
              <strong>LEVEL : </strong>NATIONAL LEVEL
            </li>
            <li>
              <strong>DATE : </strong>15 SEPTEMBER-3 OCTOBER, 2021
            </li>
            <li>
              <strong>TOTAL TEAMS PARTICIPATED : </strong>5
            </li>
            <li>
              <strong>IDEAS SELECTED FOR REGIONAL LEVEL : </strong>1
            </li>
          </UL>
          <div className="grid three">
            <img
              src={
                "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FNational%20Events%2FCVA%202020%2F7-Teams-bag-Chhatra-Vishwakrma.jpg?alt=media&token=645caefc-2968-4524-9c74-c101073e9f7f"
              }
              onLoad={(e) => e.target.classList.add("loaded")}
            />
            <img
              src={
                "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FNational%20Events%2FCVA%202020%2Fposter%20change.jpg?alt=media&token=3f39ce0c-b880-47ea-b50a-1b25dc241606"
              }
              onLoad={(e) => e.target.classList.add("loaded")}
            />
          </div>
        </li>

        <li>
          <H5>
            4 TEAMS SELECTION IN GRAND FINALE OF SIH 2020 –SOFTWARE EDITION & 2
            TEAMS FOR SIH 2020-HARDWARE EDITION STUDENT’S IDEA IN CHAATRA
            VISHWAKARMA AWARD 2021
          </H5>
          <UL>
            <li>
              <strong>EVENT NAME : </strong>SMART INDIA HACKATHON 2020 (NATIONAL
              LEVEL HACKATHON)
            </li>
            <li>
              <strong>ORGANISED BY : </strong>AICTE & MIC
            </li>
            <li>
              <strong>LEVEL : </strong>NATIONAL LEVEL
            </li>
            <li>
              <strong>DATE : </strong>2 AUGUST-4 AUGUST, 2020
            </li>
            <li>
              <strong>TOTAL TEAMS PARTICIPATED : </strong>5
            </li>
            <li>
              <strong>IDEAS SELECTED FOR S/W FINALE : </strong>4
            </li>
            <li>
              <strong>IDEAS SELECTED FOR H/W FINALE : </strong>2
            </li>
            <li>
              <strong>ORGANIZATIONS : </strong>ISRO, GOVT. OF BIHAR, GOVT. OF
              UTTARAKHAND, TRIPURA INSTITUTE OF TECHNOLOGY.
            </li>
            <li>
              <strong>IDEAS : </strong>ADHAR BASED TENDER , STUDENT COUNSELLING
              USING ML & AI , AIR & WATER TURBIDITY USING SUN IMAGE & SECHI
              DEPTH RESPECTIVELY , LAND MONITORING OF USAGE USING SATELLITE IN
              REAL TIME, SMART TRIP PLANNER, MOBILE BASED LASER VIBRATOMETER
            </li>
          </UL>
        </li>
      </ul>
    </Cont>
  );
}

export function NationalLevelEvents19_20() {
  return (
    <Cont>
      <H4>EVENTS PARTICIPATION IN 2019-20</H4>
      <ul style={{ listStyle: "none" }}>
        <li>
          <H5>1 TEAM SELECTED IN SAMADHAN- INDIA FIGHT WITH CORONA</H5>
          <UL>
            <li>
              <strong>EVENT NAME : </strong>SAMADHAAN ( NATIONAL LEVEL
              HACKATHON)
            </li>
            <li>
              <strong>ORGANISED BY : </strong>AICTE & MIC &IIC
            </li>
            <li>
              <strong>LEVEL : </strong>NATIONAL LEVEL
            </li>
            <li>
              <strong>DATE : </strong>24 APRIL-25 APRIL, 2020
            </li>
            <li>
              <strong>TOTAL TEAMS PARTICIPATED : </strong>3
            </li>
            <li>
              <strong>IDEAS SELECTED FOR GRAND FINALE : </strong>1
            </li>
            <li>
              <strong>IDEAS SELECTED IS : </strong>AN APP FOR CORONA & PUBLIC
              AWARENESS DURING CORONA
            </li>
          </UL>
          <div className="grid three">
            {[
              "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FNational%20Events%2FMIH%2Fmih-7.jpg?alt=media&token=14105bcf-5227-4211-97b9-7679b9712022",
              "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FNational%20Events%2FSAMADHAN%2Fsamadhan-2.jpg?alt=media&token=d9c0fb84-0006-4c8d-9a63-1170b31cc556",
            ].map((item) => (
              <img
                key={item}
                src={item}
                alt={item}
                onLoad={(e) => e.target.classList.add("loaded")}
              />
            ))}
          </div>
        </li>

        <li>
          <H5>1 TEAM SELECTED IN IDEATHON- INDIA FIGHT WITH CORONA</H5>
          <UL>
            <li>
              <strong>EVENT NAME : </strong>IDEATHON ( NATIONAL LEVEL HACKATHON)
            </li>
            <li>
              <strong>ORGANISED BY : </strong>AICTE & MIC& FORGE
            </li>
            <li>
              <strong>LEVEL : </strong>NATIONAL LEVEL
            </li>
            <li>
              <strong>DATE : </strong>27 MARCH-28 MARCH, 2020
            </li>
            <li>
              <strong>TOTAL TEAMS PARTICIPATED : </strong>3
            </li>
            <li>
              <strong>IDEAS SELECTED FOR GRAND FINALE : </strong>1
            </li>
            <li>
              <strong>IDEAS SELECTED IS : </strong>AN APP FOR CORONA & PUBLIC
              AWARENESS DURING CORONA
            </li>
          </UL>
        </li>

        <li>
          <H5>5 TEAMS SELECTED IN CHATRA VISHWAKARMA AWARD 2019</H5>
          <UL>
            <li>
              <strong>EVENT NAME : </strong>CHHATRA VISHWAKARMA 2019 (NATIONAL
              LEVEL HACKATHON)
            </li>
            <li>
              <strong>ORGANISED BY : </strong>AICTE
            </li>
            <li>
              <strong>LEVEL : </strong>NATIONAL LEVEL
            </li>
            <li>
              <strong>DATE : </strong>21 JANUARY, 2020
            </li>
            <li>
              <strong>TOTAL TEAMS PARTICIPATED : </strong>3
            </li>
            <li>
              <strong>IDEAS SELECTED FOR REGIONAL FINALE : </strong>3
            </li>
            <li>
              <strong>IDEAS SELECTED FOR NATIONAL FINALE : </strong>1
            </li>
            <li>IDEA SELECTED WAS AN APP FOR EDUCATION & HEALTH</li>
            <li>
              <strong>YEAR IN A REVIEW : </strong>MITRC not only focuses
              theoretical aspects but also practical exposure to students, In
              this regard,3 Teams of MITRC participated in Regional conventional
              stage-NW Region (Chatra Vishwakarma Awards-2019) at Jagan
              Institute of Management and Science, Rohini, New Delhi. Jury
              expert were Dr. R.K. Soni and other officials from AICTE. Team
              names were Heart vibes, Farma Coders, Plantix Agro. Out of 3 ,
              Heart Vibes was selected for National Convention to be held at
              AICTE, Headquater.
            </li>
          </UL>

          <div className="grid three">
            <img
              src={
                "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FNational%20Events%2Fcva%202019%2Fcva-9.jpg?alt=media&token=1d10ca42-b059-4599-9405-53e436dadd01"
              }
              onLoad={(e) => e.target.classList.add("loaded")}
            />
            <img
              src={
                "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FNational%20Events%2Fcva%202019%2Fcva-7.jpg?alt=media&token=497012da-556c-49b3-afcc-392e616ca42d"
              }
              onLoad={(e) => e.target.classList.add("loaded")}
            />
            <img
              src={
                "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FNational%20Events%2Fcva%202019%2Fcva-6.jpg?alt=media&token=afa3d45e-6b5e-41ad-89b6-23b5f832ea11"
              }
              onLoad={(e) => e.target.classList.add("loaded")}
            />{" "}
            <img
              src={
                "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FNational%20Events%2Fcva%202019%2Fcva-5.jpg?alt=media&token=6aa4a338-5673-4115-a3e8-c60c19e00469"
              }
              onLoad={(e) => e.target.classList.add("loaded")}
            />
            <img
              src={
                "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FNational%20Events%2Fcva%202019%2Fcva-4.jpg?alt=media&token=0cb391df-57a0-46d7-ad7a-eae427908b05"
              }
              onLoad={(e) => e.target.classList.add("loaded")}
            />
            <img
              src={
                "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FNational%20Events%2Fcva%202019%2Fcva-3.jpg?alt=media&token=b2e30dfd-38cf-4a26-909d-6e50c2a68e9d"
              }
              onLoad={(e) => e.target.classList.add("loaded")}
            />
            <img
              src={
                "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FNational%20Events%2Fcva%202019%2Fcva-2.jpg?alt=media&token=0cf0dcac-046c-4282-bc41-dd029251b1eb"
              }
              onLoad={(e) => e.target.classList.add("loaded")}
            />
            <img
              src={
                "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FNational%20Events%2Fcva%202019%2Fcva-1.jpg?alt=media&token=6793d22c-7118-4eea-a4ea-9724f64187f9"
              }
              onLoad={(e) => e.target.classList.add("loaded")}
            />
          </div>
        </li>

        <li>
          <H5>13 TEAMS SELECTED FOR SIH 2020 BY INTERNAL HACKATHON MIH-2020</H5>
          <UL>
            <li>
              <strong>EVENT NAME : </strong>MITRC INTERNAL HACKATHON 2020 (INTRA
              COLLEGE LEVEL HACKATHON)
            </li>
            <li>
              <strong>ORGANISED BY : </strong>MITRC
            </li>
            <li>
              <strong>LEVEL : </strong>INTRA COLLEGE LEVEL
            </li>
            <li>
              <strong>DATE : </strong>10-11 JANUARY, 2020
            </li>
            <li>
              <strong>TOTAL TEAMS PARTICIPATED : </strong>64
            </li>
            <li>
              <strong>IDEAS SELECTED FOR S/W FINALE : </strong>13
            </li>

            <li>
              <strong>IDEAS SELECTED FOR H/W FINALE : </strong>10
            </li>
            <li>
              <strong>IDEAS ARE: </strong>TIME TABLE MANAGEMENT, VSAT SAARTHI,
              MEDICINE APP, AUTOMATIC ALERT TO SAFETY OFFICER, CHILD WELFARE.
            </li>
          </UL>
          <div className="grid three">
            {[
              "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FNational%20Events%2FMIH%2Fmih-1.jpg?alt=media&token=e3aa3434-5c6e-47e6-ac98-994c47ce70ab",

              "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FNational%20Events%2FMIH%2Fmih-2.jpg?alt=media&token=dd18d5a4-2daa-4330-a18b-df68e456ceef",

              "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FNational%20Events%2FMIH%2Fmih-3.jpg?alt=media&token=4184cd1b-e71a-4685-b4a2-3f2a8eec3969",

              "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FNational%20Events%2FMIH%2Fmih-4.jpg?alt=media&token=2e3a1da4-8298-4c74-95e5-b35cf384f99c",

              "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FNational%20Events%2FMIH%2Fmih-5.jpg?alt=media&token=b4d8d2d9-a741-4e26-8708-afa386b30882",

              "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FNational%20Events%2FMIH%2Fmih-6.jpg?alt=media&token=10aca781-3636-4b36-a64a-68d229790cb2",

              "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FNational%20Events%2FMIH%2Fmih-7.jpg?alt=media&token=14105bcf-5227-4211-97b9-7679b9712022",
            ].map((item) => (
              <img
                key={item}
                src={item}
                alt={item}
                onLoad={(e) => e.target.classList.add("loaded")}
              />
            ))}
          </div>
        </li>

        <li>
          <H5>5 TEAMS SELECTED FOR BUSINESS HACKATHON AT MANIPAL UNIVERSITY</H5>
          <UL>
            <li>
              <strong>EVENT NAME : </strong>BUSINESS HACKATHON
            </li>
            <li>
              <strong>ORGANISED BY : </strong>MANIPAL UNIVERSITY,JAIPUR
            </li>
            <li>
              <strong>LEVEL : </strong>NATIONAL LEVEL
            </li>
            <li>
              <strong>DATE : </strong>23-24 DECEMBER 2020
            </li>
            <li>
              <strong>TOTAL TEAMS PARTICIPATED : </strong>5
            </li>
            <li>
              <strong>IDEAS SELECTED FOR S/W FINALE : </strong>2
            </li>

            <li>
              <strong>IDEAS SELECTED FOR H/W FINALE : </strong>1
            </li>
            <li>
              <strong>IDEAS SELECTED IS : </strong>BUSINESS IDEA FOR FARMERS,
              MINI CNC MACHINE, ONLINE JOB PORTAL, E-COMMERCE FOR TRIBAL PROPLE
              PRODUCTS.
            </li>
          </UL>
          <div className="grid three">
            <img
              src={
                "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FNational%20Events%2FManipal%2Fmanipal-1.jpg?alt=media&token=be67bb7c-5e74-4a76-a81b-3f395143a4ef"
              }
              onLoad={(e) => e.target.classList.add("loaded")}
            />
            <img
              src={
                "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FNational%20Events%2FManipal%2Fmanipal-2.jpg?alt=media&token=f33197ac-e0fa-49e5-8666-eac59b617f55"
              }
              onLoad={(e) => e.target.classList.add("loaded")}
            />
            <img
              src={
                "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FNational%20Events%2FManipal%2Fmanipal-3.jpg?alt=media&token=b5ebf594-4911-4451-a30c-22a380f35dd0"
              }
              onLoad={(e) => e.target.classList.add("loaded")}
            />
          </div>
        </li>

        <li>
          <H5>1 TEAM SELECTED IN IDEATHON- INDIA FIGHT WITH CORONA</H5>
          <UL>
            <li>
              <strong>EVENT NAME : </strong>IDEATHON ( NATIONAL LEVEL HACKATHON)
            </li>
            <li>
              <strong>ORGANISED BY : </strong>AICTE & MIC& FORGE
            </li>
            <li>
              <strong>LEVEL : </strong>NATIONAL LEVEL
            </li>
            <li>
              <strong>DATE : </strong>27 MARCH-28 MARCH, 2020
            </li>
            <li>
              <strong>TOTAL TEAMS PARTICIPATED : </strong>3
            </li>
            <li>
              <strong>IDEAS SELECTED FOR GRAND FINALE : </strong>1
            </li>
            <li>
              <strong>IDEAS SELECTED IS : </strong>AN APP FOR CORONA & PUBLIC
              AWARENESS DURING CORONA
            </li>
          </UL>
        </li>
      </ul>
    </Cont>
  );
}

export function NationalLevelEvents18_19() {
  return (
    <Cont>
      <H4>EVENTS PARTICIPATION IN 2018-19</H4>
      <ul style={{ listStyle: "none" }}>
        <li>
          <H5>SMART INDIA HACKATHON 2019 (NATIONAL LEVEL HACKATHON)</H5>
          <UL>
            <li>
              <strong>EVENT NAME : </strong>SAMADHAAN ( NATIONAL LEVEL
              HACKATHON)
            </li>
            <li>
              <strong>ORGANISED BY : </strong>AICTE & MIC
            </li>
            <li>
              <strong>LEVEL : </strong>NATIONAL LEVEL
            </li>
            <li>
              <strong>DATE : </strong>2 APRIL-4 APRIL, 2019
            </li>
            <li>
              <strong>TOTAL TEAMS PARTICIPATED : </strong>32
            </li>
            <li>
              <strong>IDEAS SELECTED FOR S/W FINALE : </strong>5
            </li>
            <li>
              <strong>IDEAS SELECTED FOR H/W FINALE : </strong>2
            </li>
            <li>
              <strong>ORGANISATIONS</strong> ISRO,SSEPL SKILLS PVT. LTD, COAL
              INDIA LTD, COGNIZANT, MIND TREE.
            </li>
            <li>
              <strong>IDEAS SELECTED IS : </strong> • VSAT SAARTHI, SAVE
              MEDICINES, SAVE LIFE, TIME TABLE MANAGEMENT, REPOSITORY FOR SPORTS
              PERSON, RESPOSITORY FOR PROJECTS.
            </li>
          </UL>
          <div className="grid three">
            {[
              "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FNational%20Events%2FSIH%202019%2Fphoto.jpg?alt=media&token=27c09b59-fb08-401e-a6b6-de242065809a",

              "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FNational%20Events%2FSIH%202019%2F9.jpg?alt=media&token=528adbad-dfe2-4135-9a36-be40d7e08757",

              "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FNational%20Events%2FSIH%202019%2F8.jpg?alt=media&token=e9f2ab9f-1d84-49aa-af1d-5c4953e37f6f",

              "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FNational%20Events%2FSIH%202019%2F7.jpg?alt=media&token=7869f008-96ef-4540-b224-c152a987cfcb",

              "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FNational%20Events%2FSIH%202019%2F6.jpg?alt=media&token=5866556c-704f-4888-8722-dfe71962c596",

              "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FNational%20Events%2FSIH%202019%2F5.jpg?alt=media&token=e17fd705-20f4-44fa-b32a-cb20fcc611e0",

              "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FNational%20Events%2FSIH%202019%2F4.jpg?alt=media&token=7968f3aa-b532-4125-bbda-5d3ffaad76c0",

              "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FNational%20Events%2FSIH%202019%2F3.jpg?alt=media&token=c22e6e88-dd2c-4ab3-b26b-9e0622f654b5",

              "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/Campus%20Life%2FNational%20Events%2FSIH%202019%2F2.jpg?alt=media&token=0a2d637f-b09c-4810-a647-8a2e3a6c96b2",
            ].map((item) => (
              <img
                key={item}
                src={item}
                alt={item}
                onLoad={(e) => e.target.classList.add("loaded")}
              />
            ))}
          </div>
        </li>

        <li>
          <H5>1 TEAM SELECTED IN BUSINESS HACKATHON FINALE</H5>
          <UL>
            <li>
              <strong>EVENT NAME : </strong>BUSINEESS HACKATHON 2019
              (NATIONALLEVEL HACKATHON)
            </li>
            <li>
              <strong>ORGANISED BY : </strong>ARYA COLLEGE,JAIPUR & RTU
            </li>
            <li>
              <strong>LEVEL : </strong>NATIONAL LEVEL
            </li>
            <li>
              <strong>DATE : </strong>10 FEBRUARY, 2019
            </li>
            <li>
              <strong>TOTAL TEAMS PARTICIPATED : </strong>2
            </li>
            <li>
              <strong>IDEAS SELECTED FOR S/W FINALE : </strong>1
            </li>
          </UL>
        </li>
      </ul>
    </Cont>
  );
}
