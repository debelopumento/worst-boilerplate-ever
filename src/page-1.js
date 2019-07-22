import React from "react"
import { Helmet } from "react-helmet"
import { connect } from "react-redux"
import * as actions from "./actions"
import logo from "./logo.svg"
import "./App.css"

class Page extends React.Component {
  render() {
    const { accumulator, increment, decrement, countries } = this.props

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

  componentDidMount() {
    const { fetchAndUpdateCountries } = this.props
    fetchAndUpdateCountries()
  }
}

export default connect(
  storeState => ({
    accumulator: storeState.accumulator,
    countries: storeState.countries,
  }),
  {
    increment: actions.increment,
    decrement: actions.decrement,
    fetchAndUpdateCountries: actions.fetchAndUpdateCountries,
  },
)(Page)
