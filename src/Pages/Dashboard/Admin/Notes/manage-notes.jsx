import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import MitrcImage from "../../../../assets/images/mitrc.png";
import styled from "styled-components";
import { LoadingButton } from "@mui/lab";
import { deleteNotes, listNotes } from "../../../../utils/firebase/notes";
import { FcDocument } from "react-icons/fc";
const ManageNotesPage = () => {
  const [notesList, setNotesList] = React.useState([]);
  React.useEffect(() => {
    listNotes().then((notes) => {
      setNotesList(notes);
    });
  }, []);
  const refreshList = () => {
    listNotes().then((notes) => {
      setNotesList(notes);
    });
  };
  return (
    <>
      <NotesListContainer>
        {notesList.map((note, index) => (
          <NotesComponent key={index} notes={note} refresh={refreshList}/>
        ))}
      </NotesListContainer>
    </>
  );
};

const NotesComponent = (props) => {
  const { notes, refresh } = props;
  const [loading, setLoading] = useState(false);
  const onDelete = async () => {
    setLoading(true);
    await deleteNotes(notes.id);
    setLoading(false);
    refresh();
  };

  return (
    <CardComponent sx={{ maxWidth: 345, width: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {notes.title}
        </Typography>
        <DescriptionText variant="h6" color="text.secondary">
          {notes.subject}
        </DescriptionText>
        <DescriptionText variant="h6" color="text.secondary">
          {notes.semester}
        </DescriptionText>
          <a href={`//${notes.link}`}>
            <FcDocument size={40}/>
          </a>
      </CardContent>
      <CardActions>
        <LoadingButton
          size="small"
          color={"error"}
          variant="contained"
          loading={loading}
          onClick={onDelete}
        >
          Delete
        </LoadingButton>
      </CardActions>
    </CardComponent>
  );
};

export default ManageNotesPage;

const DescriptionText = styled(Typography)`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const NotesListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 60px;
  row-gap: 20px;
`;

const CardComponent = styled(Card)`
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
`
