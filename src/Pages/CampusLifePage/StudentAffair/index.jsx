import React from 'react'
import {useParams} from 'react-router-dom';
import Banner from "../../../components/Banner";
import {Abuse, Dress, Id, Medicare, Safety, Student} from "./Components";
import Layout from "../../../constants/Layout";
import {A, Right, Wrapper} from "../../../components/styledComponents/New";

export default function StudentAffair() {
  const {route} = useParams();

  const relatedLinks = {
    medicare: {
      title: "Medicare",
      component: <Medicare />,
    },
    dress: {
      title: 'Dress Code',
      component: <Dress />,
    },
    id: {
      title: "Identity Card",
      component: <Id />,
    },
    student: {
      title: "Student Well Being",
      component: <Student />,
    },
    safety: {
      title: "Safety & Security",
      component: <Safety />,
    },
    abuse: {
      title: "Substance Abuse",
      component: <Abuse />,
    },
  };

  return (
    <Layout>
      <Banner
        bannerHeading="Student Affairs"
        bannerDescription={relatedLinks[route].title}
        showDescription
      />
      <Wrapper>
        <div className='content'>{relatedLinks[route].component}</div>
        <div className="related">Related Links</div>
        <Right>{
          Object.entries(relatedLinks).map(([k, v]) => (
            <A to={`/campus-life/student-affair/${k}`} active={k === route}>{v.title}</A>
          ))
        }</Right>
      </Wrapper>
    </Layout>
  );
}
