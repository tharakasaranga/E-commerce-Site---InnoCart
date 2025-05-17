import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './ShoppingAndBrowsing/Home';
import ProductCategoryPage from './ShoppingAndBrowsing/ProductCatogory';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productCatogory" element={<ProductCategoryPage />} />
        
      </Routes>
    </Router>
  );
}

export default App;