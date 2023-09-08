import React, { useState } from "react";
import MakeUpList from "./MakeUpList";

function MakeupContainer({ addReview, makeups, loading, error }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // number of items to display per page

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentMakeups = makeups.slice(indexOfFirstItem, indexOfLastItem);

  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <MakeUpList
      makeups={currentMakeups}
      loading={loading}
      error={error}
      onPageChange={onPageChange}
      currentPage={currentPage}
      addReview={addReview}
    />
  );
}
export default MakeupContainer;
