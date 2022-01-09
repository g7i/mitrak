import React from "react";
import Banner from "../../../../components/Banner";
import {
  Heading,
  PageContainer,
  Paragraph,
} from "../../../../components/styledComponents/GlobalComponents";
import Layout from "../../../../constants/Layout";
import { Colors } from "../../../../constants/UiConstants";
import { ListItem } from "./../../departments/components/imageSlider";
import { RoutingData, commitesList } from "./../data";
import styled from "styled-components";
import { useHistory, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const CommitteePage = () => {
  const history = useHistory();
  const { child } = useParams();
  return (
    <Layout>
      <Banner bannerHeading="Mandatory Disclosures" />
      <MainWrapper>
        <LeftPannel>
          <LeftPanelHeading>Content</LeftPanelHeading>
          {RoutingData.map((item) => (
            <LeftLink to={`/academics/madatory-disclosures/${item.link}`}>
              {item.title}
            </LeftLink>
          ))}
        </LeftPannel>
        <PageContainer
          style={{
            paddingLeft: "2rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            width: "70%",
          }}
        >
          {RoutingData.map((item) => {
            return item.link === child && item.component;
          })}
        </PageContainer>
      </MainWrapper>
    </Layout>
  );
};

export default CommitteePage;

const MainWrapper = styled.div`
  display: flex;
  gap: 20px;
`;
const LeftPannel = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  align-items: center;
`;
const LeftLink = styled(Link)`
  color: black;
  border-bottom: 0.2px solid rgba(0, 0, 0, 0.1);
  text-decoration: none;
  text-align: center;
  width: 100%;
  padding: 10px 0px;
  &:hover {
    color: #2c7ec6;
  }
`;

const LeftPanelHeading = styled.div`
  background-color: #2c7ec6;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size : 1.5rem;
  color : white;
`;
