import { ListItem } from "@mui/material";
import styled from "styled-components";

export const ImageLogo = styled.img`
  width: 150px;
  height: auto;
  object-fit: contain;
`;
export const ListItemMainWrapper = styled(ListItem)`
  max-height: ${(props) => (props.open ? "500px" : "50px")};
  transition: max-height 300ms ease-in-out;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  
  div {
    padding-left: 0px;
    padding-right: 0px;
  }
  .listItem{
      padding-left : 1.5rem ;
  }
`;
