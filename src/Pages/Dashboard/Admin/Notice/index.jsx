import { Button, Container, MenuItem, TextField } from "@mui/material";
import React, { useState } from "react";
import {
  FormHeader,
  FormInnerWrapper,
  FormWrapper,
  SelectTextField,
  SelectWrapper,
} from "../Notes/Styles";
import {addNotice} from "../../../../utils/firebase/notices";
import { LoadingButton } from "@mui/lab";
const Notice = () => {
  const [title, setTitle] = React.useState("");
  const [descriotion, setDescription] = React.useState("");
  const [link, setLink] = React.useState("");
  const [loadingUpload, setLoadingUpload] = useState(false);

  const handleUplaod = async () => {
    setLoadingUpload(true);
    await addNotice({
      title : title,
      description : descriotion,
      url : link,
      createdAt : new Date().getTime()
    });
    setLoadingUpload(false);
  };
  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const onDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const onLinkChange = (e) => {
    setLink(e.target.value);
  };

  return (
    <>
      <Container>
        <FormHeader>Upload Notice</FormHeader>
        <FormWrapper>
          <FormInnerWrapper>
            <TextField
              id="standard-basic"
              label="Title"
              variant="standard"
              required
              onChange={onTitleChange}
            />
            <TextField
              id="standard-basic"
              label="Description"
              variant="standard"
              required
              onChange={onDescriptionChange}
            />
            <TextField
              id="standard-basic"
              label="Pdf Link (if any)"
              variant="standard"
              onChange={onLinkChange}
            />
            <LoadingButton
              variant="contained"
              onClick={handleUplaod}
              loading={loadingUpload}
              disabled={!(descriotion && link && title)}
            >
              Upload
            </LoadingButton>
          </FormInnerWrapper>
        </FormWrapper>
      </Container>
    </>
  );
};

export default Notice;
