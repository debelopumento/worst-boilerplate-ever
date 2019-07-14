import React from "react"
import { Helmet } from "react-helmet"
import { connect } from "react-redux"
import * as actions from "./actions"
import logo from "./logo.svg"
import "./App.css"

function App(props) {
  const { accumulator, increment, decrement } = props
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="The worst boilerplate ever! Built with <3 by Di Ye"
        />
        <title>Worst Boilerplate Ever!</title>
        <link rel="canonical" href="https://github.com/debelopumento" />
      </Helmet>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Worst React Boilerplate Ever!</h1>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <h1>Accumulator: {accumulator}</h1>
      </header>
    </div>
  )
}

export default connect(
  storeState => ({
    accumulator: storeState.accumulator,
  }),
  {
    increment: actions.increment,
    decrement: actions.decrement,
  },
)(App)
