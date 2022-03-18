import logo from "./logo.svg";
import { Routes, Route, Link } from "react-router-dom";

import "./App.css";

// Page Imports
import NotesPage from "./pages/Notes.page";
import CreatePage from "./pages/Create.page";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<NotesPage />} />
        <Route path="create" element={<CreatePage />} />
      </Routes>
    </main>
  );
}

export default App;
