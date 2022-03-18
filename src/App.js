import { Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import "./App.css";

// Page Imports
import NotesPage from "./pages/Notes.page";
import CreatePage from "./pages/Create.page";
import { purple } from "@mui/material/colors";

// Creating Theme

const theme = createTheme({
  palette: {
    // primary: {
    //   main: "#fefefe",
    // },
    secondary: purple,
  },
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <main>
        <Routes>
          <Route path="/" element={<NotesPage />} />
          <Route path="create" element={<CreatePage />} />
        </Routes>
      </main>
    </ThemeProvider>
  );
}

export default App;
