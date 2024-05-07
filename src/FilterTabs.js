import React from 'react';


function FilterTabs({ filterMoviesByCategory, showFavorites }) {
  const handleClick = (category) => {
    filterMoviesByCategory(category);
  };

  return (
    <div className="filter-tabs">
      <button onClick={() => handleClick('All')} className="tab">All</button>
      <button onClick={() => handleClick('Action')} className="tab ">Action</button>
      <button onClick={() => handleClick('Comedy')} className="tab">Comedy</button>
      <button onClick={() => handleClick('Horror')} className="tab ">Horror</button>
      <button onClick={() => showFavorites()} className="tab ">Favorites</button>
    </div>
  );
}

export default FilterTabs;