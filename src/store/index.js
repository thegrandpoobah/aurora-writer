import { createStore, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from './root-reducer'

const composeEnhancer = composeWithDevTools({})

const store = createStore(
  rootReducer,
  composeEnhancer(
    applyMiddleware(thunk)
  )
)

export default store
