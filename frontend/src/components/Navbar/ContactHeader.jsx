import React from "react";
import {
  ContactHeaderLinksWrapper,
  Nav,
  Text,
  Wrapper,
} from "../styledComponents/Navbar";
import {
  AiOutlineMail,
  AiFillPhone,
  AiFillFacebook,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiOutlineGooglePlus,
  AiOutlineYoutube,
} from "react-icons/ai";
import { useHistory } from "react-router-dom";
const ContactHeader = () => {
  const history = useHistory();
  return (
    <Nav background="#32404D" flexType="space-around">
      <Wrapper>
        <Wrapper>
          <ContactHeaderLinksWrapper
            onClick={() => {
              window.location.href = "mailto: abc@example.com";
            }}
          >
            <AiOutlineMail color={"#FFFFFF"} />
            <Text color="#FFFFFF">info@mitrc.ac.in</Text>
          </ContactHeaderLinksWrapper>
        </Wrapper>
        <Wrapper>
          <ContactHeaderLinksWrapper>
            <AiFillPhone color={"#FFFFFF"} />
            <Text color="#FFFFFF">info@mitrc.ac.in</Text>
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
              window.location.href = "https://www.facebook.com/mitrc.alwar.1";
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
                "https://www.linkedin.com/in/tpo-mitrc-726b0a3a/Mitrc";
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
          <AiOutlineGooglePlus
            color="#FFFFFF"
            style={{ marginLeft: "1rem" }}
            size={20}
            onClick={() => {
              window.location.href = "https://www.mitrc.ac.in";
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
