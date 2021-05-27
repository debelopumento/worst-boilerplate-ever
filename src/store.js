import { applyMiddleware, createStore } from "redux"
import logger from "redux-logger"
import thunk from "redux-thunk"
import reduxPromise from "redux-promise"
import allReducers from "./reducers"

let middleware

if (process.env.NODE_ENV !== "production") {
  middleware = applyMiddleware(reduxPromise, thunk, logger)
}

if (process.env.NODE_ENV === "production") {
  middleware = applyMiddleware(reduxPromise, thunk)
}

export default createStore(allReducers, middleware)
