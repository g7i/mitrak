import styled, {css} from "styled-components";
import {Link} from "react-router-dom";

export const PageHead = styled.div`
  border-radius: 5px;
  box-shadow: 5px 5px 5px grey;
  border: 1px solid black;
  font-size: 22px;
  width: fit-content;
  padding: 5px 20px;
  font-family: Arial, serif;
  font-weight: 500;
  font-style: italic;
`;
export const H4 = styled.h4`
  border-left: 5px solid #1c2f46;
  box-shadow: 1px 1px 6px -2px;
  color: #1c2f46;
  display: table;
  font-family: serif;
  font-size: 22px;
  font-style: italic;
  font-weight: 700;
  margin: 12px 0;
  padding: 7px;
`;
export const H3 = styled.h3`
  color: #1c2f46;
  font-family: serif;
  font-size: 26px;
  font-weight: ${({bold}) => bold ? 700 : 500};
  margin: 8px 0;
  padding: 7px;
  line-height: 1.1;
`;

export const Cont = styled.section`
  margin: 30px 0 50px;

  p {
    font-weight: 400;
    font-family: serif;
    font-size: 14px;
    line-height: 20px;
    margin: 15px 0 20px;
    text-align: justify;
    * {
      font-family: serif;
      font-size: 14px;
      line-height: 20px;
    }

    &.filled, &.bordered {
      background-color: #324a8a;
      color: white;
      border-radius: 5px;
      padding: 5px 10px;
    }
    &.bordered {
      color: #324a8a;
      border: 1px solid #324a8a;
      background-color: transparent;
    }
  }

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
    margin-top: 15px;
  }

  ul {
    margin-left: 20px;
  }

  li {
    list-style-position: inside;
    font-weight: 400;
    font-family: serif;
    font-size: 14px;
    line-height: 20px;
  }

  .grid {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-gap: 5px;
    &.three {
      grid-template-columns: 33.3% 33.3% 33.3%;
    }

    img.loaded {
      background-color: #324a8a;
      height: 100%;
    }
  }

  @media screen and (max-width: 1024px) {
    margin-bottom: 20px;
    .grid.three {
      grid-template-columns: 50% 50%;
    }
  }

  a {
    color: #324a8a;
    text-decoration: none;
    font-weight: 500;
    font-family: serif;
    font-size: 15px;
    line-height: 20px;

    &:hover {
      text-decoration: underline;
    }
  }
  
  table {
    margin-top: 15px;
    &, * {
      font-family: serif;
      font-size: 15px;
      line-height: 20px;
    }
    tr {
      background-color: transparent;
    }
    td {
      background-color: transparent;
      font-weight: 500;
      padding: 5px;
    }
    th {
      font-weight: 600;
    }
  }
`;

export const Event = styled.div`
  color: #1c2f46;
  border: 1px solid rgba(34, 34, 34, 0.2);
  border-radius: 5px;
  padding: 15px;
  transition: all 0.3s ease 0s;
  margin-top: 20px;
  cursor: pointer;
  user-select: none;
  &:hover {
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  }
  ${({full}) => full && css`
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  `}
  
  .title {
    font-size: 15px;
    line-height: 20px;
    font-family: serif;
    font-weight: 600;
  }
  .text {
    font-size: 14px;
    line-height: 20px;
    font-family: serif;
    font-weight: 500;
    margin: 5px 0;
    transition: all 3s ease;
    ${({ full }) => !full && css`
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      line-clamp: 1;
      -webkit-box-orient: vertical;
    `}
  }
  .foot {
    display: flex;
    justify-content: space-between;
    margin-top: 7px;
  }
  .date, .inst {
    font-size: 14px;
    line-height: 20px;
    font-family: serif;
    font-weight: 500;
    color: #324a8a;
  }
  .inst {
    display: ${({full}) => full ? 'none' : 'flex'};
    align-items: center;
    span {
      margin-left: 2px;
      margin-right: 5px;
      transition: all 0.3s ease;
    }
  }
  &:hover .inst span {
    margin-left: 5px;
    margin-right: 2px;
  }
`;


export const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  .content {
    max-width: 770px;
    width: 770px;
  }
  .content.full {
    max-width: calc(770px + 20%);
    width: calc(770px + 20%);
  }

  .related {
    display: none;
  }

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    .content, .content.full {
      max-width: unset;
      width: 90%;
    }

    .related {
      display: block;
    }
  }
`;

export const Right = styled.aside`
  border-left: 1px solid #d9d9d9;
  padding-left: 23px;
  display: flex;
  flex-direction: column;
  width: 20%;
  flex-grow: 0;
  margin: 50px 0 20px 25px;
  height: fit-content;
  @media screen and (max-width: 1024px) {
    width: 90%;
    padding-left: 0;
    border: none;
    margin-left: 0;
    margin-top: 20px;
  }
`;

export const A = styled(Link)`
  color: white;
  background-color: #324a8a;
  text-decoration: none;
  user-select: none;
  padding: 10px 12px;
  line-height: 16px;
  font-size: 12px;
  min-height: 35px;
  display: grid;
  align-items: center;
  transition: all 0.2s linear;
  border: 1px solid white;

  &:hover {
    background-color: white;
    color: #324a8a;
    border: 1px solid #324a8a;
  }

  ${({active}) => active && css`
    background-color: white;
    color: #324a8a;
    border: 1px solid #324a8a;
  `}
`;
