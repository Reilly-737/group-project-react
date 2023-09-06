import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MakeupContainer from "./MakeupContainer";
import Navbar from "./Navbar";
import Home from "./Home";

function App() {

  return (
    <div className="App">
        <Navbar/>
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
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          {/* <Route path="/products" component={Products}/>
          <Route path="/brands" component={Brands}/>
          <Route path="/reviews" component={Reviews}/> */}
        </Switch>
      </Router>
      <MakeupContainer/>
    </div>
  );
}

export default App;
