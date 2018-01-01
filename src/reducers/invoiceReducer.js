/**
 * action types
 */
export const INITIAL = 'app/invoiceReducer/INITIAL'
export const SET_USER = 'app/invoiceReducer/SET_USER'

/**
 * initialState
 */

export const initialState = {
  user: null,
  userLoggedIn: false,
}

export default function invoiceReducer(state = initialState, action) {
  switch(action.type) {
    case INITIAL:
      return initialState;
    case SET_USER:
      return {...state, user: action.data, userLoggedIn: true}
    default:
      return state
  }
}

/**
 * Action Creators
 */

export const actions = {
  init: () => ({ type: INITIAL }),
  setUser: (data) => ({ type: SET_USER, data })
}
