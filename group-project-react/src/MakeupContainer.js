import React, {useState, useEffect} from "react";
import MakeUpList from "./MakeUpList";

function MakeupContainer() {
  const [makeups, setMakeups] = useState([]); //will hold makeup data fetched from API
  const [loading, setLoading] = useState(true); //indicates whether data is currently being fetched (true) or not (false).
  const [error, setError] = useState(null); //holds any error information if an error occurs during fetching
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // number of items to display per page 

useEffect(() => {
    fetch("http://makeup-api.herokuapp.com/api/v1/products.json")
    .then ((r) => r.json())
    .then((data) => {
        setMakeups(data);
        setLoading(false);
    })
    .catch((error) => {
        setError(error);
        setLoading(false);
    })
}, [])

const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;
const currentMakeups = makeups.slice(indexOfFirstItem, indexOfLastItem);

const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
}

return (
    <MakeUpList 
    makeups={currentMakeups} 
    loading={loading} 
    error={error} 
    onPageChange={onPageChange}
    currentPage={currentPage}
    />
)
}
export default MakeupContainer;
