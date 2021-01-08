import { useEffect, useReducer } from 'react';

const initialState = {
  loading: false,
  data: null,
  error: null,
}

const reducer = (state, action) => {
  switch(action.type) {
    case "LOADING":
      return {
        ...state,
        loading: true,
      }
    case "SUCCESS":
      return {
        loading: false,
        error: null,
        data: action.data,
      }
    case "ERROR":
      return {
        loading: false,
        data: null,
        error: action.error,
      }
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const useAsync = (cb, deps = [], skip = false) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const fetchData = async () => {
    dispatch({type: "LOADING"})
    try {
      const data = await cb()
      dispatch({
        type: "SUCCESS",
        data,
      })
    } catch(e) {
      dispatch({
        type: "ERROR",
        error: e,
      })
    }
  }

  useEffect(() => {
    if(skip) return
    fetchData()
    // eslint-disable-next-line
  }, deps)

  return [state, fetchData]
};

export default useAsync;