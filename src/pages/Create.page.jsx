import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import "./Create.styles.css";

function CreatePage() {
  let navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [category, setCategory] = useState("work");
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError(false);
    setDetailsError(false);

    if (title === "") {
      setTitleError(true);
    }

    if (details === "") {
      setDetailsError(true);
    }

    if (title && details) {
      console.log(title, details, category);
      // send request
      fetch("http://localhost:8000/notes", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ title, details, category }),
      }).then(() => navigate("/"));
    }
  };

  return (
    <Container>
      <Typography
        sx={{}}
        color="textSecondary"
        variant="h6"
        component="h2"
        gutterBottom
      >
        Create a New Note
      </Typography>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          className="field"
          label="Note Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          variant="outlined"
          color="secondary"
          fullWidth
          required
          error={titleError}
        />
        <TextField
          className="field"
          label="Details"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          multiline
          rows={4}
          variant="outlined"
          color="secondary"
          fullWidth
          required
          error={detailsError}
        />
        <FormControl className="field">
          <FormLabel>Category</FormLabel>
          <RadioGroup
            row
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <FormControlLabel
              value="work"
              control={<Radio color="secondary" />}
              label="Work"
            />
            <FormControlLabel
              value="todos"
              control={<Radio color="secondary" />}
              label="To Do's"
            />
            <FormControlLabel
              value="reminders"
              control={<Radio color="secondary" />}
              label="Reminders"
            />
            <FormControlLabel
              value="drafts"
              control={<Radio color="secondary" />}
              label="Drafts"
            />
            <FormControlLabel
              value="other"
              control={<Radio color="secondary" />}
              label="Other"
            />
          </RadioGroup>
        </FormControl>
        <Button
          sx={{}}
          type="submit"
          color="secondary"
          variant="contained"
          endIcon={<KeyboardArrowRightIcon />}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
}

export default CreatePage;
