import React from "react";
import {
  CopyRightContainer,
  CustomInputContainer,
  FooterMainContainer,
  FooterSecondMainContainer,
  FooterSecondSectionContainer,
  FooterSectionContainer,
  LogoImage,
  SectionHeading,
  SectionText,
  SocailMediaContainer,
  SocialMediaIcon,
} from "../styledComponents/Footer";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import { IoMdSend } from "react-icons/io";

const Footer = () => {
  return (
    <FooterMainContainer>
      <FooterSecondMainContainer>
        <FooterSectionContainer>
          <LogoImage
            src={
              "https://www.mitrc.ac.in/wp-content/uploads/2019/05/mitrc_logo_small.png"
            }
            alt={"mitrc-logo"}
          />
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

        <FooterSectionContainer>
          <SectionHeading>Enquiry</SectionHeading>
          <SectionText>We will call you on the number provided</SectionText>
          <FooterSecondSectionContainer numberOfRow={1}>
            <CustomInputContainer>
              <input placeholder={"enter your number"} />
              <div>
                <IoMdSend />
              </div>
            </CustomInputContainer>
          </FooterSecondSectionContainer>
        </FooterSectionContainer>

        <SocailMediaContainer>
          <SocialMediaIcon>
            <FaFacebookF />
          </SocialMediaIcon>
          <SocialMediaIcon>
            <FaTwitter />
          </SocialMediaIcon>
          <SocialMediaIcon>
            <FaLinkedinIn />
          </SocialMediaIcon>
          <SocialMediaIcon>
            <FaYoutube />
          </SocialMediaIcon>
        </SocailMediaContainer>
      </FooterSecondMainContainer>

      <CopyRightContainer>
        <h4>Copyright © 2021 MITRC. All rights reserved.</h4>
      </CopyRightContainer>
    </FooterMainContainer>
  );
};

export default Footer;
