import { combineReducers } from "redux";
import counter from './counter'
import ui from './ui'

// 실질적으로 액션에서 파라미터 받아서 state 변경하는 로직?
const reducers = combineReducers({
  counter, ui
})

export default reducers