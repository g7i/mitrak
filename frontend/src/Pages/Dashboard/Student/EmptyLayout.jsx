import React from 'react'
import { Container } from '@mui/material'
import { HalfImage, Heading } from '../../../components/styledComponents/GlobalComponents'
import NoteImg from '../../../assets/images/notes.svg'

const EmptyLayout = () => {
    return (
        <Container style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '5rem'}}>
            <HalfImage 
                src={NoteImg}
                alt="Empty search"
            />
            <Heading>Start Searching</Heading>
        </Container>
    )
}

export default EmptyLayout
