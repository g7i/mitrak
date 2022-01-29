import React from "react";
import Banner from "../../../components/Banner";
import Layout from "../../../constants/Layout";
import {RoutingData} from "./data";
import {Link, useHistory} from "react-router-dom";
import {Cont, Event, PageHead, Wrapper} from "../../../components/styledComponents/New";

const MandatoryDisclosuresPage = () => {
  const history = useHistory();

  const handleClick = (e, link) => {
    e.stopPropagation();
    e.preventDefault();
    window.location.href = link;
  }

  return (
    <Layout>
      <Banner bannerHeading="Mandatory Disclosures"/>
      <Wrapper>
        <Cont className="content full">
          <PageHead>Mandatory Disclosures</PageHead>
          <br/>
          <div className="grid">
            {RoutingData.map((item) => (
              <Event
                key={item.link}
                onClick={() => history.push(`/academics/madatory-disclosures/${item.link}`)}
              >
                <div className="title">{item.title}</div>
                <div className="foot">
                  <Link to="#" onClick={e => handleClick(e, item.pdf)}>View</Link>
                </div>
              </Event>
            ))}
          </div>
        </Cont>
      </Wrapper>
    </Layout>
  );
};

export default MandatoryDisclosuresPage;
