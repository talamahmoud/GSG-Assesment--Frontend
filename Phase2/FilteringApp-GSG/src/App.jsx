import React, { useState } from 'react';
import ProductList from './ProductList';
import './styles.css';


const App = () => {
  // Product data array (static for now)
  const products = [
    { name: 'Smartphone', category: 'Electronics', price: 599 },
    { name: 'T-shirt', category: 'Clothing', price: 19 },
    { name: 'Laptop', category: 'Electronics', price: 899 },
    { name: 'Jeans', category: 'Clothing', price: 49 },
    { name: 'Headphones', category: 'Electronics', price: 199 }
  ];

  // State to manage the active filter
  const [activeFilter, setActiveFilter] = useState('All');

  // Function to filter products based on the active filter
  const filteredProducts = activeFilter === 'All'
    ? products
    : products.filter(product => product.category === activeFilter);

  // Function to handle filter button click
  const handleFilterChange = (category) => {
    setActiveFilter(category);
  };

  return (
    <div>
      <h1 className='text-center'>Product List</h1>
      {/* Pass the filter and event handler to ProductList */}
      <ProductList 
        products={filteredProducts} 
        onFilterChange={handleFilterChange} 
        activeFilter={activeFilter} 
      />
    </div>
  );
}

export default App;
