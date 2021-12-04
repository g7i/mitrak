import React from 'react'
import AuthLayout from './AuthLayout'
import {Link, useHistory} from 'react-router-dom'
import { Container, Heading, SubHeading, Logo, Form, HyperLink } from './Components'
import { TextField, Button, Divider } from '@mui/material'
import GoogleIcon from '../../assets/icons/google.png'
import {useStore} from "../../store";
import {signIn, signUp} from "../../utils/firebase/auth";

const Register = () => {
    const { push } = useHistory();
    const {
        state: { user },
        actions: { updateUser }
    } = useStore();

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            const data = await signUp(e.target.email.value, e.target.password.value);
            console.log(user)
            updateUser(data);
            push('/student/dashboard');
        } catch (e) {
            console.error(e);
            alert('unable to sign up');
        }
    };

    return (
        <AuthLayout>
            <Container>
                <Heading>Get Started</Heading>
                <SubHeading>Already have an account ?
                    <Link
                    style={{textDecoration: 'none'}}
                    to="/login">
                        <HyperLink> Login </HyperLink>
                    </Link>
                </SubHeading>
                <div style={{ marginTop: '2rem' }}>
                    <Button variant="outlined" startIcon={<Logo src={GoogleIcon} />}
                        style={{ borderColor: 'grey', color: "#000", fontWeight: 'bold', textTransform: 'capitalize', fontFamily: `'Oxygen', sans-serif` }}
                    >Signup With Google</Button>
                </div>
                <SubHeading style={{ color: "grey", textAlign: 'center' }}>or</SubHeading>
                <Divider light />
                <Form>
                    <TextField id="user-email" label="Email" variant="outlined" style={{ width: '100%' }} required />
                    <TextField id="user-name" label="Full Name" variant="outlined" style={{ width: '100%', marginTop: '1.4rem' }} required />
                    <TextField id="user-id" label="College Id" variant="outlined" style={{ width: '100%', marginTop: '1.4rem' }} required />
                    <TextField id="user-password" label="Password" variant="outlined" type="password" style={{ width: '100%', marginTop: '1.4rem' }} />
                    <Button variant="contained" style={{ width: '100%', marginTop: '2rem', backgroundColor: '#DA0037', fontFamily: `'Oxygen', sans-serif` }}>Signup</Button>
                </Form>
            </Container>
        </AuthLayout>
    )
}

export default Register
