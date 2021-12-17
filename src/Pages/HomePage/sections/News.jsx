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

import styled from "styled-components";
import {
  FillImage,
  Heading,
  Paragraph,
} from "../../../components/styledComponents/GlobalComponents";
import { Link } from 'react-router-dom'
import { listNews, NewsType } from "../../../utils/firebase/news";
import { Modal } from "@mui/material";

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
    <Container>
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
      <Heading style={{ textAlign: "center" }}>Important Update</Heading>
      <Container style={{ display: "flex", justifyContent: "space-between" }}>
        <NewsBox>
          <Heading style={{ fontSize: "1.4rem", textAlign: "center" }}>
            Latest News
          </Heading>
          <NewNewsContainer>
            {newsList
              ?.filter((item) => item.type == "new")
              .slice(0, 2)
              .map((item) => (
                <NewsComponent
                  news={item}
                  width={
                    newsList?.filter((item) => item.type == "new").length === 1
                      ? "100%"
                      : "50%"
                  }
                />
              ))}
          </NewNewsContainer>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Link to="/news">
              <Paragraph >Show More..</Paragraph>
            </Link>
          </div>
        </NewsBox>
        <NewsBox>
          <Heading style={{ fontSize: "1.4rem", textAlign: "center" }}>
            Useful Links
          </Heading>
          {newsList
            ?.filter((item) => item.type == "usefullLinks")
            .map((item) => (
              <NewsContainer>
                <a target={"_blank"} href={item.links[0]}>
                  {item.title}
                </a>
              </NewsContainer>
            ))}
        </NewsBox>
      </Container>
    </Container>
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
            <img src={news.image} />
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
      max-width: 80%;
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
  width: 90%;
  margin: 0 auto;
  a {
    font-size: 1.5rem;
  }
`;
