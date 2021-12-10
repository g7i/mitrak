import React, { useState } from 'react'
import AuthLayout from './AuthLayout'
import {Link, useHistory} from 'react-router-dom'
import { Container, Heading, SubHeading, Logo, Form, HyperLink } from './Components'
import { TextField, Button, Divider } from '@mui/material'
import GoogleIcon from '../../assets/icons/google.png'
import {useStore} from "../../store";
import {signIn, signUp} from "../../utils/firebase/auth";
import { LoadingButton } from '@mui/lab'

const Register = () => {
    const { push } = useHistory();
    const [ loading, setLoading ] = useState(false);
    const [ student, setStudent ] = useState({
        email: '',
        fullName: '',
        collegeId: '',
        password: ''
    })

    const {
        state: { user },
        actions: { updateUser }
    } = useStore();

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const data = await signUp(student.email, student.password);
            console.log(user)
            updateUser(data);
            setLoading(false)
            push('/student/dashboard');
        } catch (e) {
            console.error(e);
            alert('unable to sign up');
            setLoading(false)
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
                    <TextField onChange={(e) => setStudent(prev => ({ ...prev, [e.target.name]: e.target.value }))} id="user-email" name='email' label="Email" variant="outlined" style={{ width: '100%' }} required />
                    <TextField id="user-name" name="username" label="Full Name" variant="outlined" style={{ width: '100%', marginTop: '1.4rem' }} required />
                    <TextField id="user-id" name="collegeid" label="College Id" variant="outlined" style={{ width: '100%', marginTop: '1.4rem' }} required />
                    <TextField onChange={(e) => setStudent(prev => ({ ...prev, [e.target.name]: e.target.value }))} id="user-password" name="password" label="Password" variant="outlined" type="password" style={{ width: '100%', marginTop: '1.4rem' }} />
                    <LoadingButton 
                        variant="contained" 
                        style={{ width: '100%', marginTop: '2rem', backgroundColor: '#DA0037', fontFamily: `'Oxygen', sans-serif` }}
                        onClick={(e) => handleSignUp(e)}
                        loading={loading}
                        loadingIndicator="Please wait...."
                        >Signup</LoadingButton>
                </Form>
            </Container>
        </AuthLayout>
    )
}

export default Register
