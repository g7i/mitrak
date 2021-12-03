import { Autocomplete, Container, MenuItem, TextField } from "@mui/material";
import React, { useState } from "react";
import {
  FormHeader,
  FormInnerWrapper,
  FormWrapper,
} from "../../../../components/styledComponents/Forms";
import { addNotes } from "../../../../utils/firebase/notes";
import { LoadingButton } from "@mui/lab";
import { addNews } from "../../../../utils/firebase/news";
import MultipleInput from "../../../../components/Input/MultipleInput";

const NewsPage = () => {
  const [data , setData ] = useState({
      links : [],
      title : "",
      description : "",
      image : "",
  })
  const onHandleChange = name=>(e)=>{
     setData({...data , [name] : e.target.value})
  }
  const [loadingUpload, setLoadingUpload] = useState(false);
  const handleUplaod = async () => {
    setLoadingUpload(true);
    await addNews(data);
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
            />

            <TextField
              id="standard-basic"
              label="Description"
              variant="standard"
              onChange={onHandleChange("description")}
            />
            <TextField
              id="standard-basic"
              label="image"
              variant="standard"
              onChange={onHandleChange("image")}
            />
            <MultipleInput
              label={"links"}
              onChange={(arr) => {
                setData({ ...data, links: arr });
              }}
            />

            
            <LoadingButton
              variant="contained"
              onClick={handleUplaod}
              loading={loadingUpload}
              disabled={!(data.title && data.description)}
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
