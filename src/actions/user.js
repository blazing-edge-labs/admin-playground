import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from 'constants/actions'
import parseErrors from 'utils/parseErrors'
import api from 'utils/api'
import store from 'store'

// TODO implement login logic, store token,
// use it for authentication on initial load of the app

export const loginSuccess = user => ({
  type: LOGIN_SUCCESS,
  user: {
    'one': 1
  }
})

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS
})
