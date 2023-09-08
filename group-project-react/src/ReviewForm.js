import React, { useState } from "react";

function ReviewForm({ addReview, makeupID, image_link }) {
  const [content, setContent] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    addReview({ content, makeupID });
    // setFormData({
    //   makeupID: makeupID,
    //   content: "",
    // });
    setContent("");
    setSubmitted(true);
  };

  if (submitted) {
    return <p>Review submitted!</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="review-form">
      <textarea
        name="content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Whatchu likey huh?..."
        rows={10}
      />
      <input type="submit" value="Aight Fam I SEE YOU" />
    </form>
  );
}

export default ReviewForm;
