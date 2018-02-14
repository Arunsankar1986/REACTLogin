import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { addLogin, completeLogin, setVisibilityFilter, VisibilityFilters } from '../actions';
import AddLogin from '../components/AddLogin';
import LoginList from '../components/LoginList';
import Footer from '../components/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deltextName: '',
      deltextID: ''
    }
    this.handleOnLoginClick = this.handleOnLoginClick.bind(this);
  }
  handleOnLoginClick(index, data) {

    this.setState({ deltextName: data, deltextID: index });
    this.props.dispatch({ type: 'SELITEM', text: index });
    console.log(data)
  }

  render() {
    const { dispatch, visiblelogins, visibilityFilter, selectedItem } = this.props;
    return (
      <div>
        <h1>Login</h1>
        <AddLogin deltextName={this.state.deltextName}
          deltextID={this.state.deltextID}
          onAddClick={text =>
            dispatch(addLogin(text))
          } onDeleteClick={function () {

            const selectedItem = this.props.selectedItem[this.props.selectedItem.length - 1]
            this.props.dispatch(completeLogin(selectedItem.selitem));

          }.bind(this)
          } />
        <LoginList
          logins={visiblelogins}
          onLoginClick={this.handleOnLoginClick}
        />
      </div>
    );
  }
}

App.propTypes = {
  visiblelogins: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }))
};

function selectlogins(logins, filter) {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return logins;
    case VisibilityFilters.SHOW_COMPLETED:
      return logins.filter(login => login.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return logins.filter(login => !login.completed);
  }
}

function select(state) {
  return {
    visiblelogins: selectlogins(state.logins, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter,
    selectedItem: state.selectedItem
  };
}

export default connect(select)(App);