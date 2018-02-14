export const ADD_LOGIN = 'ADD_LOGIN';
export const COMPLETE_LOGIN = 'COMPLETE_LOGIN';

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};

export function addLogin(text) {
  return { type: ADD_LOGIN, text };
}

export function completeLogin(index) {
  return { type: COMPLETE_LOGIN, index };
}