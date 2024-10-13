import React from 'react';
import { Card, CardBody, CardTitle, Table } from 'react-bootstrap';

const LowStockItems = ({ items }) => {
  const lowStockItems = items.filter(item => item.quantity <= 5);

  return (
    <Card className="low-stock-card">
      <CardBody>
        <CardTitle className="low-stock-title">Low Stock Items</CardTitle>
        <Table responsive className="low-stock-table">
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
            {lowStockItems.length > 0 ? (
              lowStockItems.map(item => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>{item.price}</td>
                  <td>{item.category}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="no-items-message">No low stock items found.</td>
              </tr>
            )}
          </tbody>
        </Table>
      </CardBody>
    </Card>
  );
};

export default LowStockItems;