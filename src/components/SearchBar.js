import React from 'react';

function SearchBar() {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Buscar producto..." />
      <button  className="button button-success">Buscar</button>
    </div>
  );
}

export default SearchBar;