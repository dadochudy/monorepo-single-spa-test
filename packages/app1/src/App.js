import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Input from "@monorepo/Input";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Input placeholder="pice" />
      </header>
    </div>
  );
}

export default App;