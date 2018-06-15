import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends React.PureComponent {
  render() {
    return (<div className="header">
      <NavLink to="/home/search">Keresés</NavLink>
      <NavLink to="/home/series">Sorozataim</NavLink>
    </div>);
  }
}
