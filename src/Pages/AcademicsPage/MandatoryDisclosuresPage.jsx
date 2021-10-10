import React from 'react'
import Banner from '../../components/Banner'
import { Heading, PageContainer, Paragraph } from '../../components/styledComponents/GlobalComponents'
import Layout from '../../constants/Layout'
import { data } from './staticData/mandatoryDisclosure'

const MandatoryDisclosuresPage = () => {
    return (
        <Layout>
            <Banner 
                bannerHeading="Mandatory Disclosures"
            />
            <PageContainer style={{paddingLeft: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
                {data?.map(item => (
                    <>
                        <Heading>{item.title}</Heading>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            {item?.description?.map(desc => (
                                <Paragraph key={desc}>{desc}</Paragraph>
                            ))}
                        </div>
                        {item?.list?.map(listItem => (
                            <ul>
                                <li key={listItem} style={{marginTop: '0.4rem', color: 'gray'}}>{listItem}</li>
                            </ul>
                        ))}
                    </>
                ))}
            </PageContainer>
        </Layout>
    )
}

export default MandatoryDisclosuresPage
