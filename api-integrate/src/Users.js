import React, { useState } from 'react';
import User from './User';
import { getUsers, useUsersDispatch, useUsersState } from './UsersContext';

const Users = () => {
  const [userId, setUserId] = useState(null)
  const state = useUsersState();
  const dispatch = useUsersDispatch();
  
  const {loading , data: users, error} = state.users
  
  const fetchData = () => getUsers(dispatch)

  if(loading) return <div>Loading...</div>
  if(error) return <div>에러가 발생</div>
  if(!users) return <button onClick={fetchData}>다시 불러오기</button>

  return (
    <>
      <ul>
        {
          users.map(user => {
            return (
              <li
                key={user.id}
                onClick={() => setUserId(user.id)}
                style={{ cursor: 'pointer' }}
              >
                <b>{user.username}</b> {user.name}
              </li>
            )
          })
        }
      </ul>
      <button onClick={fetchData}>다시 불러오기</button>
      {userId && <User id={userId}/>}
    </>
  );
};

export default Users;