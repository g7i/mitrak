import React, { useEffect, useState } from "react";
import {
  LeftArrowContainer,
  NextIcon,
  PreviousIcon,
  RightArrowContainer,
  Container,
  ItemWrapper,
  NewsBox,
  NewsLink,
} from "../../../components/styledComponents/News";
import CancelIcon from "@mui/icons-material/Cancel";
import { FcDocument } from "react-icons/fc";
import Linkify from 'react-linkify';
import styled from "styled-components";
import {
  FillImage,
  Heading,
  Paragraph,
} from "../../../components/styledComponents/GlobalComponents";
import { Link } from 'react-router-dom'
import { listNews, NewsType } from "../../../utils/firebase/news";
import { Modal } from "@mui/material";
import { impArticles } from './news.data'

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
  const [newsList, setNewsList] = useState([]);
  useEffect(() => {
    try {
      listNews().then((data) => {
        setNewsList(data);
      });
    } catch (error) { }
  }, []);
  return (
    <div className=" py-20 px-[8vw] ">
      {/* <Heading style={{ textAlign: "center" }}>News</Heading>
      <Slider {...settings}>
        {Array.from({ length: 5 }).map((_, i) => (
          <ItemWrapper key={i}>
            <CardWrapper>
              <ImageWrapper>
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
      </Slider> */}
      <div className="text-3xl font-bold text-center mb-10">IMPORTANT UPDATES</div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        <div className="h-[50vh] overflow-hidden shadow-sm rounded-lg">
          <div className="opacity-70 font-semibold bg-white py-2  border-b text-center text-[1rem]" >
            Latest News
          </div>
          <marquee direction = "up" style={{ height: '80%',marginLeft:'4px', marginRight:'4px' }} scrollAmount={5} onMouseEnter={e => e.target.stop?.()} onMouseLeave={e => e.target.start?.()}>
            {newsList
              ?.filter((item) => item.type === "new")
              // .slice(0, 2)
              .map((item) => (
                <NewsComponent
                  news={item}
                  link
                  width={
                    newsList?.filter((item) => item.type == "new").length === 1
                      ? "100%"
                      : "100%"
                  }
                />
              ))}
          </marquee>
          {/*<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>*/}
          {/*  <Link to="/news">*/}
          {/*    <Paragraph >Show More..</Paragraph>*/}
          {/*  </Link>*/}
          {/*</div>*/}
        </div>
        <div className="h-[50vh] overflow-hidden shadow-sm rounded-lg">
          <div className="opacity-70 font-semibold bg-white  py-2 border-b text-center text-[1rem]">
            Useful Links
          </div>
          <marquee direction = "up" style={{ height: '80%',marginLeft:'4px', marginRight:'4px' }} scrollAmount={5} onMouseEnter={e => e.target.stop?.()} onMouseLeave={e => e.target.start?.()}>
            {newsList
              ?.filter((item) => item.type == "usefullLinks")
              .map((item) => (
                <NewsContainer>
                  <a target={"_blank"} href={item.links[0]}>
                    {item.title}
                  </a>
                </NewsContainer>
              ))}
          </marquee>
        </div>
        <div className="h-[50vh] overflow-hidden shadow-sm rounded-lg">
          <div className="opacity-70 font-semibold bg-white py-2  border-b text-center text-[1rem]">
            Important Articles
          </div>
          <marquee direction="up" style={{ height: '80%',marginLeft:'4px', marginRight:'4px' }} scrollAmount={6} onMouseEnter={e => e.target.stop?.()} onMouseLeave={e => e.target.start?.()}>
            <div style={{ pointerEvents: 'none' }}>
              <Linkify>
                <div style={{textAlign: "center", textDecoration: 'underline', color: "brown"}}>GOVERNMENT EDUCATION BODIES</div>
                <pre>{`
          ALL INDIA COUNCIL OF TECHNICAL EDUCATION
          www.aicte-india.org
          
          NATIONAL BOARD OF ACCREDITATION
          https://www.nbaind.org/
          
          MINISTRY OF EDUCATION
          https://www.education.gov.in/
          
          DEPARTMENT OF SCIENCE & TECHNOLOGY
          https://dst.gov.in/
          
          MHRD INNOVATION CELL
          https://www.mic.gov.in/
          
          NITI AAYOG
          http://www.niti.gov.in/
          
          UGC CARE
          https://ugccare.unipune.ac.in/
          
          BTU,BIKANER
          https://www.btu.ac.in/
          
          RTU,KOTA
          https://www.rtu.ac.in/
            `}</pre>
                <div style={{textAlign: "center", textDecoration: 'underline', color: "brown"}}>LINKS FOR STUDENT WELFARE SCHEMES</div>
                <pre>{`
          AICTE J&K PMSS SCHEME
          https://aicte-jk-scholarship-gov.in/
          
          AICTE STUDENT DEVELOPMENT SCHEMES
          https://www.aicte-india.org/schemes/students-development-schemes
          
          AICTE PRAGATI & SAKSHAM SCHOLARSHIP SCHEMES
          https://www.aicte-pragati-saksham-gov.in/
          
          NATIONAL SCHOLARSHIP PORTAL
          https://scholarships.gov.in/
          
          NATIONAL SCHOLARSHIP PORTAL
          https://nsp.gov.in/
          
          SJE SCHOLARSHIP PORTAL-RAJASTHAN
          https://www.sje.rajasthan.gov.in/Scholarship_Portal.aspx
          
          MINISTRY OF MINORITY AFFAIRS
          https://www.minorityaffairs.gov.in/
              `}</pre>
                <div style={{textAlign: "center", textDecoration: 'underline', color: "brown"}}>LINKS FOR STARTUPS/ INNOVATION / NATIONAL LEVEL EVENTS</div>
                <pre>{`
          SMART INDIA HACKATHON-2022
          www.sih.gov.in
          
          MANTHAN- LET’S CODE FOR COUNTRY SECURITY
          www.manthan.gov.in
          
          TOYCATHON
          www.toycathon.gov.in
          
          AICTE VISHWAKARMA AWARD
          https://www.aicte-india.org/AICTE%20Vishwakarma%20Award%2020
          
          INSTITUTE INNOVATION COUNCIL
          https://mic.gov.in/innovation-council/iic
          
          YUKTI 2.0
          http://yukti.mic.gov.in/
          
          MyGov.in
          https://mygov.in/
          
          C-DAC
          https://www.cdac.in/
          
          DIGILOCKER 
          https://www.digilocker.gov.in/
          
          INNOVATION FOR DEFENCE EXCELLENCE 
          https://idex.gov.in/
              `}</pre>
                <div style={{textAlign: "center", textDecoration: 'underline', color: "brown"}}>STUDENTS & FACULTY ONLINE  LEARNING</div>
                <pre>{`
          SWAYAM COURSES 
          https://swayam.gov.in/
         
          NPTEL COURSES
          https://nptel.ac.in/
         
          MOOC
          https://www.mooc.org/
         
          COURSERA
          https://www.coursera.org/
         
          UDEMY
          https://www.udemy.com/
         
          VIRTUAL LAB 
          https://www.vlab.co.in/
         
          MITRC ONLINE LECTURES
          https://www.youtube.com/channel/UCd1f3MgRP_sZjzOGLkTJKfg/featured
         
          ISRO-IIRS
          https://elearning.iirs.gov.in/
         
          ATAL TRAINING & LEARNING ACADEMY
          https://www.aicte-india.org/atal
              `}</pre>
                <div style={{textAlign: "center", textDecoration: 'underline', color: "brown"}}>IMPORTANT COMPETITIVE EXAM LINKS</div>
                <pre>{`
          GATE 2022
          https://gate.iitkgp.ac.in/
          
          STAFF SELECTION COMMISSION
          https://ssc.nic.in/
          
          RAJASTHAN PUBLIC SERVICE COMMISSION
          https://rpsc.rajasthan.gov.in/
          
          UNION PUBLIC SERVICE COMMISSION 
          https://www.upsc.gov.in/
          `}</pre>
                <div style={{textAlign: "center", textDecoration: 'underline', color: "brown"}}>EVENTS INITIATED BY MINISTRY OF EDUCATION</div>
                <pre>{`
          AZADI KA AMRIT MAHOTSAV
          https://www.iitb.ac.in/en/azadi-ka-amrit-mahotsav
          
          EK BHARAT SHRESHTA BHARAT 
          https://www.iitb.ac.in/en/ek-bharat-shreshtha-bharat
          
          INTERNATIONAL YOGA DAY 
          https://www.iitb.ac.in/en/international-yoga-day
          
          CONSTITUTION DAY 
          https://www.iitb.ac.in/en/constitution-day
          
          FIT INDIA PROGRAMME
          https://www.iitb.ac.in/en/fit-india-programme
          
          NATIONAL EDUCATION POLICY
          https://www.iitb.ac.in/en/national-education-policy
          `}</pre>
                <div style={{textAlign: "center", textDecoration: 'underline', color: "brown"}}>PARIKSHA PE CHARCHA</div>
                <img
                  style={{
                    width: '60%',
                    marginTop: '10px',
                    objectFit: 'contain',
                    margin: 'auto',
                    display: 'block',
                  }}
                  src="https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2FHome%20Page%2FPPC_2022.jpg?alt=media&token=8b3efbf5-e06e-40ef-846c-19f8bc8818c0"
                  alt="" />
                <pre>{`
          https://innovateindia.mygov.in/ppc-2022/
              `}</pre>
                <div style={{textAlign: "center", textDecoration: 'underline', color: "brown"}}>ADVISORY ON COVID 19</div>
                <pre>{`
          http://www.rajswasthya.nic.in/
              `}</pre>
                <div style={{textAlign: "center", textDecoration: 'underline', color: "brown"}}>CYBER CRIME REPORTING</div>
                <pre>{`
          https://cybercrime.gov.in/
              `}</pre>
                <div style={{textAlign: "center", textDecoration: 'underline', color: "brown"}}>AICTE ONLINE FEEDBACK</div>
                <pre>{`
          https://www.aicte-india.org/feedback/index.php
              `}</pre>
              </Linkify>
            </div>
            {/*{impArticles*/}
            {/*    .map((item) => (*/}
            {/*        <NewsContainer key={item.link}>*/}
            {/*          /!*<Paragraph>Title:</Paragraph>*!/*/}
            {/*          /!*<a target={"_blank"} href={item.link>*!/*/}
            {/*          /!*  {item.link}*!/*/}
            {/*          /!*</a>*!/*/}
            {/*          <Paragraph>{item.label}</Paragraph>*/}
            {/*          <a target={item.link} href={item.link}>{item.link}</a>*/}
            {/*        </NewsContainer>*/}
            {/*    ))}*/}
          </marquee>
        </div>
      </div>
    </div>
  );
}

