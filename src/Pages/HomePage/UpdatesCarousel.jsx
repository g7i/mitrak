import React, {useCallback, useState} from "react";
import {Container, Heading,} from "../../components/styledComponents/GlobalComponents";
import {getHomeSlider} from "../../utils/firebase/db";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Slider from "react-slick";

import {
  LeftArrowContainer,
  NextIcon,
  PreviousIcon,
  RightArrowContainer
} from "../AcademicsPage/departments/components/imageSlider";
import styled from "styled-components";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70vw",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  scrollY: true,
};

const DataCard = ({ item, handleOnItemClick }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    handleOnItemClick();
    setOpen(true);
  }
  const handleClose = () => setOpen(false);
  return (
    <>
      <Div onClick={handleOpen}>
        <div className="imgBox">
          <img src={item.Photo} />
        </div>
        <h5>{item.Name}</h5>
      </Div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          onClick={handleClose}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            height: "100vh",
            width: "100vw",
            backgroundColor : "#00000070",
          }}
        >
          <img
            src={item.Photo}
            style={{ height: "80vh", margin: "auto", width: '100vw', objectFit: 'contain' }}
            onClick={handleOpen}
          />

          <Box
            style={{
              background: "white",
              width: "100%",
              textAlign: "center",
              height: "15vh",
            }}
          >
            <Typography id="modal-modal-title" variant="h4" component="h2" marginTop={2}>
              {item.Name}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {item.Description}
            </Typography>
          </Box>
          <span
            style={{
              position: "absolute",
              top: 10,
              right: 10,
              fontSize: "40px",
              cursor: "pointer",
              color: "white",
            }}
            onClick={handleClose}
          >
              X
            </span>
        </Box>
      </Modal>
    </>
  );
};

const UpdatesCarousel = () => {
  const [data, setData] = React.useState([]);
  const [swiped, setSwiped] = useState(false)

  const handleSwiped = useCallback(() => {
    setSwiped(true)
  }, [setSwiped])

  const handleOnItemClick = useCallback(
    (e) => {
      if (swiped) {
        e.stopPropagation()
        e.preventDefault()
        setSwiped(false)
      }
    },
    [swiped],
  )

  React.useEffect(() => {
    (async () => {
      const datas = await getHomeSlider();
      setData(datas);
    })();
  }, []);

  return (
    <Container style={{ padding: '0 5vw' }}>
      <Heading style={{ textAlign: "center" }}>
        RECENT COLLEGE ACTIVITIES
      </Heading>
      <div style={{ marginBottom: "4vh" }} />
      <Slider onSwipe={handleSwiped} {...settings}>
        {
          data.map((item, index) => (
            <DataCard handleOnItemClick={handleOnItemClick} item={item} key={index} />
          ))
        }
      </Slider>
       {/*<div style={{display: 'flex',flexDirection: 'row', overflowX: 'scroll', width: '100%'}}>*/}
       {/*     {*/}
       {/*         data.map((item, index) => (*/}
       {/*            <DataCard item={item} key={index} />*/}
       {/*         ))*/}
       {/*     }*/}
       {/*     </div>*/}
    </Container>
  );
};

const Div = styled.div`
  margin: 0 10px;
  overflow: hidden;
  cursor: pointer;

  .imgBox {
    height: calc(100% - 25px);
    overflow: hidden;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      transition: transform 0.2s;
      &:hover {
        transform: scale(1.07);
      }
    }
  }
  
  h5 {
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    background-color: #1C6DD0;
  }
`;

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
  speed: 500,
  autoplaySpeed: 2000,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <SlickArrowRight />,
  prevArrow: <SlickArrowLeft />,
  dots: true,
  infinite: true,
  autoplay: true,
  onHover: false,
  pauseOnHover: false,
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

export default UpdatesCarousel;
