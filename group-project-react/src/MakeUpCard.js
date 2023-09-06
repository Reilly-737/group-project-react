import React from "react";
import "./MakeUpCard.css";

function MakeUpCard({ image_link, name, brand, price, rating, description }) {
  const showPlaceholder = !image_link;
  const placeholderImageUrl = "https://static.vecteezy.com/system/resources/thumbnails/000/665/552/small/pixel-art-cupcakes-seamless-pattern.png";

  return (
    <div className="makeup">
      <div className="image-container">
        {showPlaceholder ? (
          <img
            src={placeholderImageUrl}
            alt="Placeholder"
            className="image-error"
          />
        ) : (
          <img src={image_link} alt={name} />
        )}
        {showPlaceholder && (
          <div className="error-message">Image link is missing</div>
        )}
      </div>
      <h4>{brand}</h4>
      <h4>{name}</h4>
      <h4>Price: ${price}</h4>
      <h4>Rating: {rating}</h4>
      <h4>Description:<p>{description}</p></h4>
    </div>
  );
}
export default MakeUpCard;