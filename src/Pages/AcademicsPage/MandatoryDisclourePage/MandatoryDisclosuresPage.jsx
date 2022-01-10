import React from "react";
import Banner from "../../../components/Banner";
import {
  Heading,
  PageContainer,
  Paragraph,
} from "../../../components/styledComponents/GlobalComponents";
import Layout from "../../../constants/Layout";
import { Colors } from "../../../constants/UiConstants";
import { ListItem } from "./../departments/components/imageSlider";
import { RoutingData, commitesList } from "./data";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
const MandatoryDisclosuresPage = () => {
  const history = useHistory();
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
        <TableWrapper>
          <Heading style={{ color: "#8a2be2", marginBottom: "3rem" }}>
            Mendatory Disclosures
          </Heading>
          {RoutingData.map((item) => (
            <CommiteeWrapper key={item}>
              <h3
                onClick={() =>
                  history.push(`/academics/madatory-disclosures/${item.link}`)
                }
                style={{textTransform : 'capitalize'}}
              >
                {item.title}
              </h3>
              <Button
                onClick={() => {
                  window.location.href = item.pdf;
                }}
              >
                View
              </Button>
            </CommiteeWrapper>
          ))}
        </TableWrapper>
      </PageContainer>
    </Layout>
  );
};

const TableWrapper = styled.div`
  padding: 30px;
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const CommiteeWrapper = styled.div`
  width: 100%;
  border: 1px solid blue;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  h3 {
    color: #5cb861;
    font-size: 1.5rem;
    &:hover {
      cursor: pointer;
      color: blue;
    }
  }
`;
const Button = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  background-color: #1c6dd0;
  color: white;
`;

export default MandatoryDisclosuresPage;
