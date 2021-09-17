import React from 'react';
import Carousel from '../../components/Carousel';
import ExploreMore from '../../components/ExploreMore/ExploreMore';
import { FullScreenContainer } from '../../components/styledComponents/GlobalComponents';
import Courses from "./sections/Courses";
import News from "./sections/News";
import Placements from "./sections/Placements";

const LandingPage = () => {
    return (
        <>
            <Courses />
            <ExploreMore />
                <News />
            <Placements />
        </>
    )
}

export default LandingPage;
