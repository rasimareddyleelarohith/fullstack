import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <h1>Welcome to AgroValue</h1>
        <p>Connecting Farmers with Buyers for Value-Added Agricultural Products</p>
        <div className="hero-actions">
          <Link to="/products" className="btn btn-primary">Browse Products</Link>
          <Link to="/register" className="btn btn-secondary">Join Us</Link>
        </div>
      </section>

      <section className="features">
        <div className="feature">
          <h3>🌾 For Farmers</h3>
          <p>Sell your value-added products directly to buyers</p>
        </div>
        <div className="feature">
          <h3>🛒 For Buyers</h3>
          <p>Access fresh, organic, and authentic agricultural products</p>
        </div>
        <div className="feature">
          <h3>🤝 Direct Connection</h3>
          <p>No middlemen, fair prices for everyone</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
