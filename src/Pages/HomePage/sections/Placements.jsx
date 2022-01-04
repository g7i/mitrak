import React, { useState } from "react";
import Slider from "react-slick";

import {
  CardContent,
  CardImage,
  CardTitle,
  CardWrapper,
  ImageWrapper,
} from "../../../components/styledComponents/Courses";
import {
  LeftArrowContainer,
  NextIcon,
  PreviousIcon,
  RightArrowContainer,
  Container,
  ItemWrapper,
} from "../../../components/styledComponents/News";
import {
  FlexContainer,
  Heading,
} from "../../../components/styledComponents/GlobalComponents";
import PartnerSlider from "../PartnerSlider";
import styled from "styled-components";
import { getPlacements } from "../../../utils/firebase/placements";
import ExploreMore from "../../../components/ExploreMore/ExploreMore";
import { useHistory } from "react-router-dom";
import ModalImage from "../../../components/ModalImage";
import StackGrid from "react-stack-grid";
import useMediaQuery from "@mui/material/useMediaQuery";
const placementPoster = [
  "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2Fplacement-poster%2F10-RTU-Merit-from-MITRC.jpg?alt=media&token=86ecb569-4302-47a2-b910-5efcc9f1e251",
  "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2FIMG_20220104_190707.jpg?alt=media&token=7001f05e-2e9f-460f-9fe9-fe1c5c6465b3",
  "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2Fplacement-poster%2F10-RTU-Merit-from-MITRC.jpg?alt=media&token=86ecb569-4302-47a2-b910-5efcc9f1e251",
  "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2FIMG_20220104_190707.jpg?alt=media&token=7001f05e-2e9f-460f-9fe9-fe1c5c6465b3",
  "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2Fplacement-poster%2F10-RTU-Merit-from-MITRC.jpg?alt=media&token=86ecb569-4302-47a2-b910-5efcc9f1e251",
  "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2FIMG_20220104_190707.jpg?alt=media&token=7001f05e-2e9f-460f-9fe9-fe1c5c6465b3",
];

export default function Placements() {
  const [placements, setPlacements] = useState([]);
  const history = useHistory();
  const mediaQuery = useMediaQuery("(max-width:768px)");
  React.useEffect(() => {
    getPlacements().then((data) => {
      setPlacements(data);
    });
  }, []);
  return (
    <Container>
      <Heading style={{ textAlign: "center" }}>Placements</Heading>
      <div style={{marginTop : "40px"}}>
        <StackGrid columnWidth={mediaQuery ? 320 :  520}>
          {placementPoster.map((item, index) => (
            <ModalImage src={item} width={"500px"} smWidth={"300px"} onClickOpen margin={"0px auto"}/>
          ))}
        </StackGrid>
      </div>
      <PartnerSlider />
      <div style={{ marginTop: "4rem" }} />
      {/* <PlacementFlex gap={70} wrap={"wrap"} justify={"space-around"}>
        {placements.slice(0, 3).map((item) => (
          <PlacementCard key={item.id} onClick={()=>{history.push("placement-news");}}>
            <CardWrapper>
              <CardTitle style={{ color: "#0191C6" }}>
                {" "}
                {(() => {
                  var date = new Date(item.startAt);
                  return `${date.getDate()}-${
                    date.getMonth() + 1
                  }-${date.getUTCFullYear()}`;
                })()}
              </CardTitle>
              <ImageWrapper>
                <PlacementImage src={item.image} />
              </ImageWrapper>
              <CardTitle>{item.company}</CardTitle>
              <CardContent>{item.description}</CardContent>
              <CardContent>{item.description}</CardContent>
            </CardWrapper>
          </PlacementCard>
        ))}
        {placements.length > 1 ? (
          <div style={{ width: "100%" , display : 'flex' , justifyContent : "center" }}>
            <div
              style={{ width: "fit-content" }}
              onClick={() => history.push("placement-news")}
            >
              <a href={"#"} style={{fontSize : "2.5rem"}}>See More</a>
            </div>
          </div>
        ) : null}
      </PlacementFlex> */}
    </Container>
  );
}

const PlacementImage = styled(CardImage)`
  max-width: 400px;
`;

const PlacementCard = styled(ItemWrapper)`
  width: 40%;
  max-width: 400px;

  /* box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px; */
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
    rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
`;

const PlacementFlex = styled(FlexContainer)`
  @media screen and (max-width: 1120px) {
    justify-content: center;
    align-items: center;
  }
`;
