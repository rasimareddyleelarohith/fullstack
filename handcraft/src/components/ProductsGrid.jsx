import React from 'react';
import ProductCard from './ProductCard';

const ProductsGrid = ({ products, onQuickView }) => (
  <section className="products-section">
    <h2 className="section-title">Featured Handicrafts</h2>
    <div className="products-grid">
      {products.map(product => (
        <ProductCard key={product.id} product={product} onQuickView={onQuickView} />
      ))}
    </div>
  </section>
);

export default ProductsGrid;
