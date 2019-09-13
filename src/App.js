import React from "react";
import "./css/App.css";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Other from "./components/Other";
import MaterialIcon, { colorPalette } from "material-icons-react";

function App() {
  return (
    <Router>
      <link
        href="https://fonts.googleapis.com/css?family=Fjalla+One&display=swap"
        rel="stylesheet"
      />
      <div className="App">
        <header className="App__header">
          <h1 className="App__header__title">Jonathan Dahnberg</h1>
          <MaterialIcon
            icon="accessibility_new"
            size={500}
            color="white"
          ></MaterialIcon>
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
