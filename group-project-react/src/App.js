import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MakeupContainer from "./MakeupContainer";
import Navbar from "./Navbar";
import Home from "./Home";

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <header className="App-header">
          <img src="" className="" alt="" />
          <p>FaceCake</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
        </header>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
      <MakeupContainer />
    </div>
  );
}

export default App;
