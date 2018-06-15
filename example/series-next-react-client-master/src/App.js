import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom'

import LoginComponent from './components/login-component';
import Home from './components/Home';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login" component={LoginComponent} />
          <Route path="/home" component={Home}/>
          <Route render={() => (<Redirect to="/login" />)} />
        </Switch>
      </Router>
    );
  }
}

export default App;
