import React from "react";
import "./MakeUpCard.css";
import RatingsForm from "./RatingsForm";

function MakeUpCard({ image_link, name, brand, price, rating, website }) {
const defaultImageUrl = "https://img.freepik.com/premium-vector/8-bit-pixel-birthday-cake-food-item-game-assets-vector-illustration_614713-1063.jpg?w=826"
 const handleImageError = (event) => {
  event.target.src = defaultImageUrl;
 }

  return (
    
    <div className="makeup">
      <h2>{name}</h2>
      <img src={image_link} alt={name} onError={handleImageError} />
      <p>Brand: {brand}</p>
      <p>Price: $ {price}</p>
      <a href={website} class="button-link">
        Product link
      </a>
      <p>Rating: {rating} </p>
      <RatingsForm/>
    </div>
  );
}
export default MakeUpCard;