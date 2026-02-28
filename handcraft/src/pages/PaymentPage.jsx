import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const PaymentPage = ({ onBack }) => {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const { clearCart, cartTotal, cart } = useCart();

  const paymentMethods = [
    { id: 'card', label: 'Credit Card', icon: '💳' },
    { id: 'paypal', label: 'PayPal', icon: '🅿️' },
    { id: 'upi', label: 'UPI', icon: '📱' },
    { id: 'bank', label: 'Bank Transfer', icon: '🏦' }
  ];

  const handlePayment = (e) => {
    e.preventDefault();
    if (cart.length === 0) {
      alert('Your cart is empty.');
      return;
    }
    alert('Payment successful! Thank you for your purchase (demo).');
    clearCart();
    onBack();
  };

  return (
    <div className="payment-page-root">
      <div className="payment-page-card">
        <button className="back-btn" onClick={onBack}>← Back to Shop</button>
        <h2>Checkout</h2>
        <p>Total amount: <strong>${cartTotal.toFixed(2)}</strong></p>

        <div className="payment-section">
          <h3>Select Payment Method</h3>
          <div className="payment-methods">
            {paymentMethods.map(method => (
              <div key={method.id}
                className={`payment-method ${paymentMethod === method.id ? 'selected' : ''}`}
                onClick={() => setPaymentMethod(method.id)}>
                <span className="payment-icon">{method.icon}</span>
                <p>{method.label}</p>
              </div>
            ))}
          </div>

          <form onSubmit={handlePayment} className="payment-form">
            {paymentMethod === 'card' && (
              <>
                <div className="form-group">
                  <label>Card Number</label>
                  <input type="text" placeholder="1234 5678 9012 3456" required />
                </div>
                <div className="form-group">
                  <label>Cardholder Name</label>
                  <input type="text" placeholder="John Doe" required />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Expiry Date</label>
                    <input type="text" placeholder="MM/YY" required />
                  </div>
                  <div className="form-group">
                    <label>CVV</label>
                    <input type="text" placeholder="123" required />
                  </div>
                </div>
              </>
            )}

            {paymentMethod === 'paypal' && (
              <div className="form-group">
                <label>PayPal Email</label>
                <input type="email" placeholder="email@paypal.com" required />
              </div>
            )}

            {paymentMethod === 'upi' && (
              <div className="form-group">
                <label>UPI ID</label>
                <input type="text" placeholder="username@upi" required />
              </div>
            )}

            {paymentMethod === 'bank' && (
              <>
                <div className="form-group">
                  <label>Account Number</label>
                  <input type="text" placeholder="Enter account number" required />
                </div>
                <div className="form-group">
                  <label>IFSC Code</label>
                  <input type="text" placeholder="IFSC code" required />
                </div>
              </>
            )}

            <button type="submit" className="pay-btn">Pay Now</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
