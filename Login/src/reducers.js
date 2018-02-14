import { combineReducers } from 'redux';
import { ADD_LOGIN, COMPLETE_LOGIN, SET_VISIBILITY_FILTER, VisibilityFilters } from './actions';
const { SHOW_ALL } = VisibilityFilters;

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

const selectedItem = (state = [], action) => {
  switch (action.type) {
    case 'SELITEM':
      return [...state, {
        selitem: action.text
      }];
    default:
      return state;
  }
}

function logins(state = [], action) {
  switch (action.type) {
    case ADD_LOGIN:
      return [...state, {
        text: action.text,
        completed: false
      }];
    case COMPLETE_LOGIN:
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];
    default:
      return state;
  }
}

const loginApp = combineReducers({
  visibilityFilter,
  logins,
  selectedItem
});

export default loginApp;