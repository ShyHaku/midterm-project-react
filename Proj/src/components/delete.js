import React, { useState } from 'react';
import { Form, FormControl, Button, Modal } from 'react-bootstrap';


const DeleteSearch = ({ items, onDeleteItem = () => {} }) => {
  const [searchTerm, setSearchTerm] = useState(''); 
  const [searchResult, setSearchResult] = useState(null); 
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

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

  const handleDelete = () => {
    if (searchResult && typeof searchResult === 'object' && onDeleteItem) {
      setShowConfirmDialog(true);
    }
  };

  const handleConfirmDelete = () => {
    if (searchResult) {
      onDeleteItem(searchResult.id);
      setSearchResult(null);
      setSearchTerm('');
      setShowConfirmDialog(false);
    }
  };

  const handleCancelDelete = () => {
    setShowConfirmDialog(false);
  };

  return (
    <div className="delete-search-container">
      <Form.Group controlId="search">
        <Form.Label className="delete-search-label">Search Item To Delete</Form.Label>
        <FormControl
          type="text"
          value={searchTerm}
          onChange={handleChange}
          onKeyPress={handleSearch}
          placeholder="Input ID"
          className="delete-search-input"
        />
        {searchResult && (
          <div className="delete-search-result">
            {typeof searchResult === 'object' ? (
              <div>
                <h5>Item Details:</h5>
                <p>ID: {searchResult.id}</p>
                <p>Name: {searchResult.name}</p>
                <p>Category: {searchResult.category}</p>
                <Button
                  variant="danger"
                  onClick={handleDelete}
                  className="delete-search-button"
                >
                  Delete Item
                </Button>
              </div>
            ) : (
              <p className="delete-search-error">{searchResult}</p>
            )}
          </div>
        )}
      </Form.Group>

      <Modal show={showConfirmDialog} onHide={handleCancelDelete}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {searchResult ? (
            <p>Are you sure you want to delete item {searchResult.name} with ID {searchResult.id}?</p>
          ) : (
            <p>Please select an item to delete.</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancelDelete}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleConfirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default DeleteSearch;