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
  FaInstagram,
} from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import {useHistory} from "react-router-dom";
import logo from "../../assets/images/mitrc.png";
import { quickLinks, programs, resources } from './footer.data'


const Footer = () => {
  const history = useHistory();
  return (
    <FooterMainContainer>
      <FooterSecondMainContainer>
        <FooterSectionContainer>
          <LogoImage
            src={logo}
            alt={"mitrc-logo"}
            style={{ backgroundColor: 'white', padding: '5px 0' }}
          />
        </FooterSectionContainer>
        <FooterSectionContainer>
          <SectionHeading>Quick Links</SectionHeading>
          <FooterSecondSectionContainer numberOfRow={1}>
            {
              quickLinks.map((item, index) => (
                  <SectionText key={index} onClick={() => history.push(item.path)}>{item.label}</SectionText>
              ))
            }
          </FooterSecondSectionContainer>
        </FooterSectionContainer>

        <FooterSectionContainer>
          <SectionHeading>Programs</SectionHeading>
          <FooterSecondSectionContainer numberOfRow={1}>
            {
              programs.map((item, index) => (
                  <SectionText key={index} onClick={() => history.push(item.path)}>{item.label}</SectionText>
              ))
            }
          </FooterSecondSectionContainer>
        </FooterSectionContainer>

        <FooterSectionContainer>
          <SectionHeading>Resources</SectionHeading>
          <FooterSecondSectionContainer numberOfRow={1}>
            {
              resources.map((item, index) => (
                  <SectionText key={index} onClick={() => history.push(item.path)}>{item.label}</SectionText>
              ))
            }
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
          <SocialMediaIcon href="https://www.instagram.com/mitrcalwar/">
            <FaInstagram />
          </SocialMediaIcon>
        </SocailMediaContainer>
      </FooterSecondMainContainer>

      <CopyRightContainer>
        <h4>Copyright © 2021 MITRC. All rights reserved.</h4>
      </CopyRightContainer>
      <div className="waveWrapper waveAnimation">
        <div className="waveWrapperInner bgMiddle">
          <div className="wave waveMiddle"/>
        </div>
        <div className="waveWrapperInner bgBottom">
          <div className="wave waveBottom"/>
        </div>
        <div className="waveWrapperInner bgTop">
          <div className="wave waveTop"/>
        </div>
      </div>
    </FooterMainContainer>
  );
};

export default Footer;
