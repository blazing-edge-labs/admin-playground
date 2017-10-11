import { reducer as form } from 'redux-form'
import { combineReducers } from 'redux'

import user from './user'

const appReducer = combineReducers({
  form,
  user
})

export default appReducer
