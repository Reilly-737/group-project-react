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
        <Switch>
          <Route path="/special">
            <p>Special</p>
          </Route>
          {/*<Route exact path="/" component={Home} />*/}
          <KeepCard />
        </Switch>
      </Router>
      {/*<MakeupContainer />*/}
    </div>
  );
}

export default App;

function KeepCard() {
  return (
    <>
      <div className="left-content">
        <MakeupContainer />
      </div>

      <Switch>
        <Route exact path="/" component={Home}></Route>
      </Switch>
    </>
  );
}
