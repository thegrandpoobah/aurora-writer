import { combineReducers } from 'redux'

import { reducer as startPage } from 'components/StartPage'
import { reducer as editor } from 'components/Editor'

export default combineReducers({
  startPage,
  editor
})
