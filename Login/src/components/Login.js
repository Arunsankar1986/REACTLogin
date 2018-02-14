import React, { Component, PropTypes } from 'react';

export default class Login extends Component {
  render() {
    return (
      <li
        onClick={this.props.onClick}
        style={{
          cursor: this.props.completed ? 'default' : 'pointer'
        }}>
        {this.props.text}
      </li>
    );
  }
}

Login.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired
};