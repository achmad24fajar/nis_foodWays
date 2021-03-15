import React, {useState} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles.css';

import { UserContextProvider } from "./context/userContext"
import { CartContextProvider } from "./context/cartContext";

import Header from './components/Header.js'
import PrivateRoute from './components/PrivateRoute'
import Landing from './pages/Landing.js'
import Detail from './pages/detailProduct.js'
import Cart from './pages/Cart'
import DetailOrder from './pages/detailOrder'
import Profile from './pages/Profile'

function App() {

  return (
    <UserContextProvider>
      <CartContextProvider>
      <div className="mb-5">
        <Router>
          <Header />
          <Route exact path="/" component={Landing} />
          <PrivateRoute exact path="/detail-product/:id" component={Detail} />
          <PrivateRoute exact path="/carts" component={Cart} />
          <PrivateRoute exact path="/detail-order" component={DetailOrder} />
          <PrivateRoute exact path="/profile" component={Profile} />
        </Router>
      </div>
      </CartContextProvider>
    </UserContextProvider>

  );
}

export default App;
