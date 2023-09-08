import React, { useState } from "react";

function ReviewForm({ addReview }) {
  const [formData, setFormData] = useState({
    Product: "",
    Brand: "",
    content: "",
  });
  const handleChange = (e) => {
    setFormData((formData) => {
      return { ...formData, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addReview(formData);
    setFormData({
      Product: "",
      Brand: "",
      content: "",
    });

    return (
      <form onSubmit={handleSubmit} className="review-form">
        <input
          value={formData.title}
          onChange={handleChange}
          name="Product"
          placeholder="Product name"
        />
        <input
          value={formData.author}
          onChange={handleChange}
          name="Brand"
          placeholder="Brand Name"
        />
        <textarea
          name="content"
          value={formData.content}
          onChange={handleChange}
          placeholder="Whatchu likey huh?..."
          rows={10}
        />
        <input type="submit" value="Aight Fam I SEE YOU" />
      </form>
    );
  };
}
export default ReviewForm;
