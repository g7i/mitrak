import React from 'react'
import { BannerContainer, BannerHeading, Paragraph, BannerTextContainer } from '../styledComponents/GlobalComponents'
import img from '../../assets/images/college.jpg'
const bgImg = 'https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2F2020-8%2FDSC_0002.jpg?alt=media&token=6e33af7a-8a36-404d-be62-78f21b526173'

const Banner = ({bannerHeading, bannerDescription}) => {
    return (
        <BannerContainer imageUrl={bgImg}>
            <BannerTextContainer style={{zIndex: 999}}>
                <BannerHeading>{bannerHeading}</BannerHeading>
                <Paragraph color="#FFFFFF">
                    {/* {bannerDescription} */}
                </Paragraph>
            </BannerTextContainer>
            <div style={{width: '100%', height: '100%', position: 'absolute', backgroundColor: 'rgba(0,0,0,0.6)'}}></div>
        </BannerContainer>
    )
}

export default Banner
