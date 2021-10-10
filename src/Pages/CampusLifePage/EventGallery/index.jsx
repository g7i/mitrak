import React from 'react'
import { useParams } from 'react-router-dom';
import Banner from '../../../components/Banner'
import { HalfImage, PageContainer } from '../../../components/styledComponents/GlobalComponents';
import Layout from '../../../constants/Layout'
import PagesLayout from '../../../constants/PagesLayout'
import { eventsGallery } from '../staticData/doc';

const EventGallery = () => {
    const {child} = useParams();

    return (
        <Layout>
            <Banner bannerHeading="Events Gallery @MITRC" />
            <PagesLayout pageName='events-gallery' currentRoute={child} rightNavLinks={eventsGallery}>
                <PageContainer>
                    {eventsGallery.map(event => event.title.toLowerCase() === child && (
                        // console.log(event.title.toLowerCase() )

                        <>
                            {event.images.map(image => (
                                <HalfImage 
                                    key={image}
                                    src={image}
                                />
                            ))}
                        </>
                    ))}
                </PageContainer>
            </PagesLayout>
        </Layout>
    )
}

export default EventGallery
