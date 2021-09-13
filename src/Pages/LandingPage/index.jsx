import React from 'react';
import Carousel from '../../components/Carousel';
import { FullScreenContainer } from '../../components/styledComponents/GlobalComponents';
import Courses from "./sections/Courses";
import News from "./sections/News";
import Placements from "./sections/Placements";

const LandingPage = () => {
    return (
        <FullScreenContainer>
            <Carousel />
            <Courses />
            <News />
            <Placements />
        </FullScreenContainer>
    )
}

export default LandingPage;
