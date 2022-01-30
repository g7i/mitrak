import styled from "styled-components";
import BREAKPOINTS from "../../constants/Breakpoints";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";
import { Colors } from '../../constants/UiConstants'

export const Container = styled.div`
  padding: 20px 40px;
  margin-top: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LeftArrowContainer = styled.div`
  position: absolute;
  top: 50%;
  z-index: 2;
  cursor: pointer;
  left: 10px;
  height: 35px;
  width: 35px;
  place-items: center;
  border-radius: 50%;
  background-color: white;
  transition: background-color 0.2s linear;
  transform: translate(-50%, -50%);
  box-shadow: 0 4px 8px black;
  display: none;

  &:hover {
    background-color: white;
  }

  @media only screen and (min-width: ${BREAKPOINTS.sm}) {
    display: grid;
  }
  @media only screen and (min-width: ${BREAKPOINTS.lg}) {
    height: 50px;
    width: 50px;
    left: 27px;
  }
  @media (min-resolution: 120dpi) and (min-width: ${BREAKPOINTS.sm}) {
    left: 27px;
  }
  @media (min-resolution: 120dpi) and (min-width: ${BREAKPOINTS.lg}) {
    left: 20px;
  }
`;

export const RightArrowContainer = styled(LeftArrowContainer)`
  left: unset;
  top: unset;
  right: 10px;
  bottom: 50%;
  transform: translate(50%, 50%);
  @media only screen and (min-width: ${BREAKPOINTS.lg}) {
    right: 25px;
  }
`;

export const NextIcon = styled(FaChevronRight)`
  display: block;
  fill: black;
  font-size: 22px;
  transform: translateX(1.5px);
`;

export const PreviousIcon = styled(FaChevronLeft)`
  display: block;
  fill: black;
  font-size: 22px;
  transform: translateX(-1.5px);
`;

export const ItemWrapper = styled.div`
  padding: 10px;
`;

export const NewsBox = styled.div`
  width: 32%;
  max-height: 40vh;
  padding-bottom: 0.5rem;
  background-color: ${Colors.DETAILS_BACKGROUND};
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 2rem;
    padding: 1rem;
  }
  a {
    pointer-events: auto !important;
  }
`;

export const NewsLink = styled.a`
  padding-left: 0.5rem;
  margin-right: 1rem;
  text-decoration: none;
  color: ${Colors.LINK_COLOR};
`;

export const NewsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
`;

