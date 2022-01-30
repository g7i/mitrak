import React, { useState } from "react";
import Banner from "../../../components/Banner";
import Layout from "../../../constants/Layout";
import {
  Cont,
  H4,
  PageHead,
  Wrapper,
} from "../../../components/styledComponents/New";
import { Link } from "react-router-dom";
import {
  NationalLevelEvents18_19,
  NationalLevelEvents19_20,
  NationalLevelEvents20_21,
  NationalLevelEvents21_22,
} from "../EventGallery/Components";

const data = [
  {
    title: "event participation in 2021-22",
    component: <NationalLevelEvents21_22 />,
  },
  {
    title: "event participation in 2020-21",
    component: <NationalLevelEvents20_21 />,
  },
  {
    title: "event participation in 2019-20",
    component: <NationalLevelEvents19_20 />,
  },
  {
    title: "event participation in 2018-19",
    component: <NationalLevelEvents18_19 />,
  },
];

const EventGallery = () => {
  const [sel, setSel] = useState(null);

  const renderItem = (item) => {
    if (!item.sub)
      return (
        <li key={item.title} onClick={() => setSel(item.component)}>
          <Link to="#">{item.title}</Link>
        </li>
      );
    return (
      <li key={item.title}>
        {item.title}
        <ul>{item.sub.map(renderItem)}</ul>
      </li>
    );
  };

  return (
    <Layout>
      <Banner bannerHeading="Events Gallery @MITRC" />
      <Wrapper>
        <Cont className="content full">
          <PageHead>NATIONAL & STATE LEVEL EVENTS PARTICIPATION</PageHead>
          <p>
            Participation in Technical Events at National Level & State Level
            helps in improving the technical skills of students and students
            learn from the challenges which they face during these events .
          </p>
          <p>
            To create a innovative and learning environment for developing the
            technical skills , Students has been motivated by faculties to
            participate in various national level and state level technical
            competition such as Hackathon, Vishwakarma Award , Manthan 2021 etc.
          </p>
          <p>
            The main motto of the participation is to bring students out of
            stage fear and also improve their communication skills. It also
            helps the students to think, create and develop about the real time
            problem’s solutions. It also provides you an opportunity to learn in
            detailed about a core subject which is a part of curriculum and
            develop effective presentation skills.
          </p>
          <p>
            MITRC students participated in many national level and state level
            events like various Hackathons, and got selected in Grand Finale in
            many competitions.
          </p>

          <H4>Followings are</H4>
          <ul>{data.map(renderItem)}</ul>
          {sel}
          <div className="grid three">
            {images.map((item) => (
              <img
                key={item}
                src={item}
                alt={item}
                onLoad={(e) => e.target.classList.add("loaded")}
              />
            ))}
          </div>
        </Cont>
      </Wrapper>
    </Layout>
  );
};

const images = [
  "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2Fcampus-life%2Fgallery%2Fsports%2FDSC_6328.JPG?alt=media&token=c13a8a6f-480e-415f-9b25-8f9dc316fc5a",
  "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2Fcampus-life%2Fgallery%2Fsports%2FDSC_6345.JPG?alt=media&token=a148f675-91e1-4885-b3c5-03993285a071",
  "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2Fcampus-life%2Fgallery%2Fhackathon%2FPhoto1.jpg?alt=media&token=62f5de81-01a0-4451-a4fc-7ed107ec3166",
  "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2Fcampus-life%2Fgallery%2Fhackathon%2FPhoto13.jpg?alt=media&token=150745c0-cb9f-41e3-a8d7-c0c18cebbb05",
  "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2Fcampus-life%2Fgallery%2Fhackathon%2FPhoto14.jpg?alt=media&token=f618a67a-d499-4eb2-96f7-fa0f3fc98ddb",
  "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2Fcampus-life%2Fgallery%2Fhackathon%2FPhoto15.jpg?alt=media&token=1b24aa8a-cd20-42d3-92f2-a3e5ede4a85f",
  "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2Fcampus-life%2Fgallery%2Fhackathon%2FPhoto2.jpg?alt=media&token=f3a86998-cf37-490e-a7a1-5a91dddafd48",
  "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2Fcampus-life%2Fgallery%2Fhackathon%2FPhoto20.jpg?alt=media&token=ddc6322e-c583-4efd-b603-cf570793913d",
  "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2Fcampus-life%2Fgallery%2Fhackathon%2FPhoto21.jpg?alt=media&token=c9e8ba9b-2094-4718-9d8a-8e44bf3adca8",
  "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2Fcampus-life%2Fgallery%2Fhackathon%2FPhoto22.jpg?alt=media&token=68d1501d-340d-46ed-838d-82638e7c9217",
  "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2Fcampus-life%2Fgallery%2Fhackathon%2FPhoto23.jpg?alt=media&token=851f9bab-7ee2-416c-8c25-3ed4549b9f9c",
  "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2Fcampus-life%2Fgallery%2Fhackathon%2FPhoto24.jpg?alt=media&token=e7c032ec-550b-4d49-be42-b756312df128",
  "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2Fcampus-life%2Fgallery%2Fhackathon%2FPhoto26.jpg?alt=media&token=b882a12a-c857-43cf-9150-c63f849b3876",
  "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2Fcampus-life%2Fgallery%2Fhackathon%2FPhoto27.jpg?alt=media&token=6fdb97dc-fec8-48b7-bb8e-5b80ad66f2a5",
  "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2Fcampus-life%2Fgallery%2Fhackathon%2FPhoto3.jpg?alt=media&token=edf1dacf-bd06-401d-8f68-0def1fbeb6eb",
  "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2Fcampus-life%2Fgallery%2Fhackathon%2FPhoto4.jpg?alt=media&token=4d3dca13-e1f5-4ddd-b121-b30331fd99c1",
  "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2Fcampus-life%2Fgallery%2Fhackathon%2FPhoto5.jpg?alt=media&token=8711a2d5-b32d-4739-8845-727c69a9874f",
  "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2Fcampus-life%2Fgallery%2Fhackathon%2FPhoto7.jpg?alt=media&token=e0453932-2f3e-4c87-a2f9-c7877f6b6308",
  "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2Fcampus-life%2Fgallery%2Fhackathon%2FPhoto8.jpg?alt=media&token=1e377d39-b0a6-43bf-acf0-2ba081247fb9",
  "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2Fcampus-life%2Fgallery%2Fhackathon%2FPhoto12.jpg?alt=media&token=4425b302-13e5-487f-b355-23fad125b788",
  "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2Fcampus-life%2Fgallery%2Fhackathon%2FPhoto10.jpg?alt=media&token=cf8f41c0-1808-4969-ba21-e9d0ff8aa4da",
  "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2Fcampus-life%2Fgallery%2Fsports%2FDSC_6372.JPG?alt=media&token=6e323cd5-bdd8-4455-9254-e9f05ccf3c30",
  "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2Fcampus-life%2Fgallery%2Fhackathon%2FPhoto30.jpg?alt=media&token=f08477b7-42eb-4dcd-a060-932a57e76008",
  "https://firebasestorage.googleapis.com/v0/b/mitrak-7.appspot.com/o/images%2Fcampus-life%2Fgallery%2Fhackathon%2FPhoto18.jpg?alt=media&token=1372e9ad-7014-47bf-a39c-ab481b758e5a",
];

export default EventGallery;
