import React from 'react';

import { login } from '../utils/api';

export default class LoginComponent extends React.Component {

  constructor() {
    super();
    this.state = {
      name: '',
    };
  }
  
  onNameInput(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    login(this.state)
      .then(() => {
        this.props.history.push('/home');
      })
      .catch(console.log);
  }

  render() {
    return (<form onSubmit={e => this.onSubmit(e)}>
      <div className="form-group">
        <label htmlFor="name">Név: </label>
        <input 
          name="name" type="text"
          value={this.state.name}
          onChange={e => this.onNameInput(e)}
        />
      </div>
      <button>Bejelentkezés</button>
    </form>);
  }
}