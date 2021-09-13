import styled from "styled-components";

export const Container = styled.div`
  margin: 20px 10px;
  font-size: 1rem;
  @media screen and (min-width: 1024px) {
    margin: 40px 60px;
    font-size: 1.2rem;
  }
`;

export const Wrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 20px;
  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, calc(33% - 12.5px));
    grid-gap: 25px;
    margin-top: 40px;
  }
`;

export const CardTitle = styled.h3`
  margin: 10px 0;
`;

export const CardContent = styled.p`
  font-size: 0.8em;
  line-height: 1.5em;
`;

export const CardWrapper = styled.div`
  border: 1px solid rgba(128, 128, 128, 0.3);
  padding: 15px;
  border-radius: 3px;
`;

export const ImageWrapper = styled.div`
  overflow: hidden;
  background: yellow;
  height: 300px;
  border-radius: 3px;
`;

export const CardImage = styled.img`
  display: inline-block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s linear;
  object-position: center;
  &:hover {
    transform: scale(1.1);
  }
`;
