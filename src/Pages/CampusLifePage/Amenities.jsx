import React, { useState, useEffect } from 'react'
import Banner from '../../components/Banner'
import Layout from '../../constants/Layout'
import PagesLayout from '../../constants/PagesLayout'
import { useParams } from 'react-router-dom';
import { amenitiesPage } from './staticData/doc';
import { FillImage, HalfImage, Heading, HyperLink, ListItem, PageContainer, Paragraph } from '../../components/styledComponents/GlobalComponents';
import ComplaintForm from './ComplaintForm';

const Amenities = () => {
    const rightNavLinks = [
        { title: "Hostel" },
        { title: "Laundary" },
        { title: "Conveyance" },
        { title: "Canteen" },
        { title: "Mess" },
        { title: "Gym" },
        { title: "Medical"},
        { title: "Library"},
        { title: "Language Lab"},
        {title: "Seminar Hall"},
        {title: "ICT"}
    ]

    return (
        <Layout>
            <Banner
                bannerHeading="Amenities"
            />
            <PagesLayout rightNavLinks={rightNavLinks} pageName='amenities'>
                <PageContainer>
                    <Paragraph>{amenitiesPage.para}</Paragraph>
                    {
                        amenitiesPage.facilities.map((item, index) => (
                            <ListItem key={index}>{item}</ListItem>
                        ))
                    }
                </PageContainer>
            </PagesLayout>
        </Layout>
    )
}

export default Amenities;