import React from 'react';

const SearchBox = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search by title, description, or price"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
