import styled from "styled-components";

export const FooterMainContainer = styled.div`
  width: 100vw;
  background-color: #32404d;
  flex-direction: column;
  display: flex;
  align-items: center;
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
