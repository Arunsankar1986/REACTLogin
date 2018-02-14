import React, { Component, PropTypes } from 'react';
import Login from './Login';

export default class LoginList extends Component {
  render() {
    return (
      <ul>
        {this.props.logins.map((login, index) =>
          <Login {...login}
            key={index}
            onClick={() => this.props.onLoginClick(index, login.text)} />
        )}
      </ul>
    );
  }
}

LoginList.propTypes = {
  onloginClick: PropTypes.func.isRequired,
  logins: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired).isRequired
};