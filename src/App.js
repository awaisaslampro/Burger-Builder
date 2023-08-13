import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBulder';
class App extends Component {
  render() {
    return (
      <Layout>
        <BurgerBuilder />
        <p>Testing paragraph</p>
      </Layout>
    )
  }

}

export default App;
