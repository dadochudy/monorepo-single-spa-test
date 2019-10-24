import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import "./index.css";
import App from "./App";
// import * as serviceWorker from './serviceWorker';

function domElementGetter() {
  return document.getElementById("app2");
}

export const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
  domElementGetter
});

export const bootstrap = [reactLifecycles.bootstrap];

export const mount = [reactLifecycles.mount];

export const unmount = [reactLifecycles.unmount];
// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
