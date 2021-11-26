import {
  Autocomplete,
  Container,
  MenuItem,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import {
  FormHeader,
  FormInnerWrapper,
  FormWrapper,
  SelectTextField,
} from "./Styles";
import { addNotes } from "../../../../utils/firebase/notes";
import { LoadingButton } from "@mui/lab";
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
  const [link, setLink] = useState("");
  const [title, setTitle] = useState("");
  const [loadingUpload, setLoadingUpload] = useState(false);
  const handleUplaod = async () => {
    setLoadingUpload(true);
    await addNotes({
      semester: selectedSem,
      title: title,
      link: link,
      subject: selectedSubject,
    });
    setLoadingUpload(false);
  };
  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const onLinkChange = (e) => {
    setLink(e.target.value);
  };
  return (
    <>
      <Container>
        <FormHeader>Upload Notes</FormHeader>
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
            <Autocomplete
              disablePortal
              id="subject-select"
              options={Subject}
              sx={{ width: "100%" }}
              renderInput={(params) => (
                <TextField {...params} label="Subject" />
              )}
              value={selectedSubject}
              onInputChange={(event, newInputValue) => {
                setSelectedSubject(newInputValue);
              }}
            />

            <TextField
              id="standard-basic"
              label="Title"
              variant="standard"
              onChange={onTitleChange}
            />
            <TextField
              id="standard-basic"
              label="Link"
              variant="standard"
              onChange={onLinkChange}
            />
            <LoadingButton
              variant="contained"
              onClick={handleUplaod}
              loading={loadingUpload}
              disabled={!(selectedSubject && selectedSem && link && title)}
            >
              Upload
            </LoadingButton>
          </FormInnerWrapper>
        </FormWrapper>
      </Container>
    </>
  );
};

export default Notes;
