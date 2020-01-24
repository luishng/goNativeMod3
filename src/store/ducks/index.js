import { combineReducers } from 'redux';

import login from '../ducks/login'
import repositories from '../ducks/repositories'

export default combineReducers({
  login,
  repositories,
})
