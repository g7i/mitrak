import { Button, Container, MenuItem, TextField } from "@mui/material";
import React, { useState } from "react";
import {
    FormHeader,
  FormInnerWrapper,
  FormWrapper,
  SelectTextField,
  SelectWrapper,
} from "../Notes/Styles";

const Semester = [1, 2, 3, 4, 5, 6, 7, 8];
const Subject = [
  "object oriented programming",
  "c",
  "data structure and algorithm",
  "maths",
  "physics",
];

const Notice = () => {
  const [selectedSem, setSelectedSem] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);
  return (
    <>
      <Container>
          <FormHeader>
              Upload Notice
          </FormHeader>
        <FormWrapper>
          <FormInnerWrapper>
            <TextField id="standard-basic" label="Title" variant="standard" required />
            <TextField id="standard-basic" label="Description" variant="standard" required />
            <TextField id="standard-basic" label="Pdf Link (if any)" variant="standard" />
            <Button variant="contained">Upload</Button>
          </FormInnerWrapper>
        </FormWrapper>
      </Container>
    </>
  );
};

export default Notice;
