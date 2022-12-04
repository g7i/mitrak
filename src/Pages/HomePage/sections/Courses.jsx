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
  'Artificial Intelligence & Data Science (AI & DS)',
  'Artificial Intelligence & Machine Learning (AI & ML)',
  'Computer Science Engineering (CSE)',
  'Civil Engineering (CE)',
  'Electrical Engineering (EE)',
  // 'Electronics & Communication Engineering (ECE)',
  'Mechanical Engineering (ME)',
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
  "MBA from Marketing",
  'MBA from Finance'
]

export default function Courses() {
  return (
    <div className="py-20">
      <div className="text-3xl font-bold text-center">PROGRAMMES OFFERED</div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-11/12 m-auto gap-8 pt-10" >
                <a href="/academics/courses/bTech" className="no-underline">

        <div  className="border-0 rounded-md px-4 m-auto shadow-sm justify-center h-[85vh]" >
          <div className="flex m-auto p-4">
            <a href="/academics/courses/bTech">
            <img
              src={
                "https://images.unsplash.com/photo-1485965373059-f07657e9f841?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3w0OTg0MzIzfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              }
              alt=""
              width="400px"
              height="150px"
              className="border-0 rounded-xl drop-shadow-md "
            />
            </a>
          </div>

          {/* <div>
            <a href="/" className="text-black">Bachelor of Technology</a>
          </div> */}
        {/* <a href="/academics/courses/bTech" className="no-underline"> */}
        <div className="relative px-4 text-left">
          <div className="text-black text-xl text-center font-semibold ">Bachelor Of Technology</div>
          <div className="py-2">
            <ul className="">
              {btech.map((item, index) => (
                <li key={index} className="text-black md:no-underline underline md:decoration-blue-800  text-md hover:underline underline-offset-2 opacity-90">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          </div>
          {/* </a> */}
        </div>
        </a>
        <a href="/academics/courses/mTech" className="border-0 rounded-md px-4 m-auto shadow-sm justify-center h-[85vh] no-underline">
          <div className="flex m-auto p-4">
            <img
              src={
                "https://images.unsplash.com/photo-1485965373059-f07657e9f841?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3w0OTg0MzIzfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              }
              width="400px"
              height="150px"
              className="border-0 rounded-xl drop-shadow-md "
              alt=""
            />
          </div>
          <div className="relative px-4 text-left">
          <div className="text-black text-xl text-center font-semibold ">Master Of Technology</div>
          <div className="py-2">
            <ul className="">
              {mtech.map((item, index) => (
                <li key={index} className="text-black text-md md:no-underline underline md:decoration-blue-800   hover:underline underline-offset-2 opacity-90">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          </div>
        </a>
        <a href="/academics/courses/mba" className="border-0 rounded-md px-4 m-auto shadow-sm justify-center h-[85vh] no-underline">
          <div className="flex m-auto p-4">
            <img
              src={
                "https://images.unsplash.com/photo-1485965373059-f07657e9f841?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3w0OTg0MzIzfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              }
              width="400px"
              height="150px"
              className="border-0 rounded-xl drop-shadow-md "
              alt=""
            />
          </div>
          
          <div className="relative px-4 text-left">
          <div className="text-black text-xl text-center font-semibold ">MBA (In Dual Specialisation)</div>
          <div className="py-2 pl-8">
            <ul className="">
              {mba.map((item, index) => (
                <li key={index} className="text-black text-md md:no-underline underline md:decoration-blue-800  hover:underline underline-offset-2 opacity-90">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          </div>
        </a>
      </div>
    </div>
  );
}
