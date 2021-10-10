import React, {useState} from 'react'
import { FixImg, PageContainer } from './Components'
import { Autocomplete, TextField, Container, Typography } from '@mui/material'
import { DownloadForOffline, NotesOutlined, Print } from '@mui/icons-material'
import EmptyLayout from './EmptyLayout';

const semester = [
    { label: '1', id: 1 },
    { label: '2', id: 2 },
    { label: '3', id: 3 },
    { label: '4', id: 4 },
    { label: '5', id: 5 },
    { label: '6', id: 6 },
    { label: '7', id: 7 },
    { label: '8', id: 8 },
];

const demoResult = 'https://www.sheffield.ac.uk/polopoly_fs/1.40668!/image/Summary-of-Results-sample.jpg'

const Results = () => {

    const [selectedSem, setSelectedSem] = useState(null);

    return (
        <PageContainer style={{ flexDirection: 'column' }}>
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={semester}
                sx={{ width: '100%' }}
                onChange={(e) => setSelectedSem(e.target.outerText)}
                renderInput={(params) => <TextField {...params} label="Semester" />}
            />
            <>
                {selectedSem ? <Result /> : <EmptyLayout />}
            </>
        </PageContainer>
    )
}

export default Results


const Result = () => {
    return (
        <>
            <Container style={{ height: '35rem', width: 'max-content', padding: '2rem', border: '1px solid gray', marginTop: '2rem' }}>
                <FixImg
                    src={demoResult}
                    alt="student result"
                />
            </Container>
            <Container style={{ display: 'flex', alignItems: 'center', width: '50%', marginTop: '2rem' }}>
                <Container style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                    <DownloadForOffline style={{ cursor: 'pointer' }} fontSize="large" color="primary" />
                    <Typography variant="subtitle2">Download</Typography>
                </Container>
                <Container style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                    <NotesOutlined style={{ cursor: 'pointer' }} fontSize="large" color="primary" />
                    <Typography variant="subtitle2">View</Typography>
                </Container>
                <Container style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                    <Print style={{ cursor: 'pointer' }} fontSize="large" color="primary" />
                    <Typography variant="subtitle2">Print</Typography>
                </Container>
            </Container>
        </>
    )
}