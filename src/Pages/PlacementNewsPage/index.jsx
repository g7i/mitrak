import React, { useEffect, useState } from "react";
import {
  Container,
  FlexContainer,
  Heading,
} from "../../components/styledComponents/GlobalComponents";
import Layout from "../../constants/Layout";
import { getPlacements } from "../../utils/firebase/placements";
// import { NewsComponent } from '../HomePage/sections/News';
import styled from "styled-components";
import {
  CardContent,
  CardImage,
  CardTitle,
  CardWrapper,
  ImageWrapper,
} from "../../components/styledComponents/Courses";
import { ItemWrapper } from "../../components/styledComponents/News";

const PlacementNewsScreen = () => {
  const [placementList, setPlacementList] = useState([]);
  useEffect(() => {
    try {
      getPlacements().then((data) => {
        setPlacementList(data);
      });
    } catch (error) {}
  }, []);

  return (
    <Layout>
      <Container style={{ marginBottom: "30px" }}>
        <Heading>Latest Placement News From The Campus</Heading>
        <FlexContainer wrap={"wrap"} gap={30} justify={"space-around"}>
          {placementList?.map((item) => (
            <PlacementCard key={item.id}>
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
                <a href={item.applyLink}>Apply Link</a>

                <div style={{display : "flex"}}>
                  <CardContent>Semester:</CardContent>
                  <div>
                    {item.canApply.map((item) => (
                      <span>{`${item}         `}</span>
                    ))}
                  </div>
                </div>
                <a href={item.document}>Document</a>
              </CardWrapper>
            </PlacementCard>
          ))}
        </FlexContainer>
      </Container>
    </Layout>
  );
};

export default PlacementNewsScreen;

const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

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
