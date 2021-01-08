import React, { useContext, createContext, useReducer } from 'react';

export const LOADING = "LOADING"
export const GET_MOVIES = "GET_MOVIES"
export const CHANGE_DATE = "CHANGE_DATE"
export const ERROR = "ERROR"

const initialState = {
  loading: false,
  date: "",
  movies: [],
  error: null
}

function reducer(state, action) {
  console.log(state, action)
  switch(action.type) {
    case LOADING:
      return {
        ...state,
        loading: true
      }
    case CHANGE_DATE:
      return {
        ...state,
        loading: false,
        [action.name] : action.value
      }
    case GET_MOVIES:
      return {
        ...state,
        loading: false,
        movies: action.movies
      }
    case ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      }
    default:
      return state
  }
}

const MoviesStateContext = createContext(null)
const MoviesDispatchContext = createContext(null)

export const MoviesProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  
  return (
    <MoviesStateContext.Provider value={state}>
      <MoviesDispatchContext.Provider value={dispatch}>
        {children}
      </MoviesDispatchContext.Provider>
    </MoviesStateContext.Provider>
  )
}

export const useMoviesState = () => {
  const state = useContext(MoviesStateContext)
  return state
}
export const useMoviesDispatch = () => {
  const dispatch = useContext(MoviesDispatchContext)
  return dispatch
}

export const AsyncData = async (dispatch, callback) => {
  dispatch({type: LOADING})
  try {
    const res = await callback()
    dispatch({
      type: GET_MOVIES,
      movies: res.boxOfficeResult.dailyBoxOfficeList
    })
  } catch(e) {
    dispatch({
      type: ERROR,
      error: e
    })
  }
}