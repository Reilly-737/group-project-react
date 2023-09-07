import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MakeupContainer from "./MakeupContainer";
import Navbar from "./Navbar";
import Home from "./Home";
import ContactUs from "./ContactUs";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/special">
            <p>Special</p>
          </Route>
          <Route path="/contact" component={ContactUs} />
          <Route path="/makeup" component={Search} />
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
      <Switch>
        <Route exact path="/" component={Home}></Route>
      </Switch>
      <div className="left-content">
        <MakeupContainer />
      </div>
    </>
  );
}
