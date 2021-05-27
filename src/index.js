import React, { Suspense, lazy } from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import "./index.css"
import store from "./store"
import * as serviceWorker from "./serviceWorker"

const pages = ["page-1", "page-2"]

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={lazy(() => import("./page-1"))} />
          {pages.map(page => (
            <Route
              key={page}
              path={`/${page}`}
              component={lazy(() => import(`./${page}`))}
            />
          ))}
        </Switch>
      </Suspense>
    </Router>
  </Provider>,

  document.getElementById("root"),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
