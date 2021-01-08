import React, {  useContext, useRef } from 'react';
import { UserDispatch } from '../App';
import useInputs from '../hooks/useInputs';

const CreateUser = () => {
  // console.log('createuser render')
  // input 상태(state)
  const [{username, email}, onChange, reset] = useInputs({
    username: '',
    email: ''
  })
  const nextId = useRef(4)

  // users state dispatch
  const dispatch = useContext(UserDispatch)

  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email
    }
    // users state 추가
    dispatch({
      type: "CREATE_USER",
      user
    })
    // input state 초기화
    reset()
    nextId.current += 1
  }

    return (
        <div>
            <input
            name={"username"}
            placeholder={"계정명"}
            onChange={onChange}
            value={username}
            />
            <input
            name={"email"}
            placeholder={"이메일"}
            onChange={onChange}
            value={email}
            />
            <button onClick={onCreate}>등록</button>
        </div>
    );
};

export default React.memo(CreateUser);