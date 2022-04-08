import React from "react";
import {
  ContactHeaderLinksWrapper,
  Nav,
  Text,
  Wrapper,
} from "../styledComponents/Navbar";
import {
  AiOutlineMail,
  AiFillFacebook,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiOutlineGooglePlus,
  AiFillPhone,
  AiOutlineYoutube, AiFillInstagram,
} from "react-icons/ai";
import { useHistory } from "react-router-dom";
import { Colors } from "../../constants/UiConstants";
const ContactHeader = () => {
  const history = useHistory();
  return (
    <Nav background={Colors.BLUE} flexType="space-around">
      <Wrapper>
      <Wrapper>
      <img
          src={
            "https://pbs.twimg.com/profile_images/918457632716984320/fgVEAVi1_400x400.jpg"
          }
          style={{ width: "25px", height: "auto", marginRight: "20px" }}
          onClick={() => {
            window.location.href = "https://statcounter.com/login/";
          }}
        />

        
      </Wrapper>
        <Wrapper>
          <ContactHeaderLinksWrapper href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=admin@mitrc.ac.in">
            <AiOutlineMail color={"#FFFFFF"} />
            <Text color="#FFFFFF">admin@mitrc.ac.in</Text>
          </ContactHeaderLinksWrapper>
        </Wrapper>
        <Wrapper>
          <ContactHeaderLinksWrapper href="tel:+917597676193">
            <AiFillPhone color={"#FFFFFF"} size={20} />
            <Text color="#FFFFFF">+91 7597676193</Text>
          </ContactHeaderLinksWrapper>
        </Wrapper>
      </Wrapper>
      <Wrapper>
        <ContactHeaderLinksWrapper>
          <AiFillFacebook
            color="#FFFFFF"
            style={{ marginLeft: "1rem" }}
            size={20}
            onClick={() => {
              window.location.href = "https://www.facebook.com/tpo.mitrc";
            }}
          />
        </ContactHeaderLinksWrapper>
        <ContactHeaderLinksWrapper>
          <AiFillLinkedin
            color="#FFFFFF"
            style={{ marginLeft: "1rem" }}
            size={20}
            onClick={() => {
              window.location.href =
                "https://www.linkedin.com/school/mitrc-college-alwar/";
            }}
          />
        </ContactHeaderLinksWrapper>
        <ContactHeaderLinksWrapper>
          <AiFillInstagram
            color="#FFFFFF"
            style={{ marginLeft: "1rem" }}
            size={20}
            onClick={() => {
              window.location.href = "https://www.instagram.com/mitrcalwar/";
            }}
          />
        </ContactHeaderLinksWrapper>
        <ContactHeaderLinksWrapper>
          <AiFillTwitterCircle
            color="#FFFFFF"
            style={{ marginLeft: "1rem" }}
            size={20}
            onClick={() => {
              window.location.href = "https://twitter.com/mitrc_alwar?s=08";
            }}
          />
        </ContactHeaderLinksWrapper>
        <ContactHeaderLinksWrapper>
          <AiFillFacebook
            color="#FFFFFF"
            style={{ marginLeft: "1rem" }}
            size={20}
            onClick={() => {
              window.location.href = "https://www.facebook.com/mitrc.alwar.1";
            }}
          />
        </ContactHeaderLinksWrapper>
        <ContactHeaderLinksWrapper>
          <AiOutlineYoutube
            color="#FFFFFF"
            style={{ marginLeft: "1rem" }}
            size={20}
            onClick={() => {
              window.location.href =
                "https://www.youtube.com/watch?v=MMzFcZ3aIGI";
            }}
          />
        </ContactHeaderLinksWrapper>
      </Wrapper>
    </Nav>
  );
};

export default ContactHeader;
