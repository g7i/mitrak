import React from "react";
import Slider from "react-slick";

import {
  CardContent,
  CardImage,
  CardTitle,
  CardWrapper,
  ImageWrapper,
} from "../../../components/styledComponents/Courses";
import {
  LeftArrowContainer,
  NextIcon,
  PreviousIcon,
  RightArrowContainer,
  Container,
  ItemWrapper,
  NewsBox,
  NewsLink,
  NewsContainer,
} from "../../../components/styledComponents/News";
import { Heading } from "../../../components/styledComponents/GlobalComponents";
import { NewsImage } from "../component";

const SlickArrowRight = ({ onClick, className }) => {
  if (className.includes("slick-disabled")) return null;
  return (
    <RightArrowContainer onClick={onClick}>
      <NextIcon />
    </RightArrowContainer>
  );
};

const SlickArrowLeft = ({ onClick, className }) => {
  if (className.includes("slick-disabled")) return null;
  return (
    <LeftArrowContainer onClick={onClick}>
      <PreviousIcon />
    </LeftArrowContainer>
  );
};

const settings = {
  infinite: false,
  speed: 200,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <SlickArrowRight />,
  prevArrow: <SlickArrowLeft />,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export default function News() {
  return (
    <Container>
      <Heading style={{ textAlign: 'center' }}>News</Heading>
      <Slider {...settings}>
        {Array.from({ length: 5 }).map((_, i) => (
          <ItemWrapper key={i}>
            <CardWrapper>
              <ImageWrapper>
                {/* <CardImage
                                    src="https://images.unsplash.com/photo-1631430411956-44b72ddb0ee0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"/> */}
                <NewsImage
                  imageUrl={
                    "https://images.unsplash.com/photo-1631430411956-44b72ddb0ee0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  }
                />
              </ImageWrapper>
              <CardTitle>Faculty of Science</CardTitle>
              <CardContent>
                Integer efficitur tellus metus, sed feugiat leo posuere ac.
                Morbi vitae tincidunt mi, et malesuada massa. Sed blandit
                placerat elit sit amet condimentum.
              </CardContent>
            </CardWrapper>
          </ItemWrapper>
        ))}
      </Slider>
      <Heading style={{ textAlign: 'center' }}>Important Links</Heading>
      <Container style={{ display: 'flex', justifyContent: 'space-between' }}>
          <NewsBox> 
            <Heading style={{fontSize: '1.4rem', textAlign: 'center'}}>Top Stories of the week</Heading>
            <NewsContainer>
              <NewsLink href="#">New placement season started for year 2021</NewsLink>
              <iframe src="https://giphy.com/embed/V2lvxrRTfwYmljPY9y" width='40' height="30" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
            </NewsContainer>
            <NewsContainer>
              <NewsLink href="#">placement new 2021</NewsLink>
              <iframe src="https://giphy.com/embed/V2lvxrRTfwYmljPY9y" width='40' height="30" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
            </NewsContainer>
            <NewsContainer>
              <NewsLink href="#">placement new 2021</NewsLink>
              <iframe src="https://giphy.com/embed/V2lvxrRTfwYmljPY9y" width='40' height="30" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
            </NewsContainer>
            <NewsContainer>
              <NewsLink href="#">placement new 2021</NewsLink>
              <iframe src="https://giphy.com/embed/V2lvxrRTfwYmljPY9y" width='40' height="30" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
            </NewsContainer>
            <NewsContainer>
              <NewsLink href="#">placement new 2021</NewsLink>
              <iframe src="https://giphy.com/embed/V2lvxrRTfwYmljPY9y" width='40' height="30" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
            </NewsContainer>
          </NewsBox>
          <NewsBox> 
            <Heading style={{fontSize: '1.4rem', textAlign: 'center'}}>Placement News</Heading>
            <NewsContainer>
              <NewsLink href="#">New placement season started for year 2021</NewsLink>
              <iframe src="https://giphy.com/embed/V2lvxrRTfwYmljPY9y" width='40' height="30" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
            </NewsContainer>
            <NewsContainer>
              <NewsLink href="#">placement new 2021</NewsLink>
              <iframe src="https://giphy.com/embed/V2lvxrRTfwYmljPY9y" width='40' height="30" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
            </NewsContainer>
            <NewsContainer>
              <NewsLink href="#">placement new 2021</NewsLink>
              <iframe src="https://giphy.com/embed/V2lvxrRTfwYmljPY9y" width='40' height="30" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
            </NewsContainer>
          </NewsBox>
          <NewsBox> 
            <Heading style={{fontSize: '1.4rem', textAlign: 'center'}}>Student Activities</Heading>
            <NewsContainer>
              <NewsLink href="#">Cultural fest 2021 auditions going on</NewsLink>
              <iframe src="https://giphy.com/embed/V2lvxrRTfwYmljPY9y" width='40' height="30" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
            </NewsContainer>
            <NewsContainer>
              <NewsLink href="#">field trip to be going on the coming wednesday</NewsLink>
              <iframe src="https://giphy.com/embed/V2lvxrRTfwYmljPY9y" width='40' height="30" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
            </NewsContainer>
            <NewsContainer>
              <NewsLink href="#">Exam forms are available now for odd sems</NewsLink>
              <iframe src="https://giphy.com/embed/V2lvxrRTfwYmljPY9y" width='40' height="30" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
            </NewsContainer>
          </NewsBox>
      </Container>

    </Container>
  );
}
