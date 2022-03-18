import React from "react";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { blue, green, grey, pink, yellow } from "@mui/material/colors";

function NoteCard({ note, handleDelete }) {
  return (
    <div>
      <Card elevation={1}>
        <CardHeader
          avatar={
            <Avatar
              sx={{
                backgroundColor: () => {
                  if (note.category === "work") return yellow[700];
                  if (note.category === "todos") return green[500];
                  if (note.category === "reminders") return pink[500];
                  if (note.category === "social") return blue[500];
                  return grey[500];
                },
              }}
            >
              {note.category[0].toUpperCase()}
            </Avatar>
          }
          action={
            <Tooltip
              title="Delete"
              placement="top"
              onClick={() => handleDelete(note.id)}
            >
              <IconButton>
                <DeleteOutlineOutlinedIcon />
              </IconButton>
            </Tooltip>
          }
          title={note.title}
          subheader={note.category}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {note.details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default NoteCard;
