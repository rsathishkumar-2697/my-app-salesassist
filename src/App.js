
import React from 'react';
import Header from './components/Header';
import ProductListing from './components/ProductListing';

import ProductsList from './components/ProductsList';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <ProductListing />
      <ProductsList/>
    </div>
  );
};

export default App;
