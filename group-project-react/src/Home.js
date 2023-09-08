import React from "react";
import "./Home.css";

function Home() {
  const paragraphStyle = {
    textAlign: "justify", // Justify text to cover the width
    width: "100%", // Make the width 100% of the parent container
  };

  return (
    <div className="home-container">
      <div className="right-content">
        <h2>Welcome to FaceCake!</h2>

        <p style={paragraphStyle}>
          Here you can discover amazing makeup reviews/ratings and products!
        </p>

        <p style={paragraphStyle}>
          Welcome to our makeup haven! Take a delightful tour of our Makeup
          section, where you'll uncover a treasure trove of both fresh, exciting
          brands and timeless classics that you simply can't resist.
        </p>

        <p style={paragraphStyle}>
          In our Share section, we encourage you to express your thoughts and
          feelings about the products and brands you adore. We genuinely value
          your opinions and can't wait to hear what you have to say!
        </p>

        <p style={paragraphStyle}>
          Don't hesitate to connect with us in our Contact section. Whether you
          have a suggestion, a concern, or simply want to chat, we're here to
          listen and assist you with open arms.
        </p>

        <p style={paragraphStyle}>
          We're incredibly grateful for your visit to our page! Thank you for
          being a part of our makeup community.
        </p>
      </div>
    </div>
  );
}

export default Home;
