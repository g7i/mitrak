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
            <HalfImage src={item.Photo} style={{height: '50vh', width: '20vw', marginLeft: '2vw', cursor: 'pointer'}} onClick={handleOpen} />
            <div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style} style={{display: 'flex', flexDirection:'column', alignItems: 'center', justifyContent: 'center', overflowY: 'scroll'}}>
                    <HalfImage src={item.Photo} style={{height: '50vh', width: '20vw', marginLeft: '2vw', margin: '0 auto'}} onClick={handleOpen} />

                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {item.Name}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {item.Description}
                    </Typography>
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