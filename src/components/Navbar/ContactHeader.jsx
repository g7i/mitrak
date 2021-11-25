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
  AiOutlineYoutube,
} from "react-icons/ai";
import { useHistory } from "react-router-dom";
import { Colors } from "../../constants/UiConstants";
const ContactHeader = () => {
  const history = useHistory();
  return (
    <Nav background={Colors.PRIMARY} flexType="space-around">
      <Wrapper>
        <Wrapper>
          <ContactHeaderLinksWrapper
            href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=info@mitrc.ac.in"
          >
            <AiOutlineMail color={"#FFFFFF"} />
            <Text color="#FFFFFF">info@mitrc.ac.in</Text>
          </ContactHeaderLinksWrapper>
        </Wrapper>
        <Wrapper>
          <ContactHeaderLinksWrapper
            href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=hr@mitrc.ac.in"
          >
            <AiOutlineMail color={"#FFFFFF"} />
            <Text color="#FFFFFF">hr@mitrc.ac.in</Text>
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
                "https://www.linkedin.com/school/mitrc-college-alwar/";
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
