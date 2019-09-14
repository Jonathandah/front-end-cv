import React from "react";
import "./css/App.css";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Other from "./components/Other";
import MaterialIcon, { colorPalette } from "material-icons-react";
import logo from "./undraw_online_cv_qy9w.svg";

function App() {
  return (
    <Router>
      <link
        href="https://fonts.googleapis.com/css?family=Fjalla+One&display=swap"
        rel="stylesheet"
      />
      <div className="App">
        <header className="App__header">
          <p className="App__header__title">Jonathan Dahnberg</p>
          <img className="App__header__logo" src={logo} />
        </header>
        <main className="App__main">
          <Route exact path="/" component={Home} />
          <Route path="/skills" component={Skills} />
          <Route path="/other" component={Other} />
        </main>
      </div>
    </Router>
  );
}

export default App;
