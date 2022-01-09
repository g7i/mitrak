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

const CommitteePage = () => {
  const history = useHistory();
  const { child } = useParams();
  return (
    <Layout>
      <Banner bannerHeading="Mandatory Disclosures" />
      <PageContainer
        style={{
          paddingLeft: "2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {RoutingData.map((item) => {
          return item.link === child && item.component;
        })}
      </PageContainer>
    </Layout>
  );
};

export default CommitteePage;
