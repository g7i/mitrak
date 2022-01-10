import React from "react";
import Banner from "../../components/Banner";
import Layout from "../../constants/Layout";
import {Link, useParams} from "react-router-dom";
import {
  About,
  Activities,
  CRT,
  GovtSelection,
  Internship,
  Journey,
  PlacementNews,
  PlacementStatistics,
  Recruiters,
  SoftSkills,
  StudentPlacements,
  Testimonials
} from "./Components";
import styled, {css} from "styled-components";

const PlacementPage = () => {
  const { routename = 'about' } = useParams();

  const relatedLinks = {
    about: {
      title: 'About T&P Cell',
      component: <About />,
    },
    crt: {
      title: "Campus Recruitment Training",
      component: <CRT />,
    },
    softSkills: {
      title: "Soft Skills",
      component: <SoftSkills />,
    },
    internship: {
      title: "Internship & Mou’s with Industries",
      component: <Internship />,
    },
    recruiters: {
      title: "Our Recruiters",
      component: <Recruiters />,
    },
    journey: {
      title: "Journey of Student in T&P Cell",
      component: <Journey />,
    },
    activities: {
      title: "Placement Activities",
      component: <Activities />,
    },
    placement: {
      title: "Student Placement",
      component: <StudentPlacements />,
    },
    govtSelection: {
      title: "Government Selection",
      component: <GovtSelection />,
    },
    news: {
      title: "Placement News & Job Notification",
      component: <PlacementNews />,
    },
    statistics: {
      title: "Placement Statistics",
      component: <PlacementStatistics />,
    },
    testimonials: {
      title: "Testimonials",
      component: <Testimonials />,
    },
  };

  return (
    <Layout>
      <Banner
        bannerHeading="Training and Placement Cell"
        bannerDescription={relatedLinks[routename].title}
        showDescription
      />
      <Cont>
        <div className='content'>{relatedLinks[routename].component}</div>
        <div className="related">Related Links</div>
        <Right>{
          Object.entries(relatedLinks).map(([k, v]) => (
            <A to={`/placements/${k}`} active={k === routename}>{v.title}</A>
          ))
        }</Right>
      </Cont>
    </Layout>
  );
};

export default PlacementPage;

const Cont = styled.div`
  display: flex;
  justify-content: center;
  .content {
    max-width: 770px;
  }
  .related {
    display: none;
  }
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    .content {
      max-width: unset;
      width: 90%;
    }
    .related {
      display: block;
    }
  }
`;

const Right = styled.aside`
  border-left: 1px solid #d9d9d9;
  padding-left: 23px;
  display: flex;
  flex-direction: column;
  width: 20%;
  flex-grow: 0;
  margin: 50px 0 20px 25px;
  height: fit-content;
  @media screen and (max-width: 1024px) {
    width: 90%;
    padding-left: 0;
    border: none;
    margin-left: 0;
    margin-top: 20px;
  }
`;

const A = styled(Link)`
  color: white;
  background-color: #324a8a;
  text-decoration: none;
  user-select: none;
  padding: 10px 12px;
  line-height: 16px;
  font-size: 12px;
  min-height: 35px;
  display: grid;
  align-items: center;
  transition: all 0.2s linear;
  border: 1px solid white;
  &:hover {
    background-color: white;
    color: #324a8a;
    border: 1px solid #324a8a;
  }
  ${({active}) => active && css`
    background-color: white;
    color: #324a8a;
    border: 1px solid #324a8a;
  `}
`;
