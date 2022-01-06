import styled from "styled-components";

export const IndicatorWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  position: absolute;
  bottom: 15px;
  right: 15px;
`;

export const Dot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 6px;
  background-color: white;
  opacity: ${(props) => (props.isActive ? 1 : 0.5)};
  margin: 5px;
  transition: 750ms all ease-in-out;
`;

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: hidden;
  position: relative;
`;

export const Slide = styled.div`
  height: 100%;
  width: 100vw;
  flex-shrink: 0;
  background-position: center;
  background-size: cover;
  transition: 750ms all ease-in-out;
  position: relative;
`;

export const ChildrenWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Gradient = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  //background-color: rgba(0, 0, 0, 0.1);
`;

export const SlideTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 10;
  background: rgba(0,0,0,0.5);
  //box-shadow: 0 0 10px #ffffff90;
  border-radius: 10px;
  max-width: 60%;
  padding: 1rem 3rem;
  position: absolute;
  // top: ${({currentSlide}) => (currentSlide * Math.random() * 10)}%;
  // left: ${({currentSlide}) => (currentSlide * 4)}%;
  top: 10%;
  left: 10%;
  animation-delay: 2s;
  animation: ease-in-out 2s alternate;
  overflow: hidden;

  @media (max-width:768px) {
    top: 40%;
    left: 0px;
    width: 100vw;
  }
`;

export const SlideHeading = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: white;
  margin-bottom: 0.5rem;

  @media (max-width:768px) {
    font-size: 1.8rem;
    text-align: center;
  }
`;

export const SlideSubHeading = styled.h2`
  font-size: 1.5rem;
  color: white;

  @media (max-width:768px) {
    font-size: 1.2rem;
    text-align: center;
  }
`;
