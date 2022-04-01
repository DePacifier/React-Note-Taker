import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import Masonry from "react-masonry-css";

// Component Imports
import NoteCard from "../components/NoteCard.component";

// Style Imports
import "./Notes.styles.css";

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

  const masonryBreakpoints = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <Container>
      <Masonry
        breakpointCols={masonryBreakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {notes.map((note) => (
          <div key={note.id} lg={4}>
            <NoteCard note={note} handleDelete={handleDelete} />
          </div>
        ))}
      </Masonry>
    </Container>
  );
}

export default NotesPage;
