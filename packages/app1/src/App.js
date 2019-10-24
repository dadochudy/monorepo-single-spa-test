import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Input from "@monorepo/Input";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>APP1 HELLO</h1>
        <Input placeholder="pice" />
      </header>
    </div>
  );
}

export default App;
