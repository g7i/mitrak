import React from 'react'
import { BannerContainer, BannerHeading, Paragraph, BannerTextContainer } from '../styledComponents/GlobalComponents'
import img from '../../assets/images/college.jpg'
const bgImg = 'https://images.shiksha.com/mediadata/images/1490959076php8M2KKL.jpeg'

const Banner = ({bannerHeading, bannerDescription}) => {
    return (
        <BannerContainer imageUrl={bgImg}>
            <BannerTextContainer>
                <BannerHeading>{bannerHeading}</BannerHeading>
                <Paragraph color="#FFFFFF">
                    {bannerDescription}
                </Paragraph>
            </BannerTextContainer>
        </BannerContainer>
    )
}

export default Banner
