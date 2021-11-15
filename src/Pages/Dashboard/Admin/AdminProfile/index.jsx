import React from 'react'
import styled from 'styled-components'
import { FormHead, FormItem, Form } from '../../Student/Components'
import { PageContainer } from '../../Student/Components'
import { Colors } from '../../../../constants/UiConstants'


const AdminProfile = () => {

    return (
        <PageContainer>
            <ProfileImage
                src="https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg"
                alt="student profile image"
            />
            <div style={{ width: '75%' }}>
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
                    <FormHead>Role</FormHead>
                    <FormItem>HOD</FormItem>
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