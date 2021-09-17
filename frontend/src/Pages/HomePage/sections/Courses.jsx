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
import BTechImage from "../../../assets/images/computer.jpeg";
import MTechImage from "../../../assets/images/m.tech.jpeg";
import MbaImage from "../../../assets/images/mba.jpg";

export default function Courses() {
  return (
    <Container>
      <Heading>Courses We Offer</Heading>
      <Wrapper>
        <CardWrapper>
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
        <CardWrapper>
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
        <CardWrapper>
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
