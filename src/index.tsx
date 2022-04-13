 
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import logo from "../assets/logo.svg";
 import About from './about'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> Webpack V5 + React</h1>
        <About/>
      </header>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)
 
// ReactDOM.render(<App />, document.getElementById("root"));
