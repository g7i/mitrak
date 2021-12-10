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
import {useHistory} from "react-router-dom";

const Footer = () => {
  const history = useHistory();
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
            <SectionText onClick={() => history.push("/")}>Home</SectionText>
            <SectionText
              onClick={() =>
                history.push("/campus-life/events-gallery/curricular")
              }
            >
              Events
            </SectionText>
            <SectionText onClick={() => history.push("/contact")}>
              Contact
            </SectionText>
            <SectionText onClick={() => history.push("/academics/courses")}>
              Courses
            </SectionText>
          </FooterSecondSectionContainer>
        </FooterSectionContainer>

        <FooterSectionContainer>
          <SectionHeading>Programs</SectionHeading>
          <FooterSecondSectionContainer numberOfRow={1}>
            {/* <SectionText>Air Frieght</SectionText>
            <SectionText>Ocean frieght</SectionText> */}
            <SectionText
              onClick={() =>
                history.push("/campus-life/studentaffair/grievance")
              }
            >
              Committe
            </SectionText>
            <SectionText
              onClick={() =>
                history.push("/campus-life/studentaffair/grievance")
              }
            >
              Complaint
            </SectionText>
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
          <SocialMediaIcon href="https://www.facebook.com/mitrc.alwar.1">
            <FaFacebookF />
          </SocialMediaIcon>
          <SocialMediaIcon href="https://twitter.com/mitrc_alwar?s=08">
            <FaTwitter />
          </SocialMediaIcon>
          <SocialMediaIcon href="https://www.linkedin.com/in/tpo-mitrc-726b0a3a/Mitrc">
            <FaLinkedinIn />
          </SocialMediaIcon>
          <SocialMediaIcon href="https://www.youtube.com/watch?v=MMzFcZ3aIGI">
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
