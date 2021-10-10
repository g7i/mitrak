import { TextField } from "@mui/material";
import styled from "styled-components";

export const FormWrapper = styled.div`
  background-color: whitesmoke;
  border: 0.1px 10px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

export const FormInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 1rem;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const FormHeader = styled.div`
  text-align: center;
  color: white;
  background-color: #1a76d2;
  padding: 1rem 0rem;
`;

export const SelectTextField = styled(TextField)`
  width: 100%;
`;
