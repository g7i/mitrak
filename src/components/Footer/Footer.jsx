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
    <div className="bg-slate-900 bg-opacity-90 relative ">
      <div className="py-4">
      <div className="flex m-auto justify-center ">
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
        </div>

      <div className="">
        {/* <div>
          <LogoImage
            src={logo}
            alt={"mitrc-logo"}
            style={{ backgroundColor: 'white', padding: '5px 0' }}
          />
        </div> */}
        <div className="w-full pt-4">
          {/* <SectionHeading>Quick Links</SectionHeading> */}
          <div  numberOfRow={1} className= "flex m-auto justify-center">
            {
              quickLinks.map((item, index) => (
                  <div key={index} onClick={() => history.push(item.path)} className={`text-md mx-2 font-bold uppercase text-white opacity-90 hover:underline`}>{item.label}</div>
              ))
            }
          </div>
        </div>

         

        <div>
          {/* <SectionHeading>Resources</SectionHeading> */}
          <div numberOfRow={1}  className="flex m-auto justify-center py-1">
             {/* <SectionHeading>Programs</SectionHeading> */}
          
            {
              programs.map((item, index) => (
                  <div key={index} onClick={() => history.push(item.path)} className={`text-sm mx-2  uppercase text-white opacity-90 hover:underline cursor-pointer`}>{item.label}</div>
              ))
            }
            {
              resources.map((item, index) => (
                  <div key={index} onClick={() => history.push(item.path)} className={`text-sm mx-2  uppercase text-white opacity-90 hover:underline cursor-pointer`} >{item.label}</div>
              ))
            }
          </div>
        </div>

        {/* <FooterSectionContainer>
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
        </FooterSectionContainer> */}

        
      </div>
      </div>
      <div className=" border-t py-2 mt-4 border-white opacity-80">
        <p className="text-md text-white text-center pt-1">Copyright © 2022 MITRC. All rights reserved.</p>
      </div>
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
    </div>
  );
};

export default Footer;
