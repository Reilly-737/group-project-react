import React from "react";
import MakeUpList from "./MakeUpList";
import RatingsCo from "./RatingsCo"


function Home() {
  return (
    <div className="home-container">
      <div className="left-content">
        <MakeUpList itemsPerPage={5} /> {/* Display 5 makeup cards */}
      </div>
      <div className="right-content">
        <RatingsCo /> {/* Display ratings on the right */}
      </div>
    </div>
  );
}

export default Home;
