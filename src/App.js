import React from "react";
import "./css/App.css";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Other from "./components/Other";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App__header">
          <div className="App__header__handle"></div>
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
