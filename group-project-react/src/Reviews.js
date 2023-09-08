import React, { useEffect, useState } from "react";

function Reviews() {

    const defaultImageUrl =
      "https://img.freepik.com/premium-vector/8-bit-pixel-birthday-cake-food-item-game-assets-vector-illustration_614713-1063.jpg?w=826";
    const handleImageError = (event) => {
      event.target.src = defaultImageUrl;
    };
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/reviews")
      .then((r) => r.json())
      .then((review) => setReviews(review));
  }, []);

  return (
    <div>
      <h2 className="makeup">Reviews</h2>
      <ul
        className="makeup"
        style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
      >
        
        {reviews.map((review) => (
          <li key={review.id}>
            <img
              src={review.image_link}
              alt={`Review ${review.id}`}
              onError={handleImageError}
            />
            {review.content}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Reviews;
