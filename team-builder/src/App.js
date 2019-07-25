import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Display from "./components/Display";

function App() {
  const [teamMem, setTeamMem] = useState([]);

  function AddMember(member) {
    setTeamMem([...teamMem, member]);
  }

  return (
    <div className="App">
      <h1>Team Sign In</h1>
      <Form Add={AddMember} />
      {teamMem.map(mem => (
        <Display key={mem.name} mem={mem} />
      ))}
    </div>
  );
}

export default App;
