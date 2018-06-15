import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom'

import KeyComponent from './components/key-component';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/key" component={KeyComponent} />
          <Route render={() => (<Redirect to="/key" />)} />
        </Switch>
      </Router>
    );
  }
}

export default App;