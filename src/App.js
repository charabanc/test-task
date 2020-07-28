import React from 'react'
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'

import ListPage from 'pages/List'

import store from 'models/Store'

import { Provider } from 'mobx-react'

const routes = [
  ['/list', ListPage]
]

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          {routes.map(([path, component]) => (
            <Route path={path} component={component} />
          ))}
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}

export default App
