import React from "react";

function MakeUpCard ({image_link,name,brand,price,rating,description}) {

  
    return(

        <div className="makeup">
            <img src={image_link} alt={name}/>
            <h4>{brand}</h4>
            <h4>{name}</h4>
            <h4>Price: ${price}</h4>
            <h4>Rating: {rating}</h4>
            <h4>Description:<p>{description}</p></h4>
        </div>
    )
}

export default MakeUpCard;