import React, {useEffect, useRef, useState} from "react";
import Fab from '@mui/material/Fab';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import CloseIcon from '@mui/icons-material/Close';
import styled from "styled-components";
import {addContact} from "../../utils/firebase/contacts";
import { CheckOutlined } from '@ant-design/icons';
import {Alert, CircularProgress, Snackbar} from "@mui/material";

export default function Bot() {
    const [active, setActive] = React.useState(false);
    const [sent, setSent] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(false);
    const wrapperRef = useRef(null);

    const handleSubmit = async e => {
        e.preventDefault();
        setLoading(true);

        const name = e.target.name.value;
        const phone = e.target.phone.value;
        const message = e.target.message.value;

        try {
            await addContact({ name, phone, message, createdAt: Date.now(), title: "Enquiry" });
            setSent(true);
            e.target.reset();
            setTimeout(() => setSent(false), 3000);
        } catch (e) {
            setError(true);
        }

        setLoading(false);
    };

    const handleClickOutside = event => {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) active && setActive(false);
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside, false);
        return () => document.removeEventListener("click", handleClickOutside, false);
    }, [handleClickOutside]);

    return (
        <BotBtn>
            {active && (
                <BotContainer ref={wrapperRef}>
                    <Heading>Enquiry</Heading>
                    {!sent && (
                        <Form onSubmit={handleSubmit}>
                            <Field name="name" placeholder="Enter your Full Name" minLength={2} required />
                            <Field name="phone" placeholder="Enter your Phone Number" type="tel" pattern="^[6-9][0-9]{9}$" required />
                            <FieldBox name="message" rows={5} placeholder="Enter your Message" minLength={2} required />
                            <ButtonCont>
                                <Button type="submit" disabled={loading}>Submit</Button>
                                {loading && <CircularProgress size={24} sx={progress} />}
                            </ButtonCont>
                        </Form>
                    )}
                    {sent && (
                        <SentCont>
                            <AButton>
                                <Check />
                            </AButton>
                            <Text>Your enquiry has been submitted successfully.</Text>
                            <Text>We'll get in touch with you shortly.</Text>
                        </SentCont>
                    )}
                </BotContainer>
            )}
            <Fab color="primary" aria-label="bot" onClick={() => setActive(p => !p)}>
                {active ? <CloseIcon /> : <ChatBubbleIcon />}
            </Fab>
            <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={error} autoHideDuration={3000} onClose={() => setError(false)}>
                <Alert onClose={() => setError(false)} severity="error" sx={{ width: '100%' }}>
                    Failed to submit your enquiry
                </Alert>
            </Snackbar>
        </BotBtn>
    );
}

const BotBtn = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  z-index: 99;
`;
const BotContainer = styled.div`
  margin: 10px;
  background-color: white;
  box-shadow: 0 0 10px 2px rgba(25,118,210 ,0.49);
  border-radius: 20px;
  padding: 40px 40px 50px;
  height: 440px;
  width: 300px;
  @media screen and (min-width: 425px) {
    width: 380px;
  }
`;

const Heading = styled.div`
  font-size: large;
  margin-bottom: 35px;
  color: #4b4b4b;
`;
const ButtonCont = styled.div`
  position: relative;
`;

const SentCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70%;
`;
const AButton = styled.div`
  background-color: #069d06;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  display: grid;
  place-items: center;
  margin-bottom: 20px;
`;
const Text = styled.div`
  text-align: center;
  color: #4b4b4b;
`;
const Check = styled(CheckOutlined)`
  color: white;
  font-size: larger;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Field = styled.input`
  border-radius: 10px;
  border: 1px solid #00000030;
  outline: none;
  box-shadow: none;
  padding: 10px 20px;
  font-size: small;
  margin-bottom: 20px;
`;
const FieldBox = styled.textarea`
  border-radius: 10px;
  border: 1px solid #00000030;
  outline: none;
  box-shadow: none;
  padding: 10px 20px;
  font-size: small;
  margin-bottom: 35px;
`;
const Button = styled.button`
  padding: 8px 0;
  border-radius: 10px;
  border: 1px solid #00000030;
  background-color: rgba(25,118,210, 1);
  color: white;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;
  width: 100%;

  &:hover {
    background-color: rgba(25,118,210, 0.8);
  }
  
  &:disabled {
    opacity: 0.7;
  }
`;

const progress = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: '-12px',
    marginLeft: '-12px',
};