export const NewsComponent = (props) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const { news, width } = props;
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalBodyWrapper>
          <ModalBodySecondWrapper>
            <img src={news.image}  />
            <h3>{news.title}</h3>
            <h5>{news.description}</h5>
            {news.links?.map((item) => (
              <div className={"document-link-div"}>
                <FcDocument size={50} />
                <a href={item} target={"_blank"}>
                  {item}
                </a>
              </div>
            ))}
            <CloseIcon fontSize={"large"} onClick={handleClose} />
          </ModalBodySecondWrapper>
        </ModalBodyWrapper>
      </Modal>

      {props.link ? (
        <NewsContainer>
          <a target={"_blank"} href="#" onClick={(e) => {
            e.preventDefault();
            setOpen(true)
          }}>
            {news.title}
          </a>
        </NewsContainer>
      ) : (
        <NewNewsWrapper width={width}>
          <div>
            <FillImage src={news.image} />
            <h3>{news.title}</h3>
            <h5>{news.description}</h5>
            <h5 className="read-more" onClick={() => setOpen(true)}>
              Read More
            </h5>
          </div>
        </NewNewsWrapper>
      )}
    </>
  );
};

const NewNewsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`;
const ModalBodyWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

const ModalBodySecondWrapper = styled.div`
  background-color: white;
  width: 90%;
  max-width: 600px;
  padding: 50px;
  position: relative;
  img {
    height: 200px;
    max-width: 90%;
    background-color: dimgrey;
    margin-bottom: 0;
  }
  h2,
  h3,
  h5 {
    margin: 0;
    padding: 0;
  }
  .document-link-div {
    display: flex;
    align-items: center;
    a {
      max-width: 100%;
      overflow: hidden;
    }
  }
`;

const NewNewsWrapper = styled.div`
  width: ${(props) => props.width || "50%"};
  display: flex;
  justify-content: center;
  div {
    width: 90%;
    img {
      height: 200px;
      background-color: dimgrey;
      margin-bottom: 0;
    }
    h2,
    h3,
    h5 {
      margin: 0;
      padding: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2; /* number of lines to show */
      line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .read-more {
      color: #e49c18;
      cursor: pointer;
    }
  }
`;

const CloseIcon = styled(CancelIcon)`
  position: absolute;
  color: black;
  top: 0px;
  right: 0px;
  &:hover {
    color: blue;
  }
`;

const NewsContainer = styled.div`
  width: 100%;
  /* margin: 0 auto; */
  a {
    font-size: 1rem;
    margin: 10px 0;
    /* display: block; */
    text-decoration: none;
  }
`;
