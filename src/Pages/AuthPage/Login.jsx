import React from 'react'
import AuthLayout from './AuthLayout'
import {Link, useHistory} from 'react-router-dom'
import { Container, Heading, SubHeading, Logo, Form, HyperLink } from './Components'
import { TextField, Button, Divider } from '@mui/material'
import GoogleIcon from '../../assets/icons/google.png'
import {useStore} from "../../store";
import {signIn} from "../../utils/firebase/auth";


const Login = () => {
    const { push } = useHistory();
    const {
        state: { user },
        actions: { updateUser }
    } = useStore();

    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            const data = await signIn(e.target.email.value, e.target.password.value);
            console.log(user)
            updateUser(data);
            push('/student/dashboard');
        } catch (e) {
            console.error(e);
            alert('unable to sign in');
        }
    };

    return (
        <AuthLayout>
            <Container>
                <Heading>Get Started</Heading>
                <SubHeading>New here ?
                    <Link
                    style={{textDecoration: 'none'}}
                    to="/register">
                        <HyperLink> Register </HyperLink>
                    </Link>
                     with an new account
                </SubHeading>
                <SubHeading style={{ color: "grey", textAlign: 'center' }}>or</SubHeading>
                <Divider light />
                <Form onSubmit={handleSignIn}>
                    <TextField name="email" label="Email" variant="outlined" style={{ width: '100%' }} required />
                    <TextField name="password" label="Password" variant="outlined" type="password" style={{ width: '100%', marginTop: '2rem' }} required />
                    <Button type="submit" variant="contained" style={{ width: '100%', marginTop: '2rem', backgroundColor: '#DA0037', fontFamily: `'Oxygen', sans-serif` }}>Login</Button>
                </Form>
            </Container>
        </AuthLayout>
    )
}

export default Login
