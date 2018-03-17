import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './styles/App.css';
import SearchBar from './components/SearchBar';
import Main from './components/Main';
import CouponList from './components/CouponList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        <div className="App_container">
          <Router>
            <Switch>
              <Route exact path="/" component={Main} />
              <Route path="/list" component={CouponList} /> 
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
