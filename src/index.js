import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import PhonesListContainer from './containers/PhonesListContainer'
import PhoneDetailContainer from './containers/PhoneDetailContainer'

import NotFound from './components/NotFound'
import registerServiceWorker from './registerServiceWorker'
import rootReducer from './reducers'

import './index.css'

const logger = createLogger();

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(
    thunk,
    logger,
  )
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={PhonesListContainer} />
        <Route exact path="/:phoneId" component={PhoneDetailContainer} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
