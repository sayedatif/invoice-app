/**
 * action types
 */
export const INITIAL = 'app/invoiceReducer/INITIAL'
export const ADD_USER = 'app/invoiceReducer/ADD_USER'
// export const types = {
//   INITIAL: 'app/invoiceReducer/INITIAL',
//   ADD_USER: 'app/invoiceReducer/ADD_USER'
// };

/**
 * initialState
 */

export const initialState = {

}

export default function invoiceReducer(state = initialState, action) {
  switch(action.type) {
    case INITIAL:
      return initialState;
    default:
      return state
  }
}

/**
 * Action Creators
 */

export const actions = {
  init: () => ({ type: INITIAL })
}
