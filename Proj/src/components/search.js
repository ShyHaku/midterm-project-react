import React, { useState } from 'react';
import { Form, FormControl } from 'react-bootstrap';

const SearchBar = ({ items }) => {
  const [searchTerm, setSearchTerm] = useState(''); 
  const [searchResult, setSearchResult] = useState(null); 

  const handleSearch = (event) => {
    if (event.key === 'Enter') {
      const foundItem = items.find((item) => item.id === searchTerm);
      if (foundItem) {
        setSearchResult(foundItem);
      } else {
        setSearchResult('Item not found!');
      }
    }
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Form.Group controlId="search"  className="search-bar">
      <Form.Label> Search Item</Form.Label>
      <FormControl
        type="text"
        value={searchTerm}
        onKeyPress={handleSearch}
        onChange={handleInputChange}
        placeholder="Input ID"
      />
      {searchResult && (
        <div className="search-result">
          {typeof searchResult === 'object' ? (
            <div>
              <h5>Item Details:</h5>
              <p>ID: {searchResult.id}</p>
              <p>Name: {searchResult.name}</p>
              <p>Category: {searchResult.category}</p>
            </div>
          ) : (
            <p>{searchResult}</p>
          )}
        </div>
      )}
    </Form.Group>
  );
};

export default SearchBar;