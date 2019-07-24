import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";

function App() {
  const [teamMem, setTeamMem] = useState("");

  return (
    <div className="App">
      <h1>Team Building Website</h1>
      <Form />
    </div>
  );
}

export default App;
