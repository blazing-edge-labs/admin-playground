import { LOGIN_SUCCESS, LOGOUT_SUCCESS }
  from '../constants/actions'

const initialState = null

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return action.user
    case LOGOUT_SUCCESS:
      return initialState
    default:
      return state
  }
}
