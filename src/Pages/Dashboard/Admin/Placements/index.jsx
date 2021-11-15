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
              <TextField
                id="standard-basic"
                label="Company Name"
                variant="standard"
                required
              />
              <TextField id="standard-basic" label="Company Logo (URL)" variant="standard" required />
              <TextField
                id="standard-basic"
                label="Document (Job Description Link)"
                variant="standard"
                required
              />
              <TextField
                id="standard-basic"
                label="Description"
                variant="standard"
              />
              <TextField
                id="standard-basic"
                label="Package"
                variant="standard"
              />
              <TextField
                id="standard-basic"
                label="Eligible Student Creteria"
                variant="standard"
              />
              <TextField
                id="standard-basic"
                label="Apply Link"
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
