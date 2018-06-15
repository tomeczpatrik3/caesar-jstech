import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Header';
import Search from './Search';

export default class Home extends React.Component {

  render() {
    return (<div className="home">
      <Header />
      <Switch>
        <Route path="/home/search" component={Search} />
        <Route path="/home/series" />
      </Switch>
    </div>);
  }
}