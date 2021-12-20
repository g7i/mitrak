import React from 'react'
import styled from 'styled-components'
import { FormHead, FormItem, Form } from '../../Student/Components'
import { PageContainer } from '../../Student/Components'
import { Colors } from '../../../../constants/UiConstants'
import {useStore} from "../../../../store";


const defaultImg = "https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg";

const AdminProfile = () => {
    const {
        state: { user },
        actions: { updateUser }
    } = useStore();

    return (
        <PageContainer>
            <ProfileImage
                src={user?.photoURL ?? defaultImg}
                alt="student profile image"
            />
            <div style={{ width: '75%' }}>
                <Form>
                    <FormHead>Full Name</FormHead>
                    <FormItem>{user?.displayName}</FormItem>
                </Form>
                <Form>
                    <FormHead>Email</FormHead>
                    <FormItem>{user?.email}</FormItem>
                </Form>
                <Form>
                    <FormHead>Contact</FormHead>
                    <FormItem>{user?.contact}</FormItem>
                </Form>
                <Form>
                    <FormHead>Role</FormHead>
                    <FormItem>{user?.role}</FormItem>
                </Form>
            </div>
        </PageContainer>
    )
}

export default AdminProfile

const ProfileImage = styled.img`
    width: 20rem;
    height: 20rem;
    object-fit: contain;
    border: 1px solid ${Colors.BORDER_COLOR};
`;
