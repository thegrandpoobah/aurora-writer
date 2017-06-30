import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import store from './store'

import StartPage from 'components/StartPage'
import Editor from 'components/Editor'

render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/editor" component={Editor} exact />
        <Route component={StartPage} />
      </Switch>
    </Router>
  </Provider>
, document.querySelector('#app'))
