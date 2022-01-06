import styled from "styled-components";
import { Colors } from "../../constants/UiConstants";

export const FooterMainContainer = styled.div`
  width: 100vw;
  flex-direction: column;
  display: flex;
  align-items: center;
  background-color: #262626;
//background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 1000'%3E%3Cg %3E%3Ccircle fill='%23262626' cx='50' cy='0' r='50'/%3E%3Cg fill='%23242424' %3E%3Ccircle cx='0' cy='50' r='50'/%3E%3Ccircle cx='100' cy='50' r='50'/%3E%3C/g%3E%3Ccircle fill='%23232323' cx='50' cy='100' r='50'/%3E%3Cg fill='%23212121' %3E%3Ccircle cx='0' cy='150' r='50'/%3E%3Ccircle cx='100' cy='150' r='50'/%3E%3C/g%3E%3Ccircle fill='%23202020' cx='50' cy='200' r='50'/%3E%3Cg fill='%231e1e1e' %3E%3Ccircle cx='0' cy='250' r='50'/%3E%3Ccircle cx='100' cy='250' r='50'/%3E%3C/g%3E%3Ccircle fill='%231d1d1d' cx='50' cy='300' r='50'/%3E%3Cg fill='%231b1b1b' %3E%3Ccircle cx='0' cy='350' r='50'/%3E%3Ccircle cx='100' cy='350' r='50'/%3E%3C/g%3E%3Ccircle fill='%231a1a1a' cx='50' cy='400' r='50'/%3E%3Cg fill='%23181818' %3E%3Ccircle cx='0' cy='450' r='50'/%3E%3Ccircle cx='100' cy='450' r='50'/%3E%3C/g%3E%3Ccircle fill='%23171717' cx='50' cy='500' r='50'/%3E%3Cg fill='%23151515' %3E%3Ccircle cx='0' cy='550' r='50'/%3E%3Ccircle cx='100' cy='550' r='50'/%3E%3C/g%3E%3Ccircle fill='%23131313' cx='50' cy='600' r='50'/%3E%3Cg fill='%23121212' %3E%3Ccircle cx='0' cy='650' r='50'/%3E%3Ccircle cx='100' cy='650' r='50'/%3E%3C/g%3E%3Ccircle fill='%23101010' cx='50' cy='700' r='50'/%3E%3Cg fill='%230d0d0d' %3E%3Ccircle cx='0' cy='750' r='50'/%3E%3Ccircle cx='100' cy='750' r='50'/%3E%3C/g%3E%3Ccircle fill='%230b0b0b' cx='50' cy='800' r='50'/%3E%3Cg fill='%23080808' %3E%3Ccircle cx='0' cy='850' r='50'/%3E%3Ccircle cx='100' cy='850' r='50'/%3E%3C/g%3E%3Ccircle fill='%23060606' cx='50' cy='900' r='50'/%3E%3Cg fill='%23030303' %3E%3Ccircle cx='0' cy='950' r='50'/%3E%3Ccircle cx='100' cy='950' r='50'/%3E%3C/g%3E%3Ccircle fill='%23000000' cx='50' cy='1000' r='50'/%3E%3C/g%3E%3C/svg%3E");
//background-attachment: fixed;
//background-size: contain;
  //position: fixed;
  //left: 0;
  //bottom: 0;
`;

export const FooterSecondMainContainer = styled.div`
  padding: 6rem 2rem 5rem 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border-bottom: 0.4px solid rgb(167, 174, 180, 0.4);
  row-gap: 40px;
  position: relative;
`;

export const FooterSectionContainer = styled.div`
  display: flex;
  margin: 10px 0px;
  min-width: 270px;
  flex-direction: column;
  @media (max-width: 768px) {
    min-width: 200px;
  }
`;

export const FooterSecondSectionContainer = styled.div`
  display: grid;
  grid-template-columns: ${({ numberOfRow }) =>
    numberOfRow == 2 ? "1fr 1fr" : "1fr"};
`;

export const SectionHeading = styled.h2`
  font-size: 1.4rem;
  color: white;
  margin-bottom: 1rem;
`;
export const SectionText = styled.a`
  font-size: 1.2rem;
  font-weight: 400;
  margin: 5px 0px;
  color: #a7aeb4;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: #327b5c;
  }
`;

export const CopyRightContainer = styled.div`
  padding: 1rem;
  h4 {
    color: #a7aeb4;
    font-weight: 300;
  }
`;

export const SocailMediaContainer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 10px;
  span {
    margin: 10px;
  }
`;
export const SocialMediaIcon = styled.a`
  svg {
    width: 20px;
    height: 20px;
    color: white;
    margin: 20px 20px 0px 20px;
    &:hover {
      color: #327b5c;
    }
  }
`;

export const CustomInputContainer = styled.div`
  display: flex;
  width: 300px;
  input {
    width: 250px;
    height: 40px;
    padding: 1rem;
    font-size: 1.2rem;
    &:focus {
      outline: none;
    }
  }
  div {
    width: 50px;
    height: 40px;
    background-color: #327b5c;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      color: white;
      width: 30px;
      height: 30px;
    }
  }
`;

export const LogoImage = styled.img`
  width : 200px;
  height: 50px;
  object-fit: contain;
`
