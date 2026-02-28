import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const LoginPage = () => {
  const [activeTab, setActiveTab] = useState('customer');
  const [formData, setFormData] = useState({});
  const { login } = useAuth();
  const [showForgot, setShowForgot] = useState(false);

  const tabs = [
    { id: 'customer', label: 'Customer', icon: '👤' },
    { id: 'artisan', label: 'Artisan', icon: '🎨' },
    { id: 'admin', label: 'Admin', icon: '⚙️' },
    { id: 'consultant', label: 'Consultant', icon: '📚' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ name: formData.name || 'User', email: formData.email, ...formData }, activeTab);
  };

  if (showForgot) {
    return (
      <div className="login-page-root">
        <div className="login-page-card">
          <h2 className="login-title">Forgot Password</h2>
          <p className="login-subtitle">
            Enter your email and we&apos;ll send a reset link.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert('Password reset link sent (demo).');
              setShowForgot(false);
            }}
          >
            <div className="form-group">
              <label>Email</label>
              <input type="email" required placeholder="Enter your email" />
            </div>
            <button type="submit" className="login-submit">
              Send reset link
            </button>
            <button
              type="button"
              className="login-secondary-btn"
              onClick={() => setShowForgot(false)}
            >
              Back to login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="login-page-root">
      <div className="login-page-card">
        <h2 className="login-title">Welcome to TribalArtisan</h2>
        <p className="login-subtitle">Sign in to explore authentic tribal handicrafts</p>

        <div className="login-tabs">
          {tabs.map(tab => (
            <div
              key={tab.id}
              className={`login-tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.icon} {tab.label}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              required
              placeholder="Enter your name"
              onChange={e => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          {activeTab === 'customer' && (
            <>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  required
                  placeholder="Enter your password"
                  onChange={e => setFormData({ ...formData, password: e.target.value })}
                />
              </div>
            </>
          )}

          {activeTab === 'artisan' && (
            <>
              <div className="form-group">
                <label>Artisan ID</label>
                <input
                  type="text"
                  required
                  placeholder="Enter your artisan ID"
                  onChange={e => setFormData({ ...formData, artisanId: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  required
                  placeholder="Enter your password"
                  onChange={e => setFormData({ ...formData, password: e.target.value })}
                />
              </div>
            </>
          )}

          {activeTab === 'admin' && (
            <>
              <div className="form-group">
                <label>Admin Username</label>
                <input
                  type="text"
                  required
                  placeholder="Enter admin username"
                  onChange={e => setFormData({ ...formData, username: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label>Admin Code</label>
                <input
                  type="password"
                  required
                  placeholder="Enter admin code"
                  onChange={e => setFormData({ ...formData, adminCode: e.target.value })}
                />
              </div>
            </>
          )}

          {activeTab === 'consultant' && (
            <>
              <div className="form-group">
                <label>Consultant ID</label>
                <input
                  type="text"
                  required
                  placeholder="Enter consultant ID"
                  onChange={e => setFormData({ ...formData, consultantId: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  required
                  placeholder="Enter your password"
                  onChange={e => setFormData({ ...formData, password: e.target.value })}
                />
              </div>
            </>
          )}

          <button type="submit" className="login-submit">
            Enter as {activeTab}
          </button>
          <button
            type="button"
            className="login-secondary-btn"
            onClick={() => setShowForgot(true)}
          >
            Forgot password?
          </button>
        </form>
      </div>

      <div className="login-page-hero">
        <img
          src="https://gaatha.com/wp-content/uploads/2020/10/Andhra-saree.jpg"
          alt="Handwoven tribal saree"
          className="login-hero-image"
        />
        <div className="login-hero-text">
          <h3>Handcrafted with heritage</h3>
          <p>Celebrate India&apos;s tribal artisans through vibrant textiles and timeless crafts.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
