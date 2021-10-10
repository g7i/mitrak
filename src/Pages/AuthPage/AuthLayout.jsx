import React from 'react'
import { FloatingText, HalfContainer, LoginContainer, Overlay } from './Components'
import { ArrowBack } from '@mui/icons-material'
import { Link } from 'react-router-dom'


const AuthLayout = ({ children }) => {
    return (
        <LoginContainer>
            <HalfContainer>
                <img
                    src='https://www.mitrc.ac.in/wp-content/uploads/2020/08/DSC_0002.jpg'
                    alt="mitrc campus"
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
                <Overlay />
                <FloatingText>Welcome To MITRC</FloatingText>
                <Link to="/">
                    <FloatingText style={{ top: '2%', left: '2%', fontSize: '1rem', display: 'flex', alignItems: 'center', cursor: 'pointer' }}><ArrowBack style={{ marginRight: '0.5rem' }} />Go Back</FloatingText>
                </Link>
            </HalfContainer>
            <HalfContainer>
                {children}
            </HalfContainer>
        </LoginContainer>
    )
}

export default AuthLayout
