import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom'

import KeyComponent from './components/key-component';
import CodingComponent from './components/coding-component';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/enter-secret-key" component={KeyComponent} />
          <Route path="/coding" component={CodingComponent} />
          <Route render={() => (<Redirect to="/enter-secret-key" />)} />
        </Switch>
      </Router>
    );
  }
}

export default App;
