import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Modal from './components/Modal';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/Ecommerce-Phone-Shop" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
        </Switch>
        <Modal />
      </React.Fragment>
    );
  }
}

export default App;