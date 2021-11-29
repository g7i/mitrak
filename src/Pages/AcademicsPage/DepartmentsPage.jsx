// import React from 'react'
// import Banner from '../../components/Banner'
// import Layout from '../../constants/Layout'
// import PagesLayout from '../../constants/PagesLayout'
// import { useParams } from 'react-router-dom'
// import { data } from './staticData/departments'
// import { FillImage, HalfImage, Heading, PageContainer, Paragraph } from '../../components/styledComponents/GlobalComponents'
// import { Colors } from '../../constants/UiConstants'

// const DepartmentsPage = () => {

//     const { child } = useParams();

//     const departmentsPageSections = [
//         { title: "Electrical Engineering" },
//         { title: "Electronics & Communication" },
//         {title: "Civil Engineering"},
//         {title: "Computer Science & Engineering"},
//         {title: 'Mechanical Engineering'},
//         {title: 'Management Studies'}
//     ]

//     return (
//         <Layout>
//             <Banner
//                 bannerHeading="Departments"
//             />
//             <PagesLayout rightNavLinks={departmentsPageSections} pageName="departments">
//                 <PageContainer>
//                     {
//                         Object.keys(data).map(item => data[item]?.title === child && (
//                             <>
//                                 <FillImage
//                                     src={data[item].imageUrl}
//                                 />
//                                 {data[item]?.content?.map(item => (
//                                     <div style={{display: 'flex', flexDirection: 'column'}}>
//                                         {item?.contentImage && (
//                                             <HalfImage
//                                                 src={item?.contentImage}
//                                                 alt="Content Image"
//                                                 style={{marginTop: '2rem'}}
//                                             />
//                                         )}
//                                         <Heading>{item?.title}</Heading>
//                                         <Paragraph>{item?.description}</Paragraph>
//                                         {item?.points?.map(point => (
//                                             <ul>
//                                                 <li key={point} style={{marginTop: '0.4rem', color: '#152D35'}}>{point}</li>
//                                             </ul>
//                                         ))}
//                                     </div>
//                                 ))}
//                                 <br />
//                                 {data[item]?.labs && <Heading>Laboratories</Heading>}
//                                 <ol>
//                                     {data[item]?.labs?.map(title => (
//                                         <li key={title} style={{marginTop: '0.4rem', color: '#152D35'}}>{title}</li>
//                                     ))}
//                                 </ol>
//                                 <Heading>{data[item]?.extras?.title}</Heading>
//                                 <Paragraph>{data[item]?.extras?.description}</Paragraph>
//                             </>
//                         ))
//                     }
//                 </PageContainer>
//             </PagesLayout>
//         </Layout>
//     )
// }

// export default DepartmentsPage

import React from "react";
import Banner from "../../components/Banner";
import Layout from "../../constants/Layout";
import PagesLayout from "../../constants/PagesLayout";
import { useParams } from "react-router-dom";
import { PageContainer } from "../../components/styledComponents/GlobalComponents";
import MechanicalDepartment from "./departments/mechanical";
import CivilDepartment from "./departments/civil";
import ComputerDepartment from "./departments/cse";
import ElectricalDepartment from "./departments/electrical";
import ElectroCommunicationPage from "./departments/electroComunication";
import MbaDepartment from "./departments/mba";
const DepartmentsPage = () => {
  const { child } = useParams();

  const departmentsPageSections = [
    { title: "Electrical Engineering" },
    { title: "Electronics & Communication" },
    { title: "Civil Engineering" },
    { title: "Computer Science & Engineering" },
    { title: "Mechanical Engineering" },
    { title: "Management Studies" },
  ];

  return (
    <Layout>
      <Banner bannerHeading="Courses" />
      <PagesLayout
        rightNavLinks={departmentsPageSections}
        pageName="departments"
      >
        <PageContainer>
          {console.log(child)}
          {child === undefined && <MechanicalDepartment />}
          {child === "mechanical engineering" && <MechanicalDepartment />}
          {child === "civil engineering" && <CivilDepartment />}
          {child === "computer science & engineering" && <ComputerDepartment />}
          {child === "electrical engineering" && <ElectricalDepartment />}
          {child === "electronics & communication" && (
            <ElectroCommunicationPage />
          )}
          {child === "management studies" && <MbaDepartment />}
        </PageContainer>
      </PagesLayout>
    </Layout>
  );
};

export default DepartmentsPage;
