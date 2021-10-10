import React from 'react'
import { BannerContainer, BannerHeading, Paragraph, BannerTextContainer } from '../styledComponents/GlobalComponents'
import img from '../../assets/images/college.jpg'
const bgImg = 'https://www.mitrc.ac.in/wp-content/uploads/2020/08/DSC_0002.jpg'

const Banner = ({bannerHeading, bannerDescription}) => {
    return (
        <BannerContainer imageUrl={bgImg}>
            <BannerTextContainer style={{zIndex: 999}}>
                <BannerHeading>{bannerHeading}</BannerHeading>
                <Paragraph color="#FFFFFF">
                    {bannerDescription}
                </Paragraph>
            </BannerTextContainer>
            <div style={{width: '100%', height: '100%', position: 'absolute', backgroundColor: 'rgba(0,0,0,0.6)'}}></div>
        </BannerContainer>
    )
}

export default Banner
