import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import formDisplayer from "./formDisplayer";

export default combineReducers({
  todos,
  visibilityFilter,
  formDisplayer
})
