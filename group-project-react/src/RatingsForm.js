import React, {useState, useEffect} from "react";

function RatingsForm() {
    //state for holding user rating and product ID
    const [rating, setRating] = useState(0);
    const [selectedProductId, setSelectedProductId] = useState("");
    const [productIds, setProductIds] = useState([]);

    useEffect (() => {
        fetch("http://makeup-api.herokuapp.com/api/v1/products.json")
        .then((r) => r.json())
        .then((data) => {
            const ids = data.map((product) => product.id);
            setProductIds(data);
        })
        .catch((error) => {
            console.error("Error fetching product IDs:", error)
        })
    }, [])

    //Function to handle product selection 
    const handleProductChange =(event) => {
        setSelectedProductId(event.target.value);
    }

    //function to handle rating change
    const handleRatingChange =(event) => {
        setRating(parseInt(event.target.value, 10));
    };
    //function to handle rating submission
    const handleRatingSubmit = () => {
        //check if a rating is given 
        if(rating === 0) {
            alert("Please select a rating!")
            return;
        }
    //prepare rating data to send to server 
    const ratingData = {
        productId: selectedProductId, // use selected product ID
        rating,
    };
    //send POST request to json-server
    fetch("http://localhost:3002/ratings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ratingData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        // Reset the rating state
        setRating(0);
      })
      .catch((error) => {
        console.error("Error submitting rating:", error);
      });
  };
      
  

return (
<div>
<label>Give It A Rating!</label>
<div>
 {[1,2,3,4,5].map((value) => (
 <label key={value}>
 <input 
 type="radio"
 name="rating"
 value={value}
 checked={rating === value}
 onChange={handleRatingChange}
 />
{value} - {value === 1 ? "Terrible" : value === 5? "Excellent" : " "}
</label> 
 ))}
</div>
<button onClick={handleRatingSubmit}>Submit Rating!</button>
</div>
)
}
export default RatingsForm;
