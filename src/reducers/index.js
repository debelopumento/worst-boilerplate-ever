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

const allReducers = combineReducers({
  accumulator,
})

export default allReducers
