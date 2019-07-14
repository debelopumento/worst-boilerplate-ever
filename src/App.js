import React from "react"
import { connect } from "react-redux"
import * as actions from "./actions"
import logo from "./logo.svg"
import "./App.css"

function App(props) {
  const { accumulator, increment, decrement } = props
  return (
    <div className="App">
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
