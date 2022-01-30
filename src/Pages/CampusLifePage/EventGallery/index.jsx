import React, {useState} from 'react'
import Banner from '../../../components/Banner'
import Layout from '../../../constants/Layout'
import {Cont, H4, PageHead, Wrapper} from "../../../components/styledComponents/New";
import {Link} from "react-router-dom";
import {
  Abhi,
  Annual,
  Convocation,
  ETSEM1,
  ETSEM2,
  Farewell,
  FDP1,
  FDP2,
  Fresher,
  IAF,
  ISRO,
  MIH,
  NationalLevelEvents,
  NationalLevelEvents18_19,
  NationalLevelEvents19_20,
  NationalLevelEvents20_21,
  NationalLevelEvents21_22,
  Teacher,
  Women
} from "./Components";

const data = [
  {
    title: "IAF-IPEV Exhibition by DISHA Cell(Indian Airforce)",
    component: <IAF />,
  },
  {
    title: "ISRO –Vikram Sarabhai Space Exhibition",
    component: <ISRO />,
  },
  {
    title: "MIH 2020-Internal Hackathon",
    component: <MIH />,
  },
  {
    title: "FDPs",
    sub: [
      { title: "FDP on Latex & MATLAB", component: <FDP1 /> },
      { title: "FDP on Python", component: <FDP2 /> },
    ],
  },
  {
    title: "International /National Conferences",
    sub: [
      { title: "ETSEM 2019", component: <ETSEM1 /> },
      { title: "ETSEM 2018", component: <ETSEM2 /> },
    ],
  },
  {
    title: "Annual Function",
    sub: [
      { title: "Invincible T-20", component: <Annual /> },
      { title: "Invincible T-19", component: <Annual /> },
      { title: "Invincible T-18", component: <Annual /> },
    ],
  },
  {
    title: "Fresher’s (Aarambh)",
    component: <Fresher />,
  },
  {
    title: "Teacher’s Day",
    component: <Teacher />,
  },
  {
    title: "Farewell Party",
    component: <Farewell />,
  },
  {
    title: "Convocation",
    component: <Convocation />,
  },
  {
    title: "Women Day Celebration",
    component: <Women />,
  },
  {
    title: "Abhinandan Return Celebration",
    component: <Abhi />,
  },
  {
    title: "National & State Level events participation",
    sub: [
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
    ],
  },
];

const EventGallery = () => {
  const [sel, setSel] = useState(null);

  const renderItem = item => {
    if (!item.sub) return (
      <li key={item.title} onClick={() => setSel(item.component)}>
        <Link to="#">{item.title}</Link>
      </li>
    );
    return (
      <li key={item.title}>
        {item.title}
        <ul>
          {item.sub.map(renderItem)}
        </ul>
      </li>
    );
  };

  return (
    <Layout>
      <Banner bannerHeading="Events Gallery @MITRC"/>
      <Wrapper>
        <Cont className="content full">
          <PageHead>Events & Gallery</PageHead>
          <p>In the engineering college life first of all you start getting knowledge of different subjects, different
            theories. Your outlook start expanding. But of course you have lot many questions like what am I to do on
            completion of engineering, what kind of jobs are there, what way qualified engineer will be different, what
            future, how much you will earn etc. still you have no exposure to industry.</p>
          <p>Technical events like exhibitions, seminars, workshops by senior experts in various subjects give more
            ideas. It expand your thinking. It is said that thinking power when stretched does not come back to original
            state. More you grasp more you learn. Such events give you lot of new knowledge. Certain learning can
            influence you to change.</p>
          <p>There is vast gap in education and actual skills required in industry. Knowledge gained in technical events
            make you smarter and is useful for interviews at later date. It give you more information on career options
            thereby expand your choice. Interactive workshops give you opportunities to express yourself, enhance
            communication skills, open up leadership qualities.</p>
          <p>It is not only engineering knowledge but smartness, communication quality, public speaking skills,
            influential interactions are equally important to succeed in life.</p>
          <p>In our opinion exposure to behavior science is a must before you enter actual adult life. In a long way
            this teach you flexibility in thinking and interest to positive life</p>
          <p>So we organize several events for students and faculty development.</p>
          <H4>Followings are</H4>
          <ul>
            {data.map(renderItem)}
          </ul>
          {sel}
          <div className="grid three">
            {images.map(item => (
              <img key={item} src={item} alt={item} onLoad={e => e.target.classList.add('loaded')}/>
            ))}
          </div>
        </Cont>
      </Wrapper>
    </Layout>
  );
}

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
]

export default EventGallery
