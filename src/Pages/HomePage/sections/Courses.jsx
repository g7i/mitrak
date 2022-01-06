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

const btech = [
  'Artificial Intelligence & Data Science Engineering (AI & DS)',
  'Computer Science Engineering (CSE)',
  'Civil Engineering (CE)',
  'Electrical Engineering (EE)',
  'Electronics & Communication Engineering (ECE)',
  'Mechanical Engineering (ME)'
]

const mtech = [
  'Specialization in Computer Science Engineering',
  'Specialization in Digital Communication',
  'Specialization in Production Engineering'
]

const mba = [
  'MBA from Human Resource',
  'MBA from Finance'
]

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
              {
                btech.map((item, index) => (
                    <li key={index}>{item}</li>
                ))
              }
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
            <ul>
              {
                mtech.map((item, index) => (
                    <li key={index}>{item}</li>
                ))
              }
            </ul>
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
            <ul>
              {
                mba.map((item, index) => (
                    <li key={index}>{item}</li>
                ))
              }
            </ul>
          </CardContent>
        </CardWrapper>
      </Wrapper>
    </Container>
  );
}
