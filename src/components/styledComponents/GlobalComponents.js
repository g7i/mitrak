import styled from "styled-components";
import { Colors } from "../../constants/UiConstants";

export const FullScreenContainer = styled.div`
  width: 100vw;
  height: 90vh;
`;

export const HalfScreenContainer = styled.div`
  width: 100vw;
  min-height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ background }) => background ?? "#FFFFFF"};
  background-color: #FFEEDB;
`;

export const FillImage = styled.img`
  width: 100%;
  margin: 2vh 0;
  object-fit: contain;
`;

export const HalfImage = styled.img`
  width: 50%;
  margin: 0 auto;
  object-fit: contain;
`;

export const OneThirdImage = styled.img`
  width: 33%;
  margin: 0 auto;
  object-fit: contain;
  @media (max-width: 1120px) {
    width: 50%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Wrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  height: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const HalfWrapper = styled.div`
  width: 48%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    width: 100%;
    padding-bottom: 0.5rem;
    padding-top: 0.5rem;
  }
`;

//TYPOGRAPHY
export const Heading = styled.h1`
  font-size: 2.5rem;
  margin: ${(props) => props.margin || "2vh 0 0 0"};
  font-family: 'Lato', sans-serif;
  color: ${(props) => props.color || Colors.PRIMARY};
  
  letter-spacing: 2px;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const SubHeading = styled.h3`
  font-size: 1.8rem;
  /* text-align: center; */
  margin: ${(props) => props.margin || "2vh 0 0 0"};
  font-family: 'Lato', sans-serif;
  color: ${(props) => props.color || Colors.SECONDARY};
  letter-spacing: 1.6px;
  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin-top: 1.5rem;
  }
`;

export const HyperLink = styled.a`
  color: #0000ff;
  font-style: italic;
  font-size: 1.5rem;
  margin-top: 1rem;
  cursor: pointer;
`;

export const Paragraph = styled.p`
  font-size: 1.3rem;
  /* text-align: center; */
  text-align: ${({ align }) => align ? align : 'justify'};
  line-height: 1.8rem;

  font-family: "Lato", sans-serif;
  margin-top: ${props=>props.marginTop || "1rem"};
  color: ${({ color }) => color ?? Colors.TEXT_PRIMARY};
  @media (max-width: 768px) {
    font-size: 1rem;
    text-align: ${({align}) => align ? align : 'justify'};
  }
`;

export const BannerTextContainer = styled.div`
  width: 30%;
  margin-left: 10vw;

  @media (max-width: 768px) {
    width: 100%;
    margin: 0;
    text-align: center;
  }
`;

export const BannerHeading = styled.h1`
  font-size: 4rem;
  font-family: "Bebas Neue", cursive;
  color: ${Colors.WHITE};
  letter-spacing: 2px;
  z-index: 100;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const Container = styled.div`
  margin-top: 10vh;
  padding: 0 15vw;
  @media (max-width: 768px) {
    padding: 0.5vh 2rem;
    margin-top: 5vh;
  }
`;

export const PageContainer = styled.div`
  padding: 2vw 5vw;
  /* height: 100vh;
    overflow-y: scroll; */
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: ${(props) => props.justify || "space-between"};
  align-items: ${(props) => props.align || "center"};
  margin: ${(props) => props.margin || "2.4vh 0 0 0"};
  flex-wrap: ${(props) => props.wrap || "no-wrap"};
  gap: ${(props) => `${props.gap}px` || "0"};
  row-gap: ${(props) => `${props.rowGap}px` || "0"};

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Box = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const BoxHeading = styled.h1`
  font-size: 2.4rem;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 1.4rem;
    text-align: center;
    width: 100%;
  }
`;

export const BannerContainer = styled.div`
  background-image: url(${({ imageUrl }) => imageUrl});
  height: 30vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-clip: border-box;
  background-position: center;
  display: flex;
  align-items: center;
  position: relative;
`;

export const ListItem = styled.li`
  color: ${Colors.TEXT_SECONDARY};
  margin-top: 1vh;
  font-size: 1.2rem;
  letter-spacing: 1px;
`;

export const FormInput = styled.input`
  padding: 0.3vw;
  font-size: 1vw;
  width: 100%;
  margin-top: 0.5vw;
`;

export const FillButton = styled.button`
  background-color: ${Colors.PRIMARY};
  border: none;
  padding: 1vh;
  width: 100%;
  font-size: 1.5rem;
  color: white;
  margin-top: 3vh;
  cursor: pointer;
`;
