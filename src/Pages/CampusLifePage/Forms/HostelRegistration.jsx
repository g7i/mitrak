import React from 'react';
import {Heading, Paragraph} from "../../../components/styledComponents/GlobalComponents";
import Layout from '../../../constants/Layout';
import styled from 'styled-components';
import {FormControlLabel, Radio, RadioGroup, TextField, Button} from '@mui/material'
import {Autocomplete} from "@mui/lab";
import UploadModal from "../UploadModal";

function HostelRegistration() {
    const [data, setData] = React.useState({

    })

    const [showModal, setShowModal] = React.useState(false);
    const [mediaName, setMediaName] = React.useState("");
    const handleClose = () => setShowModal(false);

    const branches = [
        'AI & DS',
        'Civil Engineering',
        'Computer Science and Engineering',
        'Electrical Engineering',
        'MBA',
        'Mechanical Engineering'
    ]

    return (
        <Layout>
            <Container>
                <Heading style={{ textAlign: 'center' }}>Hostel Registration Form</Heading>
                <Form>
                    <Box>
                        <TextField
                            placeholder="First Name"
                            label="First Name"
                            title="First Name"
                            style={{ width: '34%' }}
                        />
                        <TextField
                            placeholder="Middle Name"
                            label="Middle Name"
                            title="Middle Name"
                            style={{ width: '34%' }}
                        />
                        <TextField
                            placeholder="Last Name"
                            label="Last Name"
                            title="Last Name"
                            style={{ width: '34%' }}
                        />
                    </Box>
                    <Box>
                        <TextField
                            placeholder="DOB"
                            label="DOB"
                            title="DOB"
                            style={{ width: '100%', alignSelf: 'flex-start' }}
                        />
                    </Box>
                    <Box>
                        <TextField
                            placeholder="Father's Name"
                            label="Father's Name"
                            title="Father's Name"
                            style={{ width: '100%', alignSelf: 'flex-start' }}
                        />
                    </Box>
                    <Box style={{ flexDirection: 'column',justifyContent: 'flex-start', alignItems: 'center', textAlign: 'center' }}>
                        <Paragraph>Course</Paragraph>
                        <RadioGroup row aria-label="course" name="row-radio-buttons-group">
                            <FormControlLabel value="btech" control={<Radio />} label="B.tech" />
                            <FormControlLabel value="mtech" control={<Radio />} label="M.tech" />
                            <FormControlLabel value="mba" control={<Radio />} label="MBA" />
                        </RadioGroup>
                    </Box>
                    <Box>
                        <TextField
                            placeholder="Year"
                            label="Year"
                            title="Year"
                            style={{ width: '32%', alignSelf: 'flex-start' }}
                        />
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={branches}
                            sx={{ width: '32%' }}
                            renderInput={(params) => <TextField {...params} label="Branch" />}
                        />
                        <TextField
                            placeholder="College Id"
                            label="College Id"
                            title="College Id"
                            style={{ width: '32%', alignSelf: 'flex-start' }}
                        />
                    </Box>
                    <Box style={{ flexDirection: 'column',justifyContent: 'flex-start', alignItems: 'center', textAlign: 'center' }}>
                        <Paragraph>PMSS Scheme ( J & K )</Paragraph>
                        <RadioGroup row aria-label="pmsss" name="row-radio-buttons-group">
                            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                            <FormControlLabel value="no" control={<Radio />} label="No" />
                        </RadioGroup>
                    </Box>
                    <Box>
                        <TextField
                            placeholder="Contact Number"
                            label="Contact Number"
                            title="Contact Number"
                            style={{ width: '49%', alignSelf: 'flex-start' }}
                        />
                        <TextField
                            placeholder="Father's Contact Number"
                            label="Father's Contact Number"
                            title="Father's Contact Number"
                            style={{ width: '49%', alignSelf: 'flex-start' }}
                        />
                    </Box>
                    <Box>
                        <TextField
                            placeholder="Permanent Address"
                            label="Permanent Address"
                            title="Permanent Address"
                            style={{ width: '100%', alignSelf: 'flex-start' }}
                        />
                    </Box>
                    <Box>
                        <TextField
                            placeholder="City"
                            label="City"
                            title="City"
                            style={{ width: '24%', alignSelf: 'flex-start' }}
                        />
                        <TextField
                            placeholder="District"
                            label="District"
                            title="District"
                            style={{ width: '24%', alignSelf: 'flex-start' }}
                        />
                        <TextField
                            placeholder="State"
                            label="State"
                            title="State"
                            style={{ width: '24%', alignSelf: 'flex-start' }}
                        />
                        <TextField
                            placeholder="Pin Code"
                            label="Pin Code"
                            title="Pin Code"
                            style={{ width: '24%', alignSelf: 'flex-start' }}
                        />
                    </Box>
                    <Box style={{ flexDirection: 'column'}}>
                        <Paragraph>Local Guardian Address</Paragraph>
                        <Box style={{ marginTop: '0.7rem' }}>
                            <TextField
                                placeholder="Line 1"
                                label="Line 1"
                                title="Line 1"
                                style={{ width: '49%', alignSelf: 'flex-start' }}
                            />
                            <TextField
                                placeholder="Line 2"
                                label="Line 2"
                                title="Line 2"
                                style={{ width: '49%', alignSelf: 'flex-start' }}
                            />
                        </Box>
                    </Box>
                    <Box>
                        <TextField
                            placeholder="Allotted Room Number"
                            label="Allotted Room Number"
                            title="Allotted Room Number"
                            style={{ width: '49%', alignSelf: 'flex-start' }}
                        />
                        <TextField
                            placeholder="Allotted Floor"
                            label="Allotted Floor"
                            title="Allotted Floor"
                            style={{ width: '49%', alignSelf: 'flex-start' }}
                        />
                    </Box>
                    <Box>
                        <TextField
                            placeholder="Payment Mode"
                            label="Payment Mode"
                            title="Payment Mode"
                            style={{ width: '49%', alignSelf: 'flex-start' }}
                        />
                        <TextField
                            placeholder="Receipt Number / Transaction Id / DD Number"
                            label="Receipt Number"
                            title="Receipt Number"
                            style={{ width: '49%', alignSelf: 'flex-start' }}
                        />
                    </Box>
                    <Box>
                        <UploadButton onClick={() => {
                            setShowModal(true)
                            setMediaName("Photo")
                        }} >Upload Photo</UploadButton>
                        <UploadButton>Upload Signature</UploadButton>
                        <UploadButton>Upload Parent Signature</UploadButton>
                        <UploadButton>Upload Anti Ragging Form</UploadButton>
                        <UploadButton>Upload Duly Signed Hostel Rules</UploadButton>
                    </Box>
                    <Box>
                        <Button variant="contained">Continue Registration</Button>
                    </Box>
                </Form>
                <UploadModal
                    open={showModal}
                    handleClose={handleClose}
                    mediaName={mediaName}
                />
            </Container>
        </Layout>
    );
}

export default HostelRegistration;

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

const UploadButton = styled.span`
  padding: 0.6rem 2rem;
  background-color: #f1f1f1;
  cursor: pointer;
`;