import React from 'react'
import { CopyRightContainer, FooterMainContainer, FooterSecondMainContainer, FooterSecondSectionContainer, FooterSectionContainer, SectionHeading, SectionText } from '../styledComponents/Footer'

const Footer = () => {
    return (
      <FooterMainContainer>
        <FooterSecondMainContainer>
          <FooterSectionContainer>
            <img src={""} alt={"mitrc-logo"} />
          </FooterSectionContainer>
          <FooterSectionContainer>
            <SectionHeading>Quick Links</SectionHeading>
            <FooterSecondSectionContainer numberOfRow={1}>
              <SectionText>Home</SectionText>
              <SectionText>Events</SectionText>
              <SectionText>Contact</SectionText>
              <SectionText>Courses</SectionText>
            </FooterSecondSectionContainer>
          </FooterSectionContainer>

          <FooterSectionContainer>
            <SectionHeading>Programs</SectionHeading>
            <FooterSecondSectionContainer numberOfRow={1}>
              <SectionText>Air Frieght</SectionText>
              <SectionText>Ocean frieght</SectionText>
              <SectionText>Large projects</SectionText>
            </FooterSecondSectionContainer>
          </FooterSectionContainer>

          <FooterSectionContainer>
            <SectionHeading>Resources</SectionHeading>
            <FooterSecondSectionContainer numberOfRow={1}>
              <SectionText>FAQ</SectionText>
              <SectionText>Submit Ticket</SectionText>
              <SectionText>Contact Us</SectionText>
            </FooterSecondSectionContainer>
          </FooterSectionContainer>
        </FooterSecondMainContainer>

        <CopyRightContainer>
          <h4>Copyright © 2021 MITRC. All rights reserved.</h4>
        </CopyRightContainer>
      </FooterMainContainer>
    );
}

export default Footer
