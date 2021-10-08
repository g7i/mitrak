import React from 'react'
import styled from 'styled-components'
import { Colors } from '../../../constants/UiConstants'
import { Tab, Tabs, Box, Typography } from '@mui/material'
import { FormHead, FormItem, Form } from './Components'
import { PageContainer } from './Components'

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

const ProfileComponent = () => {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    return (
        <PageContainer>
            <ProfileImage
                src="https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg"
                alt="student profile image"
            />
            <div style={{width: '75%'}}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Personal" {...a11yProps(0)} />
                        <Tab label="Academics" {...a11yProps(1)} />
                    </Tabs>
                </Box>

                <TabPanel value={value} index={0}>
                    <Form>
                        <FormHead>Full Name</FormHead>
                        <FormItem>Keshav Saini</FormItem>
                    </Form>
                    <Form>
                        <FormHead>Email</FormHead>
                        <FormItem>skeshav162@gmail.com</FormItem>
                    </Form>
                    <Form>
                        <FormHead>Contact</FormHead>
                        <FormItem>7014015981</FormItem>
                    </Form>
                    <Form>
                        <FormHead>Address</FormHead>
                        <FormItem>Kali mori heera bass</FormItem>
                    </Form>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Form>
                        <FormHead>Course Enrolled</FormHead>
                        <FormItem>BTech (Computer Science)</FormItem>
                    </Form>
                    <Form>
                        <FormHead>Current Semester</FormHead>
                        <FormItem>7th</FormItem>
                    </Form>
                    <Form>
                        <FormHead>University Roll No.</FormHead>
                        <FormItem>18EMCCS052</FormItem>
                    </Form>
                    <Form>
                        <FormHead>College Id</FormHead>
                        <FormItem>1810052</FormItem>
                    </Form>
                </TabPanel>
            </div>
        </PageContainer>
    )
}

export default ProfileComponent



const ProfileImage = styled.img`
    width: 20rem;
    height: 20rem;
    object-fit: contain;
    border: 1px solid ${Colors.BORDER_COLOR};
`;