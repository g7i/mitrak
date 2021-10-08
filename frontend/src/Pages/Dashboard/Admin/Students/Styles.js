import styled from "styled-components";
import InputBase from "@mui/material/InputBase";
import { TextField } from "@mui/material";

export const AppBar = styled.div``;

export const Search = styled.div`
  position: relative;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.1);
  margin-left: 0;
  width: 30%;
  max-width: 200px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
  @media screen and (max-width: 768px) {
    width: auto;
    margin-left: 1rem;
  }
`;

export const SearchIconWrapper = styled.div`
  padding: 1rem;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`;

export const StyledInputBase = styled(InputBase)`
  color: inherit;

  .MuiInputBase-input {
    padding: 1rem 1rem 1rem 4rem;
    padding-left: 4rem;
    transition: width 100ms linear;
    width: 100%;
    height: 50%;
    @media screen and (max-width: 768px) {
      width: 12ch;
      &:focus {
        width: "20ch";
      }
    }
  }
`;

export const SelectAppBar = styled(TextField)`
  min-width: 200px;
  background-color: rgba(255, 255, 255, 0.1);
  border: 0px;
  outline: none;
  .MuiInputLabel-root {
    color: white;
  }
  .MuiOutlinedInput-root {
    height: 70%;
  }
  .MuiSelect-select {
    color: inherit;
  }
`;
