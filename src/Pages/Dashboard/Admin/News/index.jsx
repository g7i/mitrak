import { Autocomplete, Container, MenuItem, TextField } from "@mui/material";
import React, { useState } from "react";
import {
  FormHeader,
  FormInnerWrapper,
  FormWrapper,
  SelectTextField,
} from "../../../../components/styledComponents/Forms";
import { addNotes } from "../../../../utils/firebase/notes";
import { LoadingButton } from "@mui/lab";
import { addNews, NewsType } from "../../../../utils/firebase/news";
import MultipleInput from "../../../../components/Input/MultipleInput";


const NewsPage = () => {
  const emptyData = {
    links: [],
    title: "",
    description: "",
    image: "",
    type : ""
  };
  const [data, setData] = useState({ ...emptyData });
  const onHandleChange = (name) => (e) => {
    setData({ ...data, [name]: e.target.value });
  };
  const [loadingUpload, setLoadingUpload] = useState(false);
  const handleUplaod = async () => {
    setLoadingUpload(true);
    try {
      const docId = await addNews(data);
      if (docId) {
        setData({ ...emptyData });
      } else {
        throw new Error("");
      }
    } catch (error) {
      alert("failed in uploading news, try again!");
    }
    setLoadingUpload(false);
  };

  return (
    <>
      <Container>
        <FormHeader>Upload NewsPage</FormHeader>
        <FormWrapper>
          <FormInnerWrapper>
            <TextField
              id="standard-basic"
              label="Title"
              variant="standard"
              onChange={onHandleChange("title")}
              value={data.title}
            />

            <TextField
              id="standard-basic"
              label="Description"
              variant="standard"
              onChange={onHandleChange("description")}
              value={data.description}
            />
            <TextField
              id="standard-basic"
              label="image"
              variant="standard"
              onChange={onHandleChange("image")}
              value={data.image}
            />

            <SelectTextField
              id="outlined-select-currency"
              select
              label="Semester"
              value={data.type}
              onChange={(e) => setData({...data , type : e.target.value})}
            >
              {NewsType.map((option) => (
                <MenuItem key={option} value={option.value}>
                  {option.name}
                </MenuItem>
              ))}
            </SelectTextField>
            <MultipleInput
              value={data.links}
              label={"links"}
              onChange={(arr) => {
                setData({ ...data, links: arr });
              }}
            />

            <LoadingButton
              variant="contained"
              onClick={handleUplaod}
              loading={loadingUpload}
              disabled={!(data.title && data.description && data.type)}
            >
              Upload
            </LoadingButton>
          </FormInnerWrapper>
        </FormWrapper>
      </Container>
    </>
  );
};

export default NewsPage;
