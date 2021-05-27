import { combineReducers } from "redux"

const accumulator = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1
    case "DECREMENT":
      return state - 1
    default:
      return state
  }
}

const countries = (state = [], action) => {
  switch (action.type) {
    case "FETCH_AND_UPDATE_COUNTRIES": {
      return action.countries
    }
    default:
      return state
  }
}

const allReducers = combineReducers({
  accumulator,
  countries,
})

export default allReducers
