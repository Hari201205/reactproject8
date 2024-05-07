import React from 'react';

function SearchBar({ setSearchQuery }) {
  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="search-bar">
      <input type="text" placeholder="Search..." onChange={handleChange} />
    </div>
  );
}

export default SearchBar;