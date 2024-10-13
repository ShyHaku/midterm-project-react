import React, { useState, } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

const AddItem = ({ setItems, items = [] }) => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const categories = ['Electronics', 'Clothing', 'Entertainment'];
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (id === '' || name === '' || quantity === 0 || price === 0 || category === '') {
      setErrorMessage('Please fill in all fields');
      setId('');
      setName('');
      setQuantity('');
      setPrice('');
      setCategory('');
    } else {
      const item = {
        id,
        name,
        quantity,
        price,
        category,
      };
      setItems((prevItems) => {
        const existingItem = prevItems.find((existingItem) => existingItem.id === item.id);
        
        if (existingItem) {
          setErrorMessage('Item with the same ID already exists!');
          setTimeout(() => {
            setErrorMessage('');
          }, 2000); 
          return prevItems; 
        } else {
          setSuccessMessage('Item added successfully!');
          setTimeout(() => {
            setSuccessMessage('');
          }, 2000); 
          return [...prevItems, item];
        }
      });
      setId('');
      setName('');
      setQuantity('');
      setPrice('');
      setCategory('');
    }
  };

  const handleQuantityChange = (event) => {
    const value = event.target.valueAsNumber;
    setQuantity(isNaN(value) ? '' : value);
  };

  const handlePriceChange = (event) => {
    const value = event.target.valueAsNumber;
    setPrice(isNaN(value) ? '' : value);
  };

  return (
    <div>
      <Card style={{ width: '65rem' }} className='Carde'>
        <Card.Body>
          <h2>Add Item</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formGroupID">
              <Form.Label>ID:</Form.Label>
              <Form.Control input required type="text" value={id} onChange={(event) => setId(event.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupName">
              <Form.Label>Name:</Form.Label>
              <Form.Control required type="text" value={name} onChange={(event) => setName(event.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupQuanty">
              <Form.Label>Quantity:</Form.Label>
              <Form.Control required type="number" min='1' value={quantity} onChange={handleQuantityChange} placeholder='' />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupPrice">
              <Form.Label>Price:</Form.Label>
              <Form.Control required min='0' step='0.01' type="number" value={price} onChange={handlePriceChange} />
            </Form.Group>

            <Form.Group controlId="formGridCate">
              <Form.Label>Category:</Form.Label>
              <Form.Select required value={category} onChange={(event) => setCategory(event.target.value)} defaultValue="Choose...">
                <option>Choose...</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
           
            <Button type="submit" variant="dark">Add Item</Button>
        
          </Form>
          {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
         
        </Card.Body>
      </Card>
    </div>
  );
};

export default AddItem;