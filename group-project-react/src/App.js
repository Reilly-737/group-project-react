import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import ContactUs from "./ContactUs";
import Search from "./Search";
import Reviews from "./Reviews";

function App() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true); //indicates whether data is currently being fetched (true) or not (false).
  const [error, setError] = useState(null); //holds any error information if an error occurs during fetching
  const [makeups, setMakeups] = useState([]); //will hold makeup data fetched from API

  useEffect(() => {
    fetch("http://localhost:3001/reviews")
      .then((r) => r.json())
      .then((review) => setReviews(review));
  }, []);

  useEffect(() => {
    fetch("http://makeup-api.herokuapp.com/api/v1/products.json")
      .then((r) => r.json())
      .then((data) => {
        setMakeups(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

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
          {/* <Route path="/makeup/:id">component={Reviews}</Route> */}
          <Route path="/makeup">
            <Search addReview={addReview} />{" "}
          </Route>

          <Route path="/reviews">
            <Reviews
              makeups={makeups}
              loading={loading}
              error={error}
              reviews={reviews}
            />
          </Route>
          <Route exact path="/">
            <Home
              makeups={makeups}
              loading={loading}
              error={error}
              addReview={addReview}
            />
          </Route>
        </Switch>
      </Router>
      {/*<MakeupContainer />*/}
    </div>
  );
}

export default App;
