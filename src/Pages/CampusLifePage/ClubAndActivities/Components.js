import {Link} from "react-router-dom";
import {ActData, CSRData, GovtData} from "./data";
import {useState} from "react";
import {Cont, Event, H4, PageHead} from "../../../components/styledComponents/New";

const yrs = ["2021-2022", "2020-2021", "2019-2020"];
export function Activities() {
  const [active, setActive] = useState(null);
  const [current, setCurrent] = useState(null);

  return (
    <Cont>
      <PageHead>Session Activities</PageHead>
      <p>
        By activities, students have opportunities to improve their leadership and interpersonal skills while also increasing their self-confidence. Activities involvement allows students to link academic knowledge with practical experience, thereby leading to a better understanding of their own abilities, talents, and career goals. Future employers seek individuals with these increased skill levels, making these involved students more viable in the job market.
      </p>
      <p>
        To develop skills specific to their career path and imperative for future job success, MITRC always carried out various activities.
      </p>
      <H4>Activities By Session</H4>
      <ul>
        {yrs.map(yr => (
          <li onClick={() => setCurrent(yr)} key={yr}>
            <Link to="#">Activity Session {yr}</Link>
          </li>
        ))}
      </ul>
      {!!ActData[current] && (
        <>
          <H4>Activities Session {current}</H4>
          {ActData[current].map(item => (
            <Event
              key={item.id}
              onClick={() => setActive(p => p === item.id ? null : item.id)}
              full={item.id === active}
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

export function Clubs() {
  return (
    <Cont>
      <PageHead>Clubs & Activities</PageHead>
      <p>
        The Society aims to promote synergy among the students and faculties by promoting interactions and exchange of ideas and encourage students to get involved in organizing and coordinating events of interest to its members and others.</p>
      <p>An excellent and well-rounded academic course always includes extra-curricular activities as a part of the main course to provide the students with the essential information as well as a way for them to develop and streamline their various skills, develop their personalities and character.</p>
      <p>To develop the "whole student", activities play a vital role. According to a 1993 article by Alexander Astin, almost any type of student involvement in college positively affects student learning and development.</p>
      <p>Development of the well-rounded individual is a principal goal of extracurricular activities on college and university campuses, the numerous experiences these activities afford positively impact students' emotional, intellectual, social, and inter-personal development.</p>
      <p>We are a non-profit student organization which facilitates the overall development of students by providing them a platform to showcase their talent and sharpen their skills through a variety of planned events and activities.</p>
      <H4>Activities To Improve Skills</H4>
      <ul>
        <li>Conduct Workshops</li>
        <li>Research Paper Publications</li>
        <li>Survey Camps</li>
        <li>Industrial Training & In House Training on Recent Technologies</li>
        <li>Industrial Visits like Research Labs, FAB Labs, ISRO, ARIES, Various Govt./Private Industries & Organisations</li>
      </ul>
      <H4>Activities To Improve Skills</H4>
      <ul>
        <li>Quiz Competition</li>
        <li>Guest Lectures</li>
        <li>Project & Model Competition</li>
        <li>National / International Seminars</li>
      </ul>
      <H4>Extra Curricular Activities</H4>
      <ul>
        <li>Sports / Athletics</li>
        <li>Project & Model Competition</li>
        <li>Picnic / Historic Monuments</li>
      </ul>
    </Cont>
  );
}

export function Govt() {
  const [active, setActive] = useState(null);

  return (
    <Cont>
      <PageHead>Government Initiated Events</PageHead>
      <p>
        The Society aims to promote synergy among the students and faculties by promoting interactions and exchange of ideas and encourage students to get involved in organizing and coordinating events of interest to its members and others.</p>
      <p>An excellent and well-rounded academic course always includes extra-curricular activities as a part of the main course to provide the students with the essential information as well as a way for them to develop and streamline their various skills, develop their personalities and character.</p>
      <H4>Events</H4>
      {GovtData.map(govt => (
        <Event
          key={govt.id}
          onClick={() => setActive(p => p === govt.id ? null : govt.id)}
          full={govt.id === active}
        >
          <div className="title">{govt.title}</div>
          <div className="text">{govt.description}</div>
          <div className="foot">
            <div className="date">{govt.date}</div>
            <div className="inst">Click to read more <span>&gt;&gt;</span></div>
          </div>
        </Event>
      ))}
    </Cont>
  );
}

export function CSR() {
  const [active, setActive] = useState(null);

  return (
    <Cont>
      <PageHead>CSR & NSS Activities</PageHead>
      <p>
        The Society aims to promote synergy among the students and faculties by promoting interactions and exchange of ideas and encourage students to get involved in organizing and coordinating events of interest to its members and others.</p>
      <p>An excellent and well-rounded academic course always includes extra-curricular activities as a part of the main course to provide the students with the essential information as well as a way for them to develop and streamline their various skills, develop their personalities and character.</p>
      <H4>Activities</H4>
      {CSRData.map(csr => (
        <Event
          key={csr.id}
          onClick={() => setActive(p => p === csr.id ? null : csr.id)}
          full={csr.id === active}
        >
          <div className="title">{csr.title}</div>
          <div className="text">{csr.description}</div>
          <div className="foot">
            <div className="date">{csr.date}</div>
            <div className="inst">Click to read more <span>&gt;&gt;</span></div>
          </div>
        </Event>
      ))}
    </Cont>
  );
}
