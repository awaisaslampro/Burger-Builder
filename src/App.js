import React, { Component } from 'react';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBulder';
import Layout from './hoc/Layout/Layout';
class App extends Component {
  render() {
    return (
      <Layout>
        <BurgerBuilder />
      </Layout>
    )
  }
}
export default App;
