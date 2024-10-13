import React, { useState } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

const UpdateSearch = ({ items, onUpdateItem }) => {
  const [searchTerm, setSearchTerm] = useState(''); 
  const [searchResult, setSearchResult] = useState(null); 
  const [field, setField] = useState(''); 
  const [newValue, setNewValue] = useState(0);

  const handleSearch = (event) => {
    if (event.key === 'Enter') {
      const searchTerm = event.target.value;
      setSearchTerm(searchTerm);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchResult && typeof searchResult === 'object') {
      const oldValue = searchResult[field.toLowerCase()]; 
      const updatedItem = { ...searchResult, [field.toLowerCase()]: newValue };
      onUpdateItem(updatedItem);
      setSearchResult(`Item ${searchResult.name} ${field} is updated from ${oldValue} to ${newValue}`); 
    }
  };
  
  return (
    <div className="update-search-container">
      <Form.Group controlId="search">
        <Form.Label className="update-search-label">Search Item to Update</Form.Label>
        <FormControl
          type="text"
          value={searchTerm}
          onKeyPress={handleSearch}
          onChange={handleInputChange}
          placeholder="Input ID"
          className="update-search-input"
        />
        {searchResult && (
          <div className="update-search-result">
            {typeof searchResult === 'object' ? (
              <div>
                <h5>Item Details:</h5>
                <p>ID: {searchResult.id}</p>
                <p>Name: {searchResult.name}</p>
                <p>Category: {searchResult.category}</p>
                <Form className="update-form">
                  <Form.Label>Update Field:</Form.Label>
                  <Form.Select value={field} onChange={(e) => setField(e.target.value)}>
                    <option value="">Select Field</option>
                    <option value="Quantity">Quantity</option>
                    <option value="Price">Price</option>
                    </Form.Select>
                  <Form.Label>New Value:</Form.Label>
                  <FormControl
                    type="number"
                    value={newValue}
                    onChange={(e) => setNewValue(e.target.value)}
                    className="update-form-input"
                  />
                  <Button type="submit" onClick={handleSubmit} className="update-search-button">
                    Update
                  </Button>
                </Form>
              </div>
            ) : (
              <p className="update-search-error">{searchResult}</p>
            )}
          </div>
        )}
      </Form.Group>
    </div>
  );
};

export default UpdateSearch;