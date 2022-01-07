import React from 'react'
import { useParams } from 'react-router-dom';
import Banner from '../../../components/Banner'
import { HalfImage, PageContainer } from '../../../components/styledComponents/GlobalComponents';
import Layout from '../../../constants/Layout'
import PagesLayout from '../../../constants/PagesLayout'
import { eventsGallery } from '../staticData/doc';
import ModalImage from "../../../components/ModalImage"
const EventGallery = () => {
    const {child} = useParams();

    return (
      <Layout>
        <Banner bannerHeading="Events Gallery @MITRC" />
        <PagesLayout
          pageName="events-gallery"
          currentRoute={child}
          rightNavLinks={eventsGallery}
        >
          <PageContainer>
            {eventsGallery.map(
              (event) =>
                event.title.toLowerCase() === child && (
                  // console.log(event.title.toLowerCase() )

                  <>
                    {event.images.map((image) => (
                      <>
                        <ModalImage
                          src={image}
                          key={image}
                          width={"50%"}
                          height={"500px"}
                          onClickOpen
                          objectFit={"cover"}
                          modalObjectFit={"contain"}
                          smWidth={'100%'}
                        />
                        {/* <HalfImage key={image} src={image} /> */}
                      </>
                    ))}
                  </>
                )
            )}
          </PageContainer>
        </PagesLayout>
      </Layout>
    );
}

export default EventGallery
