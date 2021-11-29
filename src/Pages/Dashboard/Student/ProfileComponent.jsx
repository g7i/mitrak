import React from 'react'
import styled from 'styled-components'
import { Colors } from '../../../constants/UiConstants'
import { Tab, Tabs, Box, Typography } from '@mui/material'
import { FormHead, FormItem, Form } from './Components'
import { PageContainer } from './Components'
import {useStore} from "../../../store";

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

const defaultImg = "https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg";

const ProfileComponent = () => {
    const {
        state: { user },
        actions: { updateUser }
    } = useStore();
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
                src={user.photoURL ?? defaultImg}
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
                        <FormItem>{user.displayName}</FormItem>
                    </Form>
                    <Form>
                        <FormHead>Email</FormHead>
                        <FormItem>{user.email}</FormItem>
                    </Form>
                    <Form>
                        <FormHead>Contact</FormHead>
                        <FormItem>{user.contact}</FormItem>
                    </Form>
                    <Form>
                        <FormHead>Address</FormHead>
                        <FormItem>{user.address}</FormItem>
                    </Form>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Form>
                        <FormHead>Course Enrolled</FormHead>
                        <FormItem>BTech ({user.branch})</FormItem>
                    </Form>
                    <Form>
                        <FormHead>Current Semester</FormHead>
                        <FormItem>{user.semester}</FormItem>
                    </Form>
                    <Form>
                        <FormHead>University Roll No.</FormHead>
                        <FormItem>{user.roll}</FormItem>
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
