import React from "react";
import "./sass/App.sass";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Welcome from "./view/Welcome"
import Home from "./view/Home"

{/*<link*/}
{/*    href="https://fonts.googleapis.com/css?family=Fjalla+One&display=swap"*/}
{/*    rel="stylesheet"*/}
{/*/>*/}
{/*<div className="App">*/}
{/*    <header className="App__header">*/}
{/*    <p className="App__header__title">Jonathan Dahnberg</p>*/}
{/*<img className="App__header__logo" src={logo} />*/}
{/*</header>*/}
{/*<main className="App__main">*/}
{/*    <Route exact path="/" component={Home} />*/}
{/*    <Route path="/skills" component={Skills} />*/}
{/*    <Route path="/other" component={Other} />*/}
{/*</main>*/}
{/*</div>*/}


function App() {
  return (
    <Router>
        <div className="App">
        <Route exact path="/" component={Welcome}/>
        <Route path="/Home" component={Home}/>
        </div>
    </Router>
  );
}

export default App;
