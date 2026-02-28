import React, { useState } from 'react';
import './App.css';
import { AuthProvider, useAuth } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { products } from './data/products';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductsGrid from './components/ProductsGrid';
import Footer from './components/Footer';
import QuickViewModal from './components/modals/QuickViewModal';
import CartModal from './components/modals/CartModal';
import LoginPage from './pages/LoginPage';
import PaymentPage from './pages/PaymentPage';

// Main App inner content, behind authentication
function AppShell() {
  const { isAuthenticated } = useAuth();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState('home'); // 'home' | 'payment'

  if (!isAuthenticated) {
    return <LoginPage />;
  }

  return (
    <div className="app">
      <Navbar 
        onLoginClick={() => {}}
        onCartClick={() => setIsCartOpen(true)}
      />
      
      {currentPage === 'home' && (
        <>
          <Hero />
          <ProductsGrid 
            products={products} 
            onQuickView={setSelectedProduct}
          />
        </>
      )}

      {currentPage === 'payment' && (
        <PaymentPage onBack={() => setCurrentPage('home')} />
      )}
      
      <Footer />

      <CartModal 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)}
        onCheckout={() => setCurrentPage('payment')}
      />

      <QuickViewModal 
        product={selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />
    </div>
  );
}

// Root App component with providers
function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <AppShell />
      </CartProvider>
    </AuthProvider>
  );
}

export default App;