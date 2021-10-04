import React from 'react'
import {
    ExploreIcon,
  ExploreMoreContainer,
  ExploreText,
} from "../styledComponents/ExploreMore";

const ExploreMore = () => {
    return (
        
            <ExploreMoreContainer href="/academics/courses">
                <ExploreText>
                    Explore More
                </ExploreText>
                <ExploreIcon />
            </ExploreMoreContainer>
    )
}

export default ExploreMore
