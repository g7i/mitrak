import { Modal } from "@mui/material";
import React from "react";
import styled from "styled-components";
import CancelIcon from "@mui/icons-material/Cancel";
const ModalImage = (props) => {
  const { src, width, height, onClickOpen, objectFit, margin, filter , smWidth } = props;
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalImageWrapper>
          <ModalImageSecondWrapper>
            <Image
              src={src}
              width={"600px"}
              smWidth={smWidth}
              height={"600px"}
              objectFit={objectFit}
              margin={margin}
            />
            <CloseIcon fontSize={"large"} onClick={handleClose} />
          </ModalImageSecondWrapper>
        </ModalImageWrapper>
      </Modal>
      <Image
        src={src}
        width={width}
        smWidth={smWidth}
        height={height}
        objectFit={objectFit}
        margin={margin}
        filter={filter}
        onClick={() => {
          if (onClickOpen) {
            setOpen(true);
          }
        }}
      />
    </>
  );
};

export default ModalImage;

const ModalImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

const ModalImageSecondWrapper = styled.div`
  background-color: white;
  padding: 50px;
  position: relative;
`;

const CloseIcon = styled(CancelIcon)`
  position: absolute;
  color: black;
  top: 0px;
  right: 0px;
  &:hover {
    color: blue;
  }
`;

const Image = styled.img`
  /* width: ${(props) => props.width || "50%"}; */
  margin: ${(props) => props.margin || "0 auto"};
  object-fit: ${(props) => props.objectFit || "contain"};
  ${(props) => props.height && `height : ${props.height}`};
  background-color: cornsilk;
  border-radius: ${(props) => props.objectFit === "cover" && "10px"};
  &:hover {
    ${(props) => props.filter && `filter: brightness(0.8);`};
  }
  @media (max-width: 768px) {
    width: ${(props) => `${props.smWidth}` || "50%"};
  }
  cursor: pointer;
`;
