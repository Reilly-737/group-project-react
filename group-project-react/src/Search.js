import React, { useState, useEffect } from "react";

function SearchBar() {
  const defaultImageUrl =
    "https://img.freepik.com/premium-vector/8-bit-pixel-birthday-cake-food-item-game-assets-vector-illustration_614713-1063.jpg?w=826";
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleImageError = (event) => {
    event.target.src = defaultImageUrl;
  };

  // Define the fetchData function
  const fetchData = async () => {
    if (searchText.trim() === "") {
      setSearchResults([]);
      setLoading(false);
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        `http://makeup-api.herokuapp.com/api/v1/products.json?q=${encodeURIComponent(
          searchText
        )}`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      const filteredData = data.filter((item) =>
        item.name.toLowerCase().includes(searchText.toLowerCase())
      );

      setSearchResults(filteredData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  const handleSearchClick = () => {
    // When the "Search" button is clicked, initiate the search
    fetchData();
  };

  useEffect(() => {
    // No changes here; this effect will still run when the component mounts
    fetchData();
  }, []);

  const handleInputChange = (e) => {
    const inputText = e.target.value;
    setSearchText(inputText);
  };

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Makeup:</label>
      <input
        type="text"
        placeholder="Type a name to search..."
        value={searchText}
        onChange={handleInputChange}
      />
      <button onClick={handleSearchClick}>Search</button>
      <ul>
        {loading ? (
          <li>Loading...</li>
        ) : (
          searchResults.map((result, index) => (
            <li key={index}>
              <div className="makeup">
                {result.name}
                <img
                  src={result.image_link}
                  alt={result.name}
                  onError={handleImageError}
                />
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default SearchBar;
