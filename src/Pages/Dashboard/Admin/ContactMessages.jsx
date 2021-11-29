import React, {useEffect, useState} from "react";
import {deleteContact, getContacts} from "../../../utils/firebase/contacts";
import {Button, Card, CardActions, CardContent, CircularProgress} from "@mui/material";
import styled, {css} from "styled-components";

export default function ContactMessages() {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [deleting, setDeleting] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const res = await getContacts();
                setContacts(res);
            } catch (e) {
                console.error(e);
            }
            setLoading(false)
        })();
    }, []);

    const handleDelete = async (id) => {
        setDeleting(id);
        try {
            await deleteContact(id);
            setContacts(prev => prev.filter(c => c.id !== id));
        } catch (e) {
            console.error(e);
        }
        setDeleting(null);
    };

    if(loading) return (
        <LoadingCont>
            <CircularProgress />
            <LoadingText>Loading the messages</LoadingText>
        </LoadingCont>
    );

    return (
        <Messages>
            {contacts.map(contact => (
                <MCard key={contact.id} variant="outlined">
                    <MCardContent disabled={deleting === contact.id}>
                        <Item>
                            <Main>Title: </Main>
                            <Value>{contact.title}</Value>
                        </Item>
                        <Item>
                            <Main>Name: </Main>
                            <Value>{contact.name}</Value>
                        </Item>
                        <Item>
                            <Main>Phone NO.: </Main>
                            <a href={`tel:+91${contact.phone}`}><Value>{contact.phone}</Value></a>
                        </Item>
                        <Item>
                            <Main>Message: </Main>
                            <Value>{contact.message}</Value>
                        </Item>
                    </MCardContent>
                    <CardActions>
                        <Button disabled={deleting === contact.id} color="error" size="small" onClick={() => handleDelete(contact.id)}>Remove</Button>
                    </CardActions>
                    {deleting === contact.id && <CircularProgress size={24} sx={progress} />}
                </MCard>
            ))}
        </Messages>
    );
};

const LoadingCont = styled.div`
  height: 65vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const LoadingText = styled.div`
  margin-top: 30px;
`;
const Messages = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;
  margin: 20px 60px 20px 40px;
`;
const Item = styled.div`
  display: flex;
  margin-top: 5px;
  align-items: center;
`;
const Main = styled.div`
  vertical-align: center;
`;
const Value = styled.div`
  margin-left: 10px;
  font-family: sans-serif;
  vertical-align: center;
`;
const MCard = styled(Card)`
  position: relative;
`;
const MCardContent = styled(CardContent)`
  ${({disabled}) => disabled && css`
    opacity: 0.5;
  `}
`;
const progress = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: '-12px',
    marginLeft: '-12px',
};
