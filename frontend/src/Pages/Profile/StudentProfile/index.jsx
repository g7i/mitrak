import React from 'react'
import Layout from '../../../constants/Layout'
import { Container, Tab, Tabs, Box, Typography } from '@mui/material'
import { Heading } from '../../../components/styledComponents/GlobalComponents'
import { ProfilePicture, FormHead, FormItem, Form } from './Components'

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

const StudentProfile = () => {

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
        <Layout>
            <Container style={{ marginTop: '3rem', boxShadow: 'rgba(0,0,0,0.3)', border: '2px solid black', display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ position: 'relative', width: '25%', display: 'flex', alignItems: 'center' }}>
                    <ProfilePicture
                        src='https://image.cnbcfm.com/api/v1/image/106689818-1599150563582-musk.jpg?v=1630603757'
                    />
                </div>
                <div style={{ width: '65%' }}>
                    <Heading>User Information</Heading>
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
            </Container>
        </Layout>
    )
}

export default StudentProfile

