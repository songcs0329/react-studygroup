import { createStore } from 'redux'

// 리덕스 state 정의
const initialState = {
    counter: 0,
    text: "",
    list: []
}

// 액션타입정의
const INCREASE = "INCREASE"
const DECREASE = "DECREASE"
const CHANGE_TEXT = "CHANGE_TEXT"
const ADD_TO_LIST = "ADD_TO_LIST"

// 액션 생성함수 정의
const increase = () => ({type: INCREASE})
const decrease = () => ({type: DECREASE})
const changeText = text => ({
    type: CHANGE_TEXT,
    text
})
const addToList = item => ({
    type: ADD_TO_LIST,
    item
})

// 리듀서 만들기
function reducer(state = initialState, action) {
    // state 초기값 initialState
    switch(action.type) {
        case INCREASE:
            return {
                ...state,
                counter: state.counter + 1
            }
        case DECREASE:
            return {
                ...state,
                counter: state.counter - 1
            }
        case CHANGE_TEXT:
            return {
                ...state,
                text: action.text
            }
        case ADD_TO_LIST:
            return {
                ...state,
                list: state.list.concat(action.item)
            }
        default:
            return state
    }
}

// 스토어 만들기
const store = createStore(reducer)

// 현재 store state 조회
console.log(store.getState())

// store state가 바뀔때마다 호출
const listener = () => {
    const state = store.getState()
    console.log(state)
}

const unsubscribe = store.subscribe(listener)
// 구독해제시 unsubscribe()

store.dispatch(increase())
store.dispatch(decrease())
store.dispatch(changeText("HELLO"))
store.dispatch(addToList({id:1, text: "WOW"}))