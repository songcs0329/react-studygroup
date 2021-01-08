import * as types from './ActionTypes'
const {INCREMENT, DECREMENT, SET_COLOR, CREATE, REMOVE} = types

export const create = color => ({
    type: CREATE,
    color
})
export const remove = () => ({
    type: REMOVE
})

export const increment = (index) => ({
    type: INCREMENT,
    index
})
export const decrement = (index) => ({
    type: DECREMENT,
    index
})
export const setColor = ({index, color}) => ({
    type: SET_COLOR,
    index,
    color
})