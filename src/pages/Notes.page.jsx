import React, { useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";

// Component Imports
import NoteCard from "../components/NoteCard";

function NotesPage() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);

  const handleDelete = async (noteID) => {
    await fetch("http://localhost:8000/notes/" + noteID, {
      method: "DELETE",
    });

    const newNotes = notes.filter((note) => note.id !== noteID);

    setNotes(newNotes);
  };

  return (
    <Container>
      <Grid container spacing={3}>
        {notes.map((note) => (
          <Grid item key={note.id} lg={4}>
            <NoteCard note={note} handleDelete={handleDelete} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default NotesPage;
