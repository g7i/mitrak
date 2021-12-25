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
      <Heading style={{ textAlign: "center" }}>Courses We Offer</Heading>
      <Wrapper>
        <CardWrapper href="/academics/courses/b.tech">
          <ImageWrapper>
            <CardImage
              src={
                "https://www.bmu.edu.in/wp-content/uploads/2017/05/dual-specialisation-in-BTech-810x540.jpg"
              }
            />
          </ImageWrapper>
          <CardTitle>Bachelors of Technology</CardTitle>
          <CardContent>
            <ul>
              <li>AI & DS</li>
              <li>Civil</li>
              <li>Computer Science</li>
              <li>Mechanical</li>
              <li>Electrical</li>
            </ul>
          </CardContent>
        </CardWrapper>
        <CardWrapper href="/academics/courses/m.tech">
          <ImageWrapper>
            <CardImage
              src={
                "https://leverageedu.com/blog/wp-content/uploads/2020/03/Types-of-Research-Design.jpg"
              }
            />
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
            <CardImage
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpVY4-a9s00pYmU8D9Hfw-s0wxQle-XeJ15A&usqp=CAU"
              }
            />
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
