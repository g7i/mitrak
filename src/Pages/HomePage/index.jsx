import React from 'react';
import Carousel from '../../components/Carousel';
// import Carousel1 from "../../components/Carousel/carousel";
import { FullScreenContainer } from '../../components/styledComponents/GlobalComponents';

const LandingPage = () => {
    return (
        <div className='m-auto justify-center'>
        <FullScreenContainer>
            <Carousel />
            {/* <Carousel1/> */}
        </FullScreenContainer>
        </div>
    )
}

export default LandingPage;
