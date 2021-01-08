import React, { useContext } from 'react';
import { UserDispatch } from '../App';

// const User = ({user, onRemove, onToggle}) => {
//     return (
//         <div>
//             <b
//                 style={{
//                     cursor: 'pointer',
//                     color: user.active ? 'green' : '#000'
//                 }}
//                 onClick={() => onToggle(user.id)}
//             >
//                 {user.username}
//             </b>
//             &nbsp;
//             <span>{user.email}</span>
//             <button onClick={() => onRemove(user.id)}>삭제</button>
//         </div>
//     )
// }


const User = React.memo(function({user}) {
  // console.log('user render')
  const dispatch = useContext(UserDispatch)

  const onToggle = (id) => {
    dispatch({
      type: "TOGGLE_USER",
      id
    })
  }

  const onRemove = (id) => {
    dispatch({
      type: "REMOVE_USER",
      id
    })
  }

  return (
    <div>
      <b
        style={{
            cursor: 'pointer',
            color: user.active ? 'green' : '#000'
        }}
        onClick={() => onToggle(user.id)}
      >
        {user.username}
      </b>
      &nbsp;
      <span>{user.email}</span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  )
})

const UserList = ({users}) => {
  // console.log('userlist render')
    return (
        <div>
        {users.map((user) => {
            return (
                <User
                    key={user.id}
                    user={user}
                />
            )
        })}
        </div>
    );
};

export default React.memo(UserList);