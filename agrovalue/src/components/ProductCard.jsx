import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product, onDelete, showActions }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <div className="product-info">
        <h3>{product.title}</h3>
        <p className="category">{product.category}</p>
        <p className="price">₹{product.price}</p>
        <p className="stock">Stock: {product.stock}</p>
        <div className="card-actions">
          <Link to={`/products/${product.id}`} className="btn btn-primary">
            View Details
          </Link>
          {showActions && (
            <button onClick={() => onDelete(product.id)} className="btn btn-danger">
              Delete
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
