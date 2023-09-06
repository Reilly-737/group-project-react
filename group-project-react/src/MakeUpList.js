import React from "react";
import MakeUpCard from "./MakeUpCard";

function MakeUpList({ makeups, loading, error, onPageChange, currentPage, itemsPerPage }) {
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const makeupCards = makeups.map((makeup) => {
    return (
      <MakeUpCard
        key={makeup.id}
        name={makeup.name}
        image_link={makeup.image_link}
        brand={makeup.brand}
        price={makeup.price}
        description={makeup.description}
        rating={makeup.rating}
      />
    );
  });

  return (
    <div>
      <ul className="cards">{makeupCards}</ul>
      <div className="pagination">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1} className="pagination">Back
        </button>
        <button
          onClick={() => onPageChange(currentPage + 1)}className="pagination">Forward
        </button>
      </div>
    </div>
  );
}

export default MakeUpList;