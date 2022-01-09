import React from 'react';
import { Modal, Typography } from '@mui/material';
import styled from 'styled-components';

const UploadModal = ({ open, handleClose, mediaName }) => {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box>
                <UploadButton>{`Upload ${mediaName}`}</UploadButton>
            </Box>
        </Modal>
    );
};

export default UploadModal;

const Box = styled.div`
  padding: 4rem;
  background-color: white;
  width: 50%;
  position: absolute;
  top: 30%;
  left: 25%;
  display: grid;
  place-items: center;
`;

const UploadButton = styled.button`
  padding: 0.6rem 2rem;
`;