import * as types from "../actions/ActionTypes";
const { CREATE, REMOVE, INCREMENT, DECREMENT, SET_COLOR } = types

const initialState = {
    counters: [
        {
            color: 'black',
            number: 0
        }
    ]
}

function counter(state = initialState, action) {
    const {counters} = state

    switch(action.type) {
        case CREATE:
            return {
                counters: [
                    ...counters,
                    {
                        color: action.color,
                        number: 0
                    }
                ]
            }
        case REMOVE:
            return {
                counters: counters.slice(0, counters.length - 1)
            }
        case INCREMENT:
            return {
                counters: [
                    ...counters.slice(0, action.index),
                    {
                        ...counters[action.index],
                        number: counters[action.index].number + 1
                    },
                    ...counters.slice(action.index + 1, counters.length)
                ]
            }
        case DECREMENT:
            return {
                counters: [
                    ...counters.slice(0, action.index),
                    {
                        ...counters[action.index],
                        number: counters[action.index].number - 1
                    },
                    ...counters.slice(action.index + 1, counters.length)
                ]
            }
        case SET_COLOR:
            return {
                counters: [
                    ...counters.slice(0, action.index),
                    {
                        ...counters[action.index],
                        color: action.color
                    },
                    ...counters.slice(action.index + 1, counters.length)
                ]
            }
        default:
            return state
    }
}

export default counter