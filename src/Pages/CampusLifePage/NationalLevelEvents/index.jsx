import React, { useState } from "react";
import Banner from "../../../components/Banner";
import Layout from "../../../constants/Layout";
import {
  Cont,
  H4,
  PageHead,
  Wrapper,
} from "../../../components/styledComponents/New";
import { Link } from "react-router-dom";
import {
  NationalLevelEvents18_19,
  NationalLevelEvents19_20,
  NationalLevelEvents20_21,
  NationalLevelEvents21_22,
} from "../EventGallery/Components";

const data = [
  {
    title: "event participation in 2021-22",
    component: <NationalLevelEvents21_22 />,
  },
  {
    title: "event participation in 2020-21",
    component: <NationalLevelEvents20_21 />,
  },
  {
    title: "event participation in 2019-20",
    component: <NationalLevelEvents19_20 />,
  },
  {
    title: "event participation in 2018-19",
    component: <NationalLevelEvents18_19 />,
  },
];

const EventGallery = () => {
  const [sel, setSel] = useState(null);

  const renderItem = (item) => {
    if (!item.sub)
      return (
        <li key={item.title} onClick={() => setSel(item.component)}>
          <Link to="#">{item.title}</Link>
        </li>
      );
    return (
      <li key={item.title}>
        {item.title}
        <ul>{item.sub.map(renderItem)}</ul>
      </li>
    );
  };

  return (
    <Layout>
      <Banner bannerHeading="Events Gallery @MITRC" />
      <Wrapper>
        <Cont className="content full">
          <PageHead>NATIONAL & STATE LEVEL EVENTS PARTICIPATION</PageHead>
          <p>
            Participation in Technical Events at National Level & State Level
            helps in improving the technical skills of students and students
            learn from the challenges which they face during these events .
          </p>
          <p>
            To create a innovative and learning environment for developing the
            technical skills , Students has been motivated by faculties to
            participate in various national level and state level technical
            competition such as Hackathon, Vishwakarma Award , Manthan 2021 etc.
          </p>
          <p>
            The main motto of the participation is to bring students out of
            stage fear and also improve their communication skills. It also
            helps the students to think, create and develop about the real time
            problem’s solutions. It also provides you an opportunity to learn in
            detailed about a core subject which is a part of curriculum and
            develop effective presentation skills.
          </p>
          <p>
            MITRC students participated in many national level and state level
            events like various Hackathons, and got selected in Grand Finale in
            many competitions.
          </p>

          <H4>Followings are</H4>
          <ul>{data.map(renderItem)}</ul>
          {sel}
          {/* <div className="grid three">
            {images.map((item) => (
              <img
                key={item}
                src={item}
                alt={item}
                onLoad={(e) => e.target.classList.add("loaded")}
              />
            ))}
          </div> */}
        </Cont>
      </Wrapper>
    </Layout>
  );
};


export default EventGallery;
