import React from 'react'
import Banner from '../../components/Banner'
import Layout from '../../constants/Layout'
import PagesLayout from '../../constants/PagesLayout'
import { useParams } from 'react-router-dom'
import { data } from './staticData/departments'
import { FillImage, HalfImage, Heading, PageContainer, Paragraph } from '../../components/styledComponents/GlobalComponents'
import { Colors } from '../../constants/UiConstants'

const DepartmentsPage = () => {

    const { child } = useParams();

    const departmentsPageSections = [
        { title: "Electrical Engineering" },
        { title: "Electronics & Communication" },
        {title: "Civil Engineering"},
        {title: "Computer Science & Engineering"},
        {title: 'Mechanical ENgineering'},
        {title: 'Management Studies'}
    ]

    console.log({ child })

    return (
        <Layout>
            <Banner
                bannerHeading="Departments"
            />
            <PagesLayout rightNavLinks={departmentsPageSections} pageName="departments">
                <PageContainer>
                    {
                        Object.keys(data).map(item => data[item]?.title === child && (
                            <>
                                <FillImage
                                    src={data[item].imageUrl}
                                />
                                {data[item]?.content?.map(item => (
                                    <div style={{display: 'flex', flexDirection: 'column'}}>
                                        {item?.contentImage && (
                                            <HalfImage 
                                                src={item?.contentImage}
                                                alt="Content Image"
                                                style={{marginTop: '2rem'}}
                                            />
                                        )}
                                        <Heading>{item?.title}</Heading>
                                        <Paragraph>{item?.description}</Paragraph>
                                        {item?.points?.map(point => (
                                            <ul>
                                                <li key={point} style={{marginTop: '0.4rem', color: 'gray'}}>{point}</li>
                                            </ul>
                                        ))}
                                    </div>
                                ))}
                                <br />
                                {data[item]?.labs && <Heading>Laboratories</Heading>}
                                <ol>
                                    {data[item]?.labs?.map(title => (
                                        <li key={title} style={{marginTop: '0.4rem', color: 'gray'}}>{title}</li>
                                    ))}
                                </ol>
                                <Heading>{data[item]?.extras?.title}</Heading>
                                <Paragraph>{data[item]?.extras?.description}</Paragraph>
                            </>
                        ))
                    }
                </PageContainer>
            </PagesLayout>
        </Layout>
    )
}

export default DepartmentsPage
