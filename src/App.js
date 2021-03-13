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

import {UserContextProvider} from "./context/userContext"

import Header from './components/Header.js'
import Landing from './pages/Landing.js'
import Detail from './pages/detailProduct.js'
import PrivateRoute from './components/PrivateRoute'



function App() {

  return (
    <UserContextProvider>
      <div className="mb-5">
        <Router>
          <Header />
          <Route exact path="/" component={Landing} />
          <PrivateRoute exact path="/detail-product/:id" component={Detail} />
        </Router>
      </div>
    </UserContextProvider>

  );
}

export default App;
