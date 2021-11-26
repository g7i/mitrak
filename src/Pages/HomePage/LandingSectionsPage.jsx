import React from 'react';
import ExploreMore from '../../components/ExploreMore/ExploreMore';
import Courses from "./sections/Courses";
import News from "./sections/News";
import Placements from "./sections/Placements";
import AboutUsSection from './sections/AboutUsSection';
import StudentsPlaced from './sections/StudentsPlaced';
import ApplyForAdmission from '../../components/Banner/ApplyForAdmission';

const LandingPage = () => {
    return (
        <>
            <AboutUsSection />
            <Courses />
            <ExploreMore />
                <News />
            <Placements />
            <StudentsPlaced />
            <ApplyForAdmission />
        </>
    )
}

export default LandingPage;
