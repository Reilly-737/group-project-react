import React, { useState } from "react";

function ReviewForm({ makeupProducts, onSubmitReview }) {
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate form fields and submit the review via POST request
    const reviewData = {
      rating,
      comment,
      makeupProductId: selectedProduct,
    };

    try {
      // Make a POST request to your server to save the review
      const response = await fetch("/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reviewData),
      });

      if (response.status === 201) {
        // Review successfully posted
        await onSubmitReview(reviewData); // You can optionally update the UI with the new review
      } else {
        // Handle error cases here
        console.error("Failed to post review:", response.statusText);
      }
    } catch (error) {
      console.error("Error posting review:", error);
    }

    // Clear form fields after submission
    setRating("");
    setComment("");
    setSelectedProduct("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Rating:
        <input
          type="number"
          min="1"
          max="5"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
      </label>

      <label>
        Comment:
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </label>

      <label>
        Makeup Product:
        <select
          value={selectedProduct}
          onChange={(e) => setSelectedProduct(e.target.value)}
        >
          <option value="">Select a makeup product</option>
          {makeupProducts.map((product) => (
            <option key={product.id} value={product.id}>
              {product.name}
            </option>
          ))}
        </select>
      </label>

      <button type="submit">Submit Review</button>
    </form>
  );
}

export default ReviewForm;
