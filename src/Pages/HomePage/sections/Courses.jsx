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
  // 'Electronics & Communication Engineering (ECE)',
  'Mechanical Engineering (ME)'
]

const mtech = [
  'M.Tech in Computer Science & Engineering',
  // 'M.Tech in Digital Communication',
  'M.Tech in Production Engineering'
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
                "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2Fcourses%2FEngineering-Courses-After-12th.jpg?alt=media&token=2161e519-77ff-4c74-a374-287b5295c3f7"
              }
            />
          </ImageWrapper>
          <CardTitle>Bachelor Of Technology</CardTitle>
          <CardContent>
            <ul>
              {btech.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </CardContent>
        </CardWrapper>
        <CardWrapper href="/academics/courses/m.tech">
          <ImageWrapper>
            <CardImage
              src={
                "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2Fcourses%2F4a38ff96-f980-4399-8d9c-11331229fc47.png?alt=media&token=e25aed6b-fd91-4870-803f-f52a88594f91"
              }
            />
          </ImageWrapper>
          <CardTitle>Master Of Technology</CardTitle>
          <CardContent>
            <ul>
              {mtech.map((item, index) => (
                <li key={index} style={{ textTransform: "none" }}>
                  {item}
                </li>
              ))}
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
              {mba.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </CardContent>
        </CardWrapper>
      </Wrapper>
    </Container>
  );
}
