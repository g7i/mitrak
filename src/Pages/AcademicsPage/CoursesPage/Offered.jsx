import React from 'react'
import Banner from "../../../components/Banner";
import Layout from "../../../constants/Layout";
import {A, Cont, H3, H4, PageHead, Right, Wrapper} from "../../../components/styledComponents/New";
import {useParams} from "react-router-dom";
import {BTech, MBA, MTech} from "./Components";

export default function Offered() {
  const {route} = useParams();

  const relatedLinks = {
    bTech: {
      title: "B. Tech",
      component: <BTech/>,
    },
    mTech: {
      title: 'M. Tech',
      component: <MTech/>,
    },
    mba: {
      title: "MBA",
      component: <MBA/>,
    },
  };

  let content = (
    <Cont>
      <PageHead>Programmes Offered</PageHead>
      <p>
        As technology and management playing a vital role in society, industries and human life, this makes
        B.TECH/M.TECH/MBA as a popular career choice for many students. Further, the growth of specialised areas
        like Big Data, Cloud Computing, Artificial Intelligence, Cyber Security , Machine Learning, IOT, Robotics,
        Electric Vehicle has increased the demand of technical courses. Keeping all perspective of career of
        students, we offered following programmes.
      </p>
      <H3>Under Graduate Programme</H3>
      <H4>B.Tech.(Bachelor of Technology) - Duration: 4 Yrs</H4>
      <ul>
        {[
          "B.Tech in Artificial Intelligence & Data Science (UG)",
          "B.Tech in Computer Science Engineering (UG)",
          "B.Tech in Civil Engineering (UG)",
          "B.Tech in Electrical Engineering (UG)",
          "B.Tech in Mechanical Engineering (UG)",
        ].map(f => <li key={f}>{f}</li>)}
      </ul>
      <br/>
      <H3>Post Graduate Programme</H3>
      <H4>M.Tech.(Master of Technology) - Duration: 2 Yrs</H4>
      <ul>
        <li>M.Tech in Computer Science Engineering (PG)</li>
        <li>M.Tech in Production Engineering (PG)</li>
      </ul>
      <H4>M.B.A.(Master of Business Administration) - Duration: 2 Yrs</H4>
      <ul>
        <li>MBA in HR/Finance/Marketing (PG)</li>
      </ul>
      <br/>
      <p className="filled">
        &#9658; As the recent technology market like AI, ML is growing rapidly, so as per demand of industries and
        market , we also applied the approval process for new course : <strong>B.Tech in Artificial Intelligence &
        Machine Learning</strong>.
      </p>
    </Cont>
  );
  if (relatedLinks[route]?.component) content = relatedLinks[route].component;

  return (
    <Layout>
      <Banner
        bannerHeading="Programmes Offered"
        bannerDescription={relatedLinks[route]?.title}
        showDescription
      />
      <Wrapper>
        <div className='content'>{content}</div>
        <div className="related">Related Links</div>
        <Right>{
          Object.entries(relatedLinks).map(([k, v]) => (
            <A to={`/academics/courses/${k}`} active={k === route}>{v.title}</A>
          ))
        }</Right>
      </Wrapper>
    </Layout>
  );
}
