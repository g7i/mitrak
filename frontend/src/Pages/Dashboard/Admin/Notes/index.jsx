import { Button, Container, MenuItem, TextField } from "@mui/material";
import React, { useState } from "react";
import {
    FormHeader,
  FormInnerWrapper,
  FormWrapper,
  SelectTextField,
  SelectWrapper,
} from "./Styles";

const Semester = [1, 2, 3, 4, 5, 6, 7, 8];
const Subject = [
  "object oriented programming",
  "c",
  "data structure and algorithm",
  "maths",
  "physics",
];

const Notes = () => {
  const [selectedSem, setSelectedSem] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);
  return (
    <>
      <Container>
          <FormHeader>
              Upload Notes
          </FormHeader>
        <FormWrapper>
          <FormInnerWrapper>
            <SelectTextField
              id="outlined-select-currency"
              select
              label="Semester"
              value={selectedSem}
              onChange={(e) => setSelectedSem(e.target.value)}
            >
              {Semester.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </SelectTextField>
            <SelectTextField
              id="outlined-select-currency"
              select
              label="Subject"
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
            >
              {Subject.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </SelectTextField>

            <TextField id="standard-basic" label="Title" variant="standard" />
            <TextField id="standard-basic" label="Link" variant="standard" />
            <Button variant="contained">Upload</Button>
          </FormInnerWrapper>
        </FormWrapper>
      </Container>
    </>
  );
};

export default Notes;
