import * as types from '../actions/ActionTypes'
const {SET_COLOR} = types

const initialState = {
    color: 'black'
}

const color = (state = initialState, action) => {
    switch(action.type) {
        case SET_COLOR:
            return {
                color: action.color
            }
        default:
            return state
    }
}

export default color