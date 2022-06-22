import React from 'react';
import './App.css';

import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';

import Home from './pages/index';
import SignInPage from './pages/signin';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SignInPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
