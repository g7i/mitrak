import React from "react";
import { HalfScreenContainer, Heading, Paragraph, Wrapper, HalfWrapper, VideoFrameContainer } from "../../../components/styledComponents/GlobalComponents";

const AboutUsPage = () => {
    return (
        <HalfScreenContainer background="#FCF2EB" haveSvg={true}>
            <Wrapper>
              <div>
                <Heading style={{ textAlign: 'center'}}>
                  <span style={{ color: 'brown' }}>Welcome to</span>
                  <br /> <span style={{ color: 'purple' }}>MODERN INSTITUTE OF TECHNOLOGY & RESEARCH CENTRE</span> <br />Alwar (Rajasthan)</Heading>
                <div style={{display:"flex", marginTop: '30px'}}>
                  <HalfWrapper>
                    <div style={{
                      display: "grid",
                      placeItems: "center",

                    }}>
                      <iframe
                        width="560" height="315" src="https://www.youtube.com/embed/5L-sLqaJefs" title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>

                    </div>
                  </HalfWrapper>
                  <HalfWrapper>
                    <Paragraph style={{ lineHeight: '1.8rem' }}>
                      <strong>MITRC Alwar </strong>
                      add another feather in the already colorful cap of Alwar, Rajasthan. Since its inception in 2007,
                      Modern Institute of Technology & Research Centre (An Engineering and Management College),
                      <strong> Alwar </strong> has been known to enable students to carve a niche for themselves and develop
                      a strong personality. Ranked as one of the best private engineering and management colleges of
                      <strong> MITRC Alwar </strong>
                      provides students with state-of-the art infrastructure which helps them to attain understanding of
                      their chosen engineering discipline. Engineering transforms scientific discoveries into technological solutions for
                      the benefit of humanity. Everything we rely on for work, life and play has been touched by Engineering.
                    </Paragraph>
                  </HalfWrapper>
                </div>
              </div>
            </Wrapper>
        </HalfScreenContainer>
    )
}

export default AboutUsPage;
