import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MakeupContainer from "./MakeupContainer";
import Navbar from "./Navbar";
import Home from "./Home";
import ContactUs from "./ContactUs";
import Search from "./Search";

function App() {
  const [reviews, setReviews] = useState([]);
  const addReview = (review) => {
    fetch("http://localhost:3001/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(review),
    })
      .then((r) => r.json())
      .then((review) => {
        setReviews((reviews) => [...reviews, review]);
      });
  };

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/special">
            <p>Special</p>
          </Route>
          <Route path="/contact" component={ContactUs} />
          <Route path="/makeup/:id">{/* <Makeup reviews={reviews}/> */}</Route>
          <Route path="/makeup" component={Search} />

          <KeepCard addReview={addReview} />
        </Switch>
      </Router>
      {/*<MakeupContainer />*/}
    </div>
  );
}

export default App;

function KeepCard({ addReview }) {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home}></Route>
      </Switch>
      <div className="left-content">
        <MakeupContainer addReview={addReview} />
      </div>
    </>
  );
}
