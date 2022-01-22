import styled, {css} from "styled-components";
import {Link} from "react-router-dom";
import {ActData, CSRData, GovtData} from "./data";
import {useState} from "react";

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
  a {
    color: #324a8a;
    text-decoration: none;
    font-weight: 500;
    font-family: serif;
    font-size: 15px;
    line-height: 20px;
    &:hover {
      text-decoration: underline;
    }
  }
`;

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

const Event = styled.div`
  color: #1c2f46;
  border: 1px solid rgba(34, 34, 34, 0.2);
  border-radius: 5px;
  padding: 15px;
  transition: all 0.3s ease 0s;
  margin-top: 20px;
  cursor: pointer;
  user-select: none;
  &:hover {
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  }
  ${({full}) => full && css`
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  `}
  
  .title {
    font-size: 15px;
    line-height: 20px;
    font-family: serif;
    font-weight: 600;
  }
  .text {
    font-size: 14px;
    line-height: 20px;
    font-family: serif;
    font-weight: 500;
    margin: 5px 0;
    transition: all 3s ease;
    ${({ full }) => !full && css`
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      line-clamp: 1;
      -webkit-box-orient: vertical;
    `}
  }
  .foot {
    display: flex;
    justify-content: space-between;
    margin-top: 7px;
  }
  .date, .inst {
    font-size: 14px;
    line-height: 20px;
    font-family: serif;
    font-weight: 500;
    color: #324a8a;
  }
  .inst {
    display: ${({full}) => full ? 'none' : 'flex'};
    align-items: center;
    span {
      margin-left: 2px;
      margin-right: 5px;
      transition: all 0.3s ease;
    }
  }
  &:hover .inst span {
    margin-left: 5px;
    margin-right: 2px;
  }
`;

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
