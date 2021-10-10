import React from 'react'
import AuthLayout from './AuthLayout'
import { Link } from 'react-router-dom'
import { Container, Heading, SubHeading, Logo, Form, HyperLink } from './Components'
import { TextField, Button, Divider } from '@mui/material'
import GoogleIcon from '../../assets/icons/google.png'


const Login = () => {
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
                <div style={{ marginTop: '2rem' }}>
                    <Button variant="outlined" startIcon={<Logo src={GoogleIcon} />}
                        style={{ borderColor: 'grey', color: "#000", fontWeight: 'bold', textTransform: 'capitalize', fontFamily: `'Oxygen', sans-serif` }}
                    >Login With Google</Button>
                </div>
                <SubHeading style={{ color: "grey", textAlign: 'center' }}>or</SubHeading>
                <Divider light />
                <Form>
                    <TextField id="user-email" label="Email" variant="outlined" style={{ width: '100%' }} required />
                    <TextField id="user-email" label="Password" variant="outlined" type="password" style={{ width: '100%', marginTop: '2rem' }} />
                    <Button variant="contained" style={{ width: '100%', marginTop: '2rem', backgroundColor: '#DA0037', fontFamily: `'Oxygen', sans-serif` }}>Login</Button>
                </Form>
            </Container>
        </AuthLayout>
    )
}

export default Login
