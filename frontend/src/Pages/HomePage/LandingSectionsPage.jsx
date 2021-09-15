import React from 'react';
import Courses from "./sections/Courses";
import News from "./sections/News";
import Placements from "./sections/Placements";
import AboutUsSection from './sections/AboutUsSection';

const LandingPage = () => {
    return (
        <>
            <AboutUsSection />
            <Courses />
                <News />
            <Placements />
        </>
    )
}

export default LandingPage;
