import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "@monorepo/Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button>Something</Button>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
