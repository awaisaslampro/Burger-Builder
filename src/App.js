import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom'
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Routes>
            <Route path="/" element={<BurgerBuilder />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </Layout>
      </div>
    );
  }
}

export default App;
