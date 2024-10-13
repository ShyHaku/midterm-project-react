import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavB from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import BigListContainer from './components/list';
import UpdateSearch from './components/update';
import DeleteSearch from './components/delete';
import AddItem from './components/additem';
import SearchBar from './components/search';
import LowStockItems from './components/LowStockItems'; 
import Home from './components/home';
import './App.css';

function MainWeb() {
  const [items, setItems] = useState([]);

  const handleDeleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleUpdateItem = (updatedItem) => {
    setItems(items.map((item) => item.id === updatedItem.id ? updatedItem : item));
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavB/>}>
          <Route path="Home" element={<Home items={items} />} /> 
          <Route path="addItem" element={<AddItem setItems={setItems} />} />
          <Route path="SearchBar" element={<SearchBar items={items} />} /> 
            <Route path="BigListContainer" element={<BigListContainer items={items} />} />
            <Route path="LowStockItems" element={<LowStockItems items={items} />} />
            <Route path="UpdateSearch" element={<UpdateSearch items={items} onUpdateItem={handleUpdateItem} />} />
            <Route path="DeleteSearch" element={<DeleteSearch items={items} onDeleteItem={handleDeleteItem} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default MainWeb;