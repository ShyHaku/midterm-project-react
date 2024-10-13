import React, { useState, useEffect } from 'react';
import { Card, Form, Table, Row, Col } from 'react-bootstrap';

const BigListContainer = ({ items }) => {
  const [category, setCategory] = useState(''); 
  const [filteredItems, setFilteredItems] = useState([]); 
  const [sortField, setSortField] = useState(''); 
  const [sortOrder, setSortOrder] = useState(''); 

  useEffect(() => {
    setFilteredItems(items);
  }, [items])

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setCategory(selectedCategory);
    if (selectedCategory === '') {
      setFilteredItems(items); 
    } else {
      setFilteredItems(items.filter((item) => item.category === selectedCategory));
    }
  };

  const handleSortFieldChange = (event) => {
    setSortField(event.target.value);
  };

  const handleSortOrderChange = (event) => {
    setSortOrder(event.target.value);
  };

  let sortedItems = [...filteredItems]; 

  if (sortField === 'quantity') {
    if (sortOrder === 'asc') {
      sortedItems.sort((a, b) => a.quantity - b.quantity);
    } else {
      sortedItems.sort((a, b) => b.quantity - a.quantity);
    }
  } else if (sortField === 'price') {
    if (sortOrder === 'asc') {
      sortedItems.sort((a, b) => a.price - b.price);
    } else {
      sortedItems.sort((a, b) => b.price - a.price);
    }
  }

  return (
    <div className="text-center">
      <Card className='Cardlist'>
        <Card.Body>
          <Card.Title><h2>Products List</h2></Card.Title>
          <Form>
            <Row>
              <Col xs={4}>
                <Form.Group controlId="category">
                  <Form.Label>Select a category</Form.Label>
                  <Form.Control as="select" value={category} onChange={handleCategoryChange}>
                    <option value="">Choose a category</option>
                    <option value="">All Categories</option>
                    <option value="Clothing">Clothing</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Entertainment">Entertainment</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col xs={4}>
                <Form.Group controlId="sortField">
                  <Form.Label>Sort by:</Form.Label>
                  <Form.Control as="select" value={sortField} onChange={handleSortFieldChange}>
                    <option value="">Choose a field</option>
                    <option value="quantity">Quantity</option>
                    <option value="price">Price</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col xs={4}>
                <Form.Group controlId="sortOrder">
                  <Form.Label>Order:</Form.Label>
                  <Form.Control as="select" value={sortOrder} onChange={handleSortOrderChange}>
                    <option value="">Choose an order</option>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>
          </Form>
          <Table style={{ marginTop: '20px' }} responsive>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              {sortedItems.map((item, index) => (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>{item.price}</td>
                  <td>{item.category}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
};

export default BigListContainer;