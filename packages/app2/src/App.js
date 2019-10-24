import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Button from "@monorepo/Button";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
function App() {
  return (
    // <Router basename="app2">
    <div className="App">
      <header className="App-header">
        <h1>APP2</h1>
        <Button>Something</Button>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      </header>
    </div>
    // </Router>
  );
}

export default App;
