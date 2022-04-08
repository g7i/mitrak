import React from 'react';
import { Container, HalfImage, Heading } from '../../components/styledComponents/GlobalComponents';
import { getHomeSlider, listDocuments } from '../../utils/firebase/db';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

type CardData = {
    Photo: string;
    Name: string;
    Description: string;
    type: string;
}

type props = {

}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '70vw',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    scrollY: true,
  };

const DataCard = ({item}) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>
            <div  style={{height: '50vh', width: '20vw', marginLeft: '2vw', cursor: 'pointer'}} onClick={handleOpen}>
                <div className='imgBox'>
                    <img src={item.Photo} />
                </div>
                <div className='overlay'>
                    <div className="border__left" />
                    <Heading style={{color: '#FFFFFF', fontSize: '20px'}}>{item.Name}</Heading>
                </div>
            </div>
            <div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box style={{display: 'flex', flexDirection:'column', alignItems: 'center', justifyContent: 'center', overflowY: 'scroll', height: '100vh', width: '100vw', }}>
                    <HalfImage src={item.Photo} style={{ height: '80vh', marginLeft: '2vw', margin: '0 auto'}} onClick={handleOpen} />

                    <Box style={{background: 'white', width: '100%', textAlign: 'center', height: '20vh'}}>
                      <Typography id="modal-modal-title" variant="h6" component="h2">
                          {item.Name}
                      </Typography>
                      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                          {item.Description}
                      </Typography>
                    </Box>
                    <span style={{
                      position: 'absolute',
                      top: 10,
                      right: 10,
                      fontSize: '40px',
                      cursor: 'pointer',
                      color: 'white'
                    }} onClick={handleClose}>X</span>
                    </Box>
                </Modal>
            </div>
        </div>
    )
}





const UpdatesCarousel: React.FC<props> = () => {
    const [data, setData] = React.useState<CardData[]>([]);

    React.useEffect(() => {
        (async () => {
            const datas = await getHomeSlider();
            setData(datas)
          })();
    }, [])


    return (
        <Container>
            <Heading style={{ textAlign: "center" }}>RECENT COLLEGE ACTIVITIES</Heading>
            <div style={{marginBottom: '4vh'}} />
            <div style={{display: 'flex',flexDirection: 'row', overflowX: 'scroll'}}>
            {
                data.map((item, index) => (
                   <DataCard item={item} key={index} />
                ))
            }
            </div>
        </Container>
    )
}

export default UpdatesCarousel;