import React, { Component, PropTypes } from 'react';

export default class AddLogin extends Component {

  constructor(props) {
    super(props);
    this.onDeleteClick = this.props.onDeleteClick.bind(this);
    this.state = {
      deltextName: this.props.deltextName
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ deltextName: nextProps.deltextName })
  }


  render() {
    return (
      <div>
        <label>Name:</label>
        <input type='text' ref='input' id="text" value={this.state.deltextName}
          onChange={e => { this.setState({ deltextName: e.target.value }) }} />
        <br />
        <br />
        <label>Role:</label>
        <input type='text' ref='input1' />
        <br />
        <br />
        <button onClick={this.onDeleteClick} >
          Delete
        </button>
        <button onClick={(e) => this.handleClick(e)}>
          Submit
        </button>
        <br />
        <br />
        <span style={{ fontWeight: "bold" }}>User List:</span>
      </div>
    );
  }

  handleClick(e) {
    const node = this.refs.input;
    const node1 = this.refs.input1;
    const text = node.value.trim();
    this.props.onAddClick(text);
    node.value = '';
    node1.value = '';
    this.setState({ deltextName: '' })
  }
}

AddLogin.propTypes = {
  onAddClick: PropTypes.func.isRequired
};
