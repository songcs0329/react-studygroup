import React, { useContext, createContext, useReducer } from 'react';
import { getLatest } from '../utils/utils';

const LOADING = "LOADING"
const GET_MOVIES = "GET_MOVIES"
const ERROR = "ERROR"
const CHANGE_VALUE = "CHANGE_VALUE"

const initialState = {
  loading: false,
  movies: [],
  error: null,
  options: "daily",
  date: getLatest()
}

function reducer(state, action) {
  switch(action.type) {
    case LOADING:
      return {
        ...state,
        loading: true
      }
    case GET_MOVIES:
      return {
        ...state,
        loading: false,
        movies: action.movies
      }
    case CHANGE_VALUE:
      return {
        ...state,
        [action.name] : action.value
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

export const changeValue = (dispatch, name, value) => {
  dispatch({
    type: CHANGE_VALUE,
    name,
    value
  })
}

export const AsyncData = async (dispatch, date, options, callback) => {
  if(date.length < 8 || isNaN(Number(date))) return alert(`날짜를 확인해주세요`)
  
  dispatch({type: LOADING})
  try {
    const res = await callback(date)
    const resultList = `${options}BoxOfficeList`
    dispatch({
      type: GET_MOVIES,
      movies: res.boxOfficeResult[resultList]
    })
  } catch(e) {
    dispatch({
      type: ERROR,
      error: e
    })
  }
}