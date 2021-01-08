import * as types from "../actions/ActionTypes"
const {INCREMENT, DECREMENT} = types

const initialState = {
    number: 0
}

function number(state = initialState, action) {
    switch(action.type) {
        case INCREMENT:
            return {
                ...state,
                number: state.number + 1
            }
        case DECREMENT:
            return {
                ...state,
                number: state.number - 1
            }
        default:
            return state
    }
}

export default number