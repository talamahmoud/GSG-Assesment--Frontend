import React from 'react';

const ProductList = ({ products, onFilterChange, activeFilter }) => {
  return (
    <div>
      {/* Filter Section */}
      <div id="filter-section" className='text-center'>
        <button 
          className={activeFilter === 'All' ? 'active' : ''} 
          onClick={() => onFilterChange('All')}>
          All
        </button>
        <button 
          className={activeFilter === 'Electronics' ? 'active' : ''} 
          onClick={() => onFilterChange('Electronics')}>
          Electronics
        </button>
        <button 
          className={activeFilter === 'Clothing' ? 'active' : ''} 
          onClick={() => onFilterChange('Clothing')}>
          Clothing
        </button>
      </div>

      {/* Product Display Section */}
      <div id="product-display">
        {products.map((product, index) => (
          <div className="product" key={index}>
            <h2>{product.name}</h2>
            <p>Category: {product.category}</p>
            <p>Price: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
