import React from 'react'
import {Link, useParams} from 'react-router-dom';
import styled, {css} from "styled-components";
import Banner from "../../../components/Banner";
import {Hostel, Laundry, Main, Library, Language, Canteen, Gym, Medical, Mess, Seminar, Conveyance} from "./Components";
import Layout from "../../../constants/Layout";

export default function Amenities() {
  const {route} = useParams();

  const relatedLinks = {
    main: {
      title: "Home",
      component: <Main />,
    },
    hostel: {
      title: 'Hostel',
      component: <Hostel />,
    },
    laundry: {
      title: "Laundry",
      component: <Laundry />,
    },
    conveyance: {
      title: "Conveyance",
      component: <Conveyance />,
    },
    canteen: {
      title: "Canteen",
      component: <Canteen />,
    },
    mess: {
      title: "Mess",
      component: <Mess />,
    },
    gym: {
      title: "Gymnasium",
      component: <Gym />,
    },
    medical: {
      title: "Medical",
      component: <Medical />,
    },
    library: {
      title: "Library",
      component: <Library />,
    },
    language: {
      title: "Language Lab",
      component: <Language />,
    },
    seminar: {
      title: "Seminar Hall",
      component: <Seminar />,
    },
  };

  return (
    <Layout>
      <Banner
        bannerHeading="Amenities"
        bannerDescription={relatedLinks[route].title}
        showDescription
      />
      <Cont>
        <div className='content'>{relatedLinks[route].component}</div>
        <div className="related">Related Links</div>
        <Right>{
          Object.entries(relatedLinks).map(([k, v]) => (
            <A to={`/campus-life/amenities/${k}`} active={k === route}>{v.title}</A>
          ))
        }</Right>
      </Cont>
    </Layout>
  );
}

const Cont = styled.div`
  display: flex;
  justify-content: center;

  .content {
    max-width: 770px;
  }

  .related {
    display: none;
  }

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    .content {
      max-width: unset;
      width: 90%;
    }

    .related {
      display: block;
    }
  }
`;

const Right = styled.aside`
  border-left: 1px solid #d9d9d9;
  padding-left: 23px;
  display: flex;
  flex-direction: column;
  width: 20%;
  flex-grow: 0;
  margin: 50px 0 20px 25px;
  height: fit-content;
  @media screen and (max-width: 1024px) {
    width: 90%;
    padding-left: 0;
    border: none;
    margin-left: 0;
    margin-top: 20px;
  }
`;

const A = styled(Link)`
  color: white;
  background-color: #324a8a;
  text-decoration: none;
  user-select: none;
  padding: 10px 12px;
  line-height: 16px;
  font-size: 12px;
  min-height: 35px;
  display: grid;
  align-items: center;
  transition: all 0.2s linear;
  border: 1px solid white;

  &:hover {
    background-color: white;
    color: #324a8a;
    border: 1px solid #324a8a;
  }

  ${({active}) => active && css`
    background-color: white;
    color: #324a8a;
    border: 1px solid #324a8a;
  `}
`;
