import React from "react";
import styled from "styled-components";
import {
  Heading,
  HyperLink,
} from "../../components/styledComponents/GlobalComponents";
import { Link } from "react-router-dom";
const PagesLayout = ({ children, rightNavLinks, currentRoute, pageName }) => {
  
  return (
    <Container>
      <Content>{children}</Content>
      <RightNav>
        <Heading>Related Links</Heading>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {pageName === "campus-life" &&
            rightNavLinks?.map((link) => (
              <Link
                className={"hyperlink"}
                key={link?.title}
                to={`/${pageName}/${currentRoute}/${link.title.toLowerCase()}`}
              >
                {link?.title}
              </Link>
            ))}
          {pageName === "events-gallery" &&
            rightNavLinks?.map((item) => (
              // console.log(item)
              <Link
                className="hyperlink"
                key={item?.title}
                to={`/campus-life/${pageName}/${item.title.toLowerCase()}`}
              >
                {item?.title}
              </Link>
            ))}
          {pageName === "placements" &&
            rightNavLinks?.map((link) => (
              // console.log('link', link)
              <Link
                className={"hyperlink"}
                key={link?.title}
                to={`/${pageName}/${link.routeName}`}
              >
                {link?.title}
              </Link>
            ))}
          {pageName === "departments" &&
            rightNavLinks?.map((link) => (
              // console.log('link', link)
              <Link
                className={"hyperlink"}
                key={link?.title}
                to={`/academics/departments/${link.title.trim().toLowerCase()}`}
              >
                {link?.title}
              </Link>
            ))}

          {pageName === "courses" &&
            rightNavLinks?.map((link) => (
              // console.log('link', link)
              <Link
                className={"hyperlink"}
                key={link?.title}
                to={`/academics/courses/${link.title.trim().toLowerCase()}`}
              >
                {link?.title}
              </Link>
            ))}
        </div>
      </RightNav>
    </Container>
  );
};

export default PagesLayout;

const Container = styled.div`
  flex: 1;
  display: flex;

  @media (max-width: 768px) {
    display: block;
  }
`;

const RightNav = styled.div`
  height: 100%;
  background-color: #f7f6f2;
  width: 25%;
  padding: 2rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Content = styled.div`
  width: 75%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
