import React from 'react';
import Layout from '../../../constants/Layout';
import styled from "styled-components";
import {Heading, Paragraph} from "../../../components/styledComponents/GlobalComponents";
import {FormControlLabel, Radio, RadioGroup, TextField, Button} from '@mui/material'

const PermissionGoingOutsideForm = () => {
    return (
        <Layout>
            <Container>
                <Form>
                    <Heading style={{ textAlign: 'center' }}>Permission For Going Outside / Home</Heading>
                    <Box>
                        <TextField
                            placeholder="Name Of Hostel Inmate"
                            label="Name Of Hostel Inmate"
                            title="NameOfHostelInmate"
                            style={{ width: '24%', alignSelf: 'flex-start' }}
                        />
                        <TextField
                            placeholder="Father's Contact Number"
                            label="Father's Contact Number"
                            title="Father's Contact Number"
                            style={{ width: '24%', alignSelf: 'flex-start' }}
                        />
                        <TextField
                            placeholder="Year"
                            label="Year"
                            title="Year"
                            style={{ width: '24%', alignSelf: 'flex-start' }}
                        />
                        <TextField
                            placeholder="Branch"
                            label="Branch"
                            title="Branch"
                            style={{ width: '24%', alignSelf: 'flex-start' }}
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
                            placeholder="Date Of Going"
                            label="Date Of Going"
                            title="Date Of Going"
                            style={{ width: '32%', alignSelf: 'flex-start' }}
                        />
                        <TextField
                            placeholder="Date Of Return"
                            label="Date Of Return"
                            title="Date Of Return"
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

export default PermissionGoingOutsideForm;

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
