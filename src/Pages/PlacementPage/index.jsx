import React, { useState, useEffect } from "react";
import Banner from "../../components/Banner";
import Layout from "../../constants/Layout";
import PagesLayout from "../../constants/PagesLayout";
import { useParams } from "react-router-dom";
import {
  FillImage,
  HalfImage,
  Heading,
  HyperLink,
  ListItem,
  OneThirdImage,
  PageContainer,
  Paragraph,
} from "../../components/styledComponents/GlobalComponents";
import { data } from "./staticData/doc";
import { CoporateFeedback, PlcaementSummary } from "./Components";

const PlacementPage = () => {
  const { routename, child } = useParams();

  const relatedLinks = [
    // { title: "From TPO Desk", routeName: "tpodesk" },
    { title: "Placement Activities", routeName: "placementactivities" },
    { title: "Government Selection", routeName: "governmentselections" },
    { title: "Placement Highlight", routeName: "placementhighlight" },
    // { title: "Coporate feedback", routeName: "coporatefeedback" },
    // { title: "Recent Achievments", routeName: "recentachievments" },
    { title: "Recruitment partner", routeName: "recruitmentpartner" },
    // { title: "Testimonials", routeName: "testimonials" },
    // { title: "gallery", routeName: "recentachievments" },
    // { title: "Placement Summary", routeName: "placementsummary" },
    { title: "Alumini", routeName: "recentachievments" },
  ];

  return (
    <Layout>
      <Banner
        bannerHeading="Think Placement Think @MITRC"
        bannerDescription={routename}
      />
      <PagesLayout
        rightNavLinks={relatedLinks}
        currentRoute={routename}
        pageName={"placements"}
      >
        <PageContainer>
          {data?.map(
            (item) =>
              routename == item.routename && (
                <>
                  {item?.imageUrl && (
                    <HalfImage src={item?.imageUrl} alt="mitrc image" />
                  )}
                  {Object.keys(item).map((key) => (
                    <>
                      <Heading>{item[key]?.contentHeading}</Heading>
                      <Paragraph>{item[key]?.para}</Paragraph>
                    </>
                  ))}
                  {item?.images?.map((img) => (
                    <>
                      {img.size == "small" && (
                        <OneThirdImage src={img.url} alt="mitrc image" />
                      )}
                      {img.size == "large" && (
                        <FillImage src={img.url} alt="mitrc image" />
                      )}
                    </>
                  ))}

                  {
                    item?.feedback?.map(feedback=>(
                      <CoporateFeedback feedback={feedback}/>
                    ))
                  }

                  {
                    item?.placementSummary?.map(item=>(<PlcaementSummary obj={item}/>))
                  }
                </>
              )
          )}
        </PageContainer>
      </PagesLayout>
    </Layout>
  );
};

export default PlacementPage;
