import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import store from './store'

import { StartPage } from './components/StartPage'

import './ipc'

render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={StartPage} />
    </Router>
  </Provider>
, document.querySelector('#app'))