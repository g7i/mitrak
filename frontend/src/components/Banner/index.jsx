import React from 'react'
import { BannerContainer, BannerHeading, Paragraph, BannerTextContainer } from '../styledComponents/GlobalComponents'
import img from '../../assets/images/college.jpg'
const bgImg = 'https://images.unsplash.com/photo-1631651738552-54f2b2be3e40?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=925&q=80'

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
