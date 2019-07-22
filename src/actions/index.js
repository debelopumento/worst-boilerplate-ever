import { createApolloFetch } from "apollo-fetch"
export const increment = amount => ({
  type: "INCREMENT",
  payload: amount,
})

export const decrement = amount => ({
  type: "DECREMENT",
  payload: amount,
})

export const fetchAndUpdateCountries = () => async dispatch => {
  const { data } = await createApolloFetch({
    uri: "https://countries.trevorblades.com/",
  })({
    query: `{
      countries {
        name
        currency
        phone
        languages {
          name
          native
        }
      }
    }`,
  })
  const { countries } = data
  dispatch({
    type: "FETCH_AND_UPDATE_COUNTRIES",
    countries,
  })
}
