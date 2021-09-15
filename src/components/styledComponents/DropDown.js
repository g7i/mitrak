import styled from "styled-components";
import { AiOutlineDown } from "react-icons/ai";

export const DropDownOuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const DropDownContainer = styled.div`
    display: flex;
    align-items: center;
    overflow: hidden;
`;

export const DropDownIcon = styled(AiOutlineDown)`
  width: 14px;
  height: 14px;
`

export const DropDownContentContainer = styled.div`
  background-color: white;
  position: absolute;
  top: 50px;
  z-index: 1000;
  padding: 1rem;
  ul {
    list-style-type: none;
    li {
      padding: 1rem 0rem;
      &:hover {
        a {
          color: #7b7fda;
        }
      }
    }
  }
  a {
    text-decoration: none;
    font-size: 1.4rem;
    color: black;
  }
  display: "";
  @media (min-width: 768px) {
    display: ${({ visible }) => (visible ? "" : "none")};
  }
  @media (max-width: 768px) {
    position: relative;
    top: 0;
    ul {
      max-height: "0px";
      overflow: hidden;
      max-height: ${({ visible }) => (visible ? "800px" : "0px")};
      transition: max-height 1s ease;
    }
    a {
      font-size: 1.2rem;
    }
  }
`;


