import React, { createContext, useContext, useReducer } from 'react';
import * as api from './api'
import createAsyncDispatchcer, { createAsyncHandler, initialAsyncState } from './asyncActionUtils';

// UsersContext 에서 사용 할 기본 상태
const initialState = {
  users: initialAsyncState,
  user: initialAsyncState
};

const usersHandler = createAsyncHandler("GET_USERS", "users")
const userHandler = createAsyncHandler("GET_USER", "user")

const reducer = (state, action) => {
  switch(action.type) {
    case "GET_USERS":
    case "GET_USERS_SUCCESS":
    case "GET_USERS_ERROR":
      return usersHandler(state, action)
    case "GET_USER":
    case "GET_USER_SUCCESS":
    case "GET_USER_ERROR":
      return userHandler(state, action)
    default:
      throw new Error(`Unhanded action type: ${action.type}`);
  }
}

const UsersStateContext = createContext(null);
const UserDispatchContext = createContext(null);

export const UsersProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <UsersStateContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UsersStateContext.Provider>
  );
};

export const useUsersState = () => {
  const state = useContext(UsersStateContext)
  if(!state) throw new Error('Cannot find UsersProvider')
  return state
}

export const useUsersDispatch = () => {
  const dispatch = useContext(UserDispatchContext)
  if(!dispatch) throw new Error('Cannot find UsersProvider')
  return dispatch
}

export const getUsers = createAsyncDispatchcer("GET_USERS", api.getUsers)
export const getUser = createAsyncDispatchcer("GET_USER", api.getUser)