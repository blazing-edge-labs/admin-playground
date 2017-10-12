import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from 'constants/actions'
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

export const authenticate = values =>
  dispatch => (
    api.post('auth', values)
      .then(data => {
        store.set('token', `Bearer ${data.token}`)
        return dispatch(loginSuccess())
      })
  )

export const reAuthenticate = () =>
  dispatch => (
    api.get('self')
      .then(data =>
        dispatch(loginSuccess())
      )
  )
