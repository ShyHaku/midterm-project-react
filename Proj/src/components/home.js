// Home.js
import React, { useState } from 'react';
import { Card, CardBody, Image } from 'react-bootstrap';
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { AiOutlineStock } from "react-icons/ai";
import { FaDollarSign } from "react-icons/fa";
import { GiPayMoney } from "react-icons/gi";
import Product from "./picture/Product.png";

const Home = ({ items }) => {
  const [filteredItems] = useState(items);
  const lowStockThreshold = 5;
  const lowStockItems = filteredItems.filter((item) => item.quantity <= lowStockThreshold);

  return (
    <div>
      <div className="card-grid">
        <Card>
          <CardBody>
            <h3><FaMoneyBillTrendUp /> Revenue </h3>
            <p>$10,000</p>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <h3><AiOutlineStock /> Stock Sold</h3>
            <p>100 units</p>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <h3><FaDollarSign /> Purchase</h3>
            <p>$5,000</p>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <h3><GiPayMoney /> Expense</h3>
            <p>$2,000</p>
          </CardBody>
        </Card>
      </div>
     
        <section className="image-container">
        <Image 
          src= {Product} width={500} height={400}
          alt="Image placeholder" 
          fluid 
        />
        </section>
    

      <Card className="home-card">
        <CardBody>
          <section className="stock">
            <h3>Reminder!</h3>
            <p>
              There are {lowStockItems.length} item/s that are low on stock:
            </p>
            <ul>
              {lowStockItems.map((item) => (
                <li>ID Number: {item.id}</li>
              ))}
            </ul>
          </section>
        </CardBody>
      </Card>
    </div>
  );
};

export default Home;