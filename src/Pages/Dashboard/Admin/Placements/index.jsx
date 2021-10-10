import { Button, Container, TextField } from '@mui/material';
import React from 'react'
import { FormHeader, FormInnerWrapper, FormWrapper } from '../../../../components/styledComponents/Forms';

const PlacementsPage = () => {
    return (
      <>
        <Container>
          <FormHeader>Upload Placement News</FormHeader>
          <FormWrapper>
            <FormInnerWrapper>
              <TextField id="standard-basic" label="Title" variant="standard" />
              <TextField
                id="standard-basic"
                label="Company"
                variant="standard"
              />
              <TextField id="standard-basic" label="Image" variant="standard" />
              <TextField
                id="standard-basic"
                label="Document"
                variant="standard"
              />
              <TextField
                id="standard-basic"
                label="Description"
                variant="standard"
              />
              <TextField
                id="standard-basic"
                label="package"
                variant="standard"
              />
              <TextField
                id="standard-basic"
                label="apply link"
                variant="standard"
              />
              <Button variant="contained">Upload</Button>
            </FormInnerWrapper>
          </FormWrapper>
        </Container>
      </>
    );
}

export default PlacementsPage
