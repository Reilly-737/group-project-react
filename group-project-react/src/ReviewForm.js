import React, { useState } from "react";

function ReviewForm({ addReview, makeupID, image_link }) {
  const [formData, setFormData] = useState({
    makeupID: makeupID,
    content: "",
    image_link: image_link
  });
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (e) => {
    setFormData((formData) => {
      return { ...formData, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addReview(formData);
    // setFormData({
    //   makeupID: makeupID,
    //   content: "",
    // });
    setSubmitted(true);
  };

  if (submitted) {
    return <p>Review submitted!</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="review-form">
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
}

export default ReviewForm;
