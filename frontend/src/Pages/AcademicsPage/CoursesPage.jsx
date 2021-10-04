import React from "react";
import Banner from "../../components/Banner";
import Layout from "../../constants/Layout";
import PagesLayout from "../../constants/PagesLayout";
import { useParams } from "react-router-dom";
import {
  PageContainer,
} from "../../components/styledComponents/GlobalComponents";
import BtechPage from "./CoursesPage/Btech";
import MtechPage from "./CoursesPage/Mtech";
import MbaPage from "./CoursesPage/Mba";

const CoursesPage = () => {
  const { child } = useParams();
  const CoursesPageSections = [
    { title: "B.Tech" },
    { title: "M.Tech" },
    { title: "MBA" },
  ];


  return (
    <Layout>
      <Banner bannerHeading="Courses" />
      <PagesLayout rightNavLinks={CoursesPageSections} pageName="courses">
        <PageContainer>
          {child === undefined && <BtechPage />}
          {child === "b.tech" && <BtechPage />}
          {child === "m.tech" && <MtechPage />}
          {child === "mba" && <MbaPage />}
          {/* {child === "b.tech" && <BtechPage />} */}
        </PageContainer>
      </PagesLayout>
    </Layout>
  );
};

export default CoursesPage;
