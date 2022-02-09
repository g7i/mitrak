import React from 'react'
import Banner from "../../../../components/Banner";
import Layout from "../../../../constants/Layout";
import {A, AUrl, Right, Wrapper} from "../../../../components/styledComponents/New";
import {useParams} from "react-router-dom";
import {
  About,
  Academic,
  Achieve, Activities,
  Contact,
  Home,
  Infra,
  Teaching,
  Testimonials,
  Visits,
  VM
} from "./Components";

export default function CE() {
  const {sub: route} = useParams();

  const relatedLinks = {
    home: {
      title: "Home",
      component: <Home/>,
    },
    about: {
      title: 'About',
      component: <About/>,
    },
    vm: {
      title: "Vision and Mission",
      component: <VM/>,
    },
    infrastructure: {
      title: "Infrastructure",
      component: <Infra/>,
    },
    achievements: {
      title: "Achievements and Awards",
      component: <Achieve/>,
    },
    tieups: {
      title: "Academic Tie-ups",
      component: <Academic/>,
    },
    teaching: {
      title: "Teaching and Learning",
      component: <Teaching/>,
    },
    activities: {
      title: "Activities",
      component: <Activities/>,
    },
    visits: {
      title: "Industrial Visits",
      component: <Visits/>,
    },
    testimonials: {
      title: "Testimonials & Success Stories",
      component: <Testimonials/>,
    },
    feedback: {
      title: "Feedback",
      link: 'https://forms.gle/iiCsbakvHozTgiuX9',
    },
    contact: {
      title: "Contact Us",
      component: <Contact/>,
    },
  };

  return (
    <Layout>
      <Banner
        bannerHeading="Department of Civil Engineering"
        bannerDescription={relatedLinks[route]?.title}
        showDescription
      />
      <Wrapper>
        <div className='content'>{relatedLinks[route].component}</div>
        <div className="related">Related Links</div>
        <Right>{
          Object.entries(relatedLinks).map(([k, v]) => (
            v.link ?
              <AUrl href={v.link} active={k === route}>{v.title}</AUrl> :
              <A to={`/academics/departments/ce/${k}`} active={k === route}>{v.title}</A>
          ))
        }</Right>
      </Wrapper>
    </Layout>
  );
}
