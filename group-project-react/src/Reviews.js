import React from "react";

function Reviews({ reviews, makeups, loading, error }) {
  const defaultImageUrl =
    "https://img.freepik.com/premium-vector/8-bit-pixel-birthday-cake-food-item-game-assets-vector-illustration_614713-1063.jpg?w=826";
  const handleImageError = (event) => {
    event.target.src = defaultImageUrl;
  };
  if (loading) {
    return <p>Loading reviews...</p>;
  }

  return (
    <div>
      <h2 className="makeup">Reviews</h2>
      <ul
        // className="makeup"
        // style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
      >
        {reviews.map((review) => {
          const makeup = makeups.find((m) => m.id === review.makeupID);
          return (
            <li key={review.id}>
              <h2>{makeup.name}</h2>
              <img
                src={makeup.image_link}
                alt={makeup.name}
                onError={handleImageError}
                style={{ maxWidth: '200px', maxHeight: '200px' }} // Adjust the values as needed
              />
              {review.content}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Reviews;
