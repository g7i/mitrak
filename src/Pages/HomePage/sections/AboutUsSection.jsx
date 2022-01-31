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
                <div style={{display:"flex", marginTop: '30px', alignItems:"center"}}>
                  <HalfWrapper style={{width: "50%"}}>
                    <div style={{
                      position: "relative",
                      paddingBottom: "50%",
                      paddingTop: "30px",
                      height: 0,
                      overflow: "hidden",
                      width: "100%",
                    }}>
                      <iframe
                        style={{position: "absolute", top: "50%", left: "50%", width: "90%", height: "90%", maxHeight: '315px', transform: "translate(-50%, -50%)" }}
                        width="560" height="315" src="https://www.youtube.com/embed/5L-sLqaJefs" title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>

                    </div>
                  </HalfWrapper>
                  <HalfWrapper style={{width: "50%", marginLeft: '15px', marginBottom: '20px'}}>
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
