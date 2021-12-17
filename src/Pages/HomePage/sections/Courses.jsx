import React from "react";
import {
  CardContent,
  CardImage,
  CardTitle,
  CardWrapper,
  Container,
  ImageWrapper,
  Wrapper,
} from "../../../components/styledComponents/Courses";
import { Heading } from "../../../components/styledComponents/GlobalComponents";
import BTechImage from "../../../assets/images/btech.webp";
import MTechImage from "../../../assets/images/mtech.jpg";
import MbaImage from "../../../assets/images/mba.png";
import { Link } from 'react-router-dom'

export default function Courses() {
  return (
    <Container>
      <Heading style={{ textAlign: 'center' }}>Courses We Offer</Heading>
      <Wrapper>
        <CardWrapper href="/academics/courses/b.tech">
          <ImageWrapper>
            <CardImage src={BTechImage} />
          </ImageWrapper>
          <CardTitle>Bachelors of Technology</CardTitle>
          <CardContent>
            Bachelor of Technology (BTech) is a professional undergraduate
            engineering degree programme awarded to candidates after they
            complete four years of study in the field. Engineering is one of the
            most popular courses in India and there are many institutes that
            offer the course to aspiring students.
          </CardContent>
        </CardWrapper>
        <CardWrapper href="/academics/courses/m.tech">
          <ImageWrapper>
            <CardImage src={MTechImage} />
          </ImageWrapper>
          <CardTitle>Masters of Technology</CardTitle>
          <CardContent>
            MTech is a professional postgraduate engineering master degree
            programme awarded to candidates after completion of two years of
            study in the discipline of engineering. This degree is predicated in
            a specific branch of engineering.
          </CardContent>
        </CardWrapper>
        <CardWrapper href="/academics/courses/mba">
          <ImageWrapper>
            <CardImage src={MbaImage} />
          </ImageWrapper>
          <CardTitle>MBA</CardTitle>
          <CardContent>
            he MBA (Master of Business Administration) is an internationally
            recognised and geographically portable post-graduate,
            post-experience academic course in a number of subjects that
            together can be said to constitute the science of management.
          </CardContent>
        </CardWrapper>
      </Wrapper>
    </Container>
  );
}
