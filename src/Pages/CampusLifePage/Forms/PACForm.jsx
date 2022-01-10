import React from 'react';
import Layout from '../../../constants/Layout';
import styled from "styled-components";
import {Heading, Paragraph} from "../../../components/styledComponents/GlobalComponents";
import {FormControlLabel, Radio, RadioGroup, TextField, Button} from '@mui/material'

const PacForm = () => {
    return (
        <Layout>
            <Container>
                <Form>
                    <Heading style={{ textAlign: 'center' }}>Permission For Accessories & Celebration</Heading>
                    <Box>
                        <TextField
                            placeholder="Name Of Hostel Inmate"
                            label="Name Of Hostel Inmate"
                            title="NameOfHostelInmate"
                            style={{ width: '32%', alignSelf: 'flex-start' }}
                        />
                        <TextField
                            placeholder="Year"
                            label="Year"
                            title="Year"
                            style={{ width: '32%', alignSelf: 'flex-start' }}
                        />
                        <TextField
                            placeholder="Branch"
                            label="Branch"
                            title="Branch"
                            style={{ width: '32%', alignSelf: 'flex-start' }}
                        />
                    </Box>
                    <Box style={{ flexDirection: 'column',justifyContent: 'flex-start', alignItems: 'center', textAlign: 'center' }}>
                        <Paragraph>Hostel</Paragraph>
                        <RadioGroup row aria-label="hostel" name="row-radio-buttons-group">
                            <FormControlLabel value="boys" control={<Radio />} label="Boys" />
                            <FormControlLabel value="girls" control={<Radio />} label="Girls" />
                        </RadioGroup>
                    </Box>
                    <Box>
                        <TextField
                            placeholder="Room Number"
                            label="Room Number"
                            title="Room Number"
                            style={{ width: '32%', alignSelf: 'flex-start' }}
                        />
                        <TextField
                            placeholder="Date"
                            label="Date"
                            title="Date"
                            style={{ width: '32%', alignSelf: 'flex-start' }}
                        />
                        <TextField
                            placeholder="Category Of Permission for Sports Item, Celebration, CCTV, Recording, Others"
                            label="Category Of Permission"
                            title="Category Of Permission"
                            style={{ width: '32%', alignSelf: 'flex-start' }}
                        />
                    </Box>
                    <Box>
                        <TextField
                            placeholder="Description"
                            label="Description"
                            title="Description"
                            style={{ width: '100%', alignSelf: 'flex-start' }}
                        />
                    </Box>
                    <Box>
                        <Button variant="contained">Continue Submission</Button>
                    </Box>
                </Form>
            </Container>
        </Layout>
    );
};

export default PacForm;

const Container = styled.div`
  padding: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: 0 auto;
`;

const Box = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 2rem;
`;
