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
  // 'Artificial Intelligence & Data Science Engineering (AI & DS)',
  'Computer Science Engineering (CSE)',
  'Civil Engineering (CE)',
  'Electrical Engineering (EE)',
  // 'Electronics & Communication Engineering (ECE)',
  'Mechanical Engineering (ME)',
  'Artificial Intellegence',
  'Machine Learning'
  // 'Electronics & Communication (EC)',
]

const links = [
  '/academics/departments/cse/home',
  '/academics/departments/ce/home',
  '/academics/departments/ee/home',
  '/academics/departments/me/home',
  '/academics/departments/ec/home',
];

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
      <Heading style={{ textAlign: "center" }}>PROGRAMMES OFFERED</Heading>
      <Wrapper>
        <CardWrapper href="/academics/courses/bTech">
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
                <li key={index}>
                  <p to={links[index]}>{item}</p>
                </li>
              ))}
            </ul>
          </CardContent>
        </CardWrapper>
        <CardWrapper href="/academics/courses/mTech">
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
                "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2F83c5a222-3b75-44c0-bc74-d6a469c52194.jpg?alt=media&token=bb1025d2-defb-4fd8-8056-b0c5a9c111e4"
              }
            />
          </ImageWrapper>
          <CardTitle>MBA (In Dual Specialisation)</CardTitle>
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
