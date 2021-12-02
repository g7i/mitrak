import React from 'react'
import Banner from '../../components/Banner'
import { Heading, PageContainer, Paragraph } from '../../components/styledComponents/GlobalComponents'
import Layout from '../../constants/Layout'
import { Colors } from '../../constants/UiConstants'
import { ListItem } from './departments/components/imageSlider'
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
                                <Paragraph align="center" key={desc}>{desc}</Paragraph>
                            ))}
                        </div>
                        {item?.list?.map(listItem => (
                            <ul>
                                <ListItem key={listItem} style={{marginTop: '0.4rem', color: Colors.SECONDARY}}>{listItem}</ListItem>
                            </ul>
                        ))}
                    </>
                ))}
            </PageContainer>
        </Layout>
    )
}

export default MandatoryDisclosuresPage
