import React from 'react';
import ExploreMore from '../../components/ExploreMore/ExploreMore';
import Courses from "./sections/Courses";
import News from "./sections/News";
import Placements from "./sections/Placements";
import AboutUsSection from './sections/AboutUsSection';
import StudentsPlaced from './sections/StudentsPlaced';
import ApplyForAdmission from '../../components/Banner/ApplyForAdmission';
import Testimonials from './sections/Testimonials';
import { Heading } from '../../components/styledComponents/GlobalComponents';

const LandingPage = () => {
  return (
    <>
      <AboutUsSection />
      <Courses />
      {/* <ExploreMore /> */}
      {/*<Placements />*/}
      {/*<StudentsPlaced />*/}
      <News />
      {/*<div style={{ textAlign: 'center', marginBottom: '2rem' }}>*/}
      {/*  <Heading>Testimonials</Heading>*/}
      {/*</div>*/}
      {/*<Testimonials />*/}
      <ApplyForAdmission />
    </>
  );
}

export default LandingPage;
