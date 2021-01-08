import { useCallback, useReducer } from 'react';

function reducer(state, action) {
  switch(action.type) {
    case "RESET":
      return Object.keys(state).reduce((acc, cur) => {
        acc[cur] = "";
        return acc;
      }, {})
    case "CHANGE":
      return {
        ...state,
        [action.name]: action.value
      }
    default:
      return state
  }
}

function useInputs(initialForm) {
  const [form, dispatch] = useReducer(reducer, initialForm)
  
  const onChange = useCallback((e) => {
    const {name, value} = e.target;
    dispatch({
      type: "CHANGE",
      name,
      value
    })
  }, [])
  const reset = useCallback(() => {
    dispatch({
      type: "RESET"
    })
  }, [])

  return [form, onChange, reset]
}

export default useInputs;