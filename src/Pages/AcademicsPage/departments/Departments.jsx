import React from 'react'
import Banner from "../../../components/Banner";
import Layout from "../../../constants/Layout";
import {A, Cont, H3, H4, PageHead, Right, Wrapper} from "../../../components/styledComponents/New";
import {Link, useParams} from "react-router-dom";
import {CSE, EC, EE, CE, ME} from "./Components";

export default function Departments() {
  const {route} = useParams();

  const relatedLinks = {
    cse: {
      title: "Computer Science & Engineering",
      component: <CSE/>,
    },
    ee: {
      title: 'Electrical Engineering',
      component: <EE/>,
    },
    ec: {
      title: "Electronics & Communication",
      component: <EC/>,
    },
    ce: {
      title: "Civil Engineering",
      component: <CE/>,
    },
    me: {
      title: "Mechanical Engineering",
      component: <ME/>,
    },
    // ms: {
    //   title: "Management Studies",
    //   component: <CSE/>,
    // },
  };

  let content = (
    <Cont>
      <PageHead>Academic Departments</PageHead>
      <p>
        Several Departments of MITRC offering various UG & PG programmes in technical & management filed with excellence academics .
      </p>
      <H4>Departments</H4>
      <ul>
        {[
          "Computer Science & Engineering",
          "Electrical Engineering",
          "Electronics & Communication",
          "Civil Engineering",
          "Mechanical Engineering",
          // "Management Studies",
        ].map((f, i) => (
          <li key={f}>
            <Link to={`/academics/departments/${Object.keys(relatedLinks)[i]}`}>{f}</Link>
          </li>
        ))}
      </ul>
      <br/>
    </Cont>
  );
  if (relatedLinks[route]?.component) content = relatedLinks[route].component;

  return (
    <Layout>
      <Banner
        bannerHeading="Academic Departments"
        bannerDescription={relatedLinks[route]?.title}
        showDescription
      />
      <Wrapper>
        <div className='content'>{content}</div>
        <div className="related">Related Links</div>
        <Right>{
          Object.entries(relatedLinks).map(([k, v]) => (
            <A to={`/academics/departments/${k}`} active={k === route}>{v.title}</A>
          ))
        }</Right>
      </Wrapper>
    </Layout>
  );
}
