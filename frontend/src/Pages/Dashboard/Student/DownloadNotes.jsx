import React, { useState } from 'react'
import { NotesImg, PageContainer } from './Components'
import { Autocomplete, TextField, Container, Typography } from '@mui/material'
import { DownloadForOffline, NotesOutlined, Print } from '@mui/icons-material'
import EmptyLayout from './EmptyLayout'

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

const subject = [
    { label: 'Advanced Mathematics 1', id: '1' },
    { label: 'Data structures and alogorithms', id: '2' },
    { label: 'Modern Physics', id: '3' },
    { label: 'Basic Electronics Engineering', id: '4' },
    { label: 'Chemistery', id: '5' }
]

const unit = [
    { label: 'unit 1', id: '1' },
    { label: 'unit 2', id: '2' },
    { label: 'unit 3', id: '3' },
    { label: 'unit 4', id: '4' }
]

const demoNotesImg = 'https://m.media-amazon.com/images/I/81nia28xsOL._SL1500_.jpg'

const DownloadNotes = () => {

    const [selectedSem, setSelectedSem] = useState(null);
    const [selectedSub, setSelectedSub] = useState(null);
    const [selectedUnit, setSelectedUnit] = useState(null);

    console.log('sem' + selectedSem + '  ' + 'sub' + selectedSub + '  ' + 'unit' + selectedUnit)

    return (
        <PageContainer style={{ flexDirection: 'column' }}>
            <Container style={{ display: 'flex', justifyContent: 'space-between' }}>
                {/* <h1>Download notes </h1> */}
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={semester}
                    sx={{ width: 300 }}
                    onChange={(e) => setSelectedSem(e.target.outerText)}
                    renderInput={(params) => <TextField {...params} label="Semester" />}
                />
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={subject}
                    sx={{ width: 300 }}
                    onChange={(e) => setSelectedSub(e.target.outerText)}
                    renderInput={(params) => <TextField {...params} label="Subject" />}
                />
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={unit}
                    sx={{ width: 300 }}
                    onChange={(e) => setSelectedUnit(e.target.outerText)}
                    renderInput={(params) => <TextField {...params} label="Unit" />}
                />
            </Container>
            <>
                {(selectedSem && selectedSub && selectedUnit) ? (<NotesLayout />) : (<EmptyLayout />)}
            </>
        </PageContainer>
    )
}

export default DownloadNotes;


const NotesLayout = () => {
    return (
        <Container style={{ marginTop: '2rem', display: 'flex' }}>
            <NotesImg
                src={demoNotesImg}
                alt="ntoes mitrc alwar"
            />
            <Container style={{ display: 'flex', flexDirection: 'column' }}>
                <Typography variant="h6">Faculty: Mr. Arvind Sharma</Typography>
                <Typography variant="h8">Uploaded: 2 months ago</Typography>
                <Typography variant="h8">Title: Basics of C Programming</Typography>
            </Container>
            <Container style={{ display: 'flex', alignItems: 'center' }}>
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
        </Container>
    )
}

