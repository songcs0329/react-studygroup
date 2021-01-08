// 액션타입
const ADD_TODO = 'todos/ADD_TODO'
const TOGGLE_TODO = 'todos/TOGGLE_TODO'

// 액션생성함수
let nextId = 2; // todo 데이터에서 사용 할 고유 id
export const addTodo = (text) => {
    return {
        type: ADD_TODO,
        todo: {
            id: nextId++,
            text
        }
    }
}
export const toggleTodo = (id) => {
    return {
        type: TOGGLE_TODO,
        id
    }
}

// 초기값
const initialState = [
    {
        id: 0,
        text: '출근',
        done: false
    },
    {
        id: 1,
        text: '퇴근',
        done: false
    },
]

const todos = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TODO:
            return state.concat(action.todo)
        case TOGGLE_TODO:
            return state.map((todo) => {
                return todo.id === action.id
                ? {
                    ...todo,
                    done: !todo.done
                }
                : todo
            })
        default:
            return state
    }
}

export default todos