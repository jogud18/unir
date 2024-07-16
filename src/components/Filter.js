import React from 'react';

function Filter() {
  return (
    <div className="filter">
      <select>
        <option value="">Categoria</option>
        <option value="">Electronica</option>
        <option value="">Moda</option>
        <option value="">Hogar</option>
      </select>
      <select>
        <option value="">Marca</option>
        <option value="">Samsung</option>
        <option value="">lee</option>
      </select>
    </div>
  );
}

export default Filter;