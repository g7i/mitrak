import React from "react";
import { HalfScreenContainer, Heading, Paragraph, Wrapper, HalfWrapper, VideoFrameContainer } from "../../../components/styledComponents/GlobalComponents";

const AboutUsPage = () => {
    return (
      <HalfScreenContainer background="#FCF2EB" haveSvg={true}>
        <Wrapper>
          <HalfWrapper>
            <div
              style={{
                position: "relative",
                width: "100%",
                paddingBottom: "56.2%",
                height: "0",
              }}
            >
              <iframe
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
                width="560"
                height="315"
                src="https://www.youtube.com/embed/5L-sLqaJefs"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </HalfWrapper>
          <HalfWrapper>
            <Heading>Welcome to MITRC Alwar (Rajasthan)</Heading>
            <Paragraph>
              <strong>MITRC Alwar </strong>
              add another feather in the already colorful cap of Alwar,
              Rajasthan. Since its inception in 2007, Modern Institute of
              Technology & Research Centre (An Engineering and Management
              College),
              <strong> Alwar </strong> has been known to enable students to
              carve a niche for themselves and develop a strong personality.
              Ranked as one of the best private engineering and management
              colleges of
              <strong> MITRC Alwar </strong>
              provides students with state-of-the art infrastructure which helps
              them to attain understanding of their chosen engineering
              discipline. Engineering transforms scientific discoveries into
              technological solutions for the benefit of humanity. Everything we
              rely on for work, life and play has been touched by Engineering.
            </Paragraph>
          </HalfWrapper>
        </Wrapper>
      </HalfScreenContainer>
    );
}

export default AboutUsPage;