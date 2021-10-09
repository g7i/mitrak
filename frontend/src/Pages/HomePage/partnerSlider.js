import styled from "styled-components";

export const SliderContainer = styled.div`
  width: ${(props) => props.widthOfSlider + "px"};
  height: 130px;
  margin: 0 auto;
  padding: 10px;
  position: relative;
  overflow: hidden;
`;
export const SliderInnerContainer = styled.div`
  display: flex;
  position: absolute;
  left: ${(props)=>10*props.left+"px"};
  transition: left 300ms linear;
`;

export const SliderImage = styled.img`
  width: ${(props) => props.widthOfImage+ "px"};
  height: 100px;
`;

export const OurPartnerText = styled.h3`
  margin: 0 auto;
  color: #777777;
  text-align : center;
  font-weight: 500;
  margin: 1.5rem 0;
`;