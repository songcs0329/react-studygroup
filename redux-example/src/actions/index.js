import * as types from './ActionTypes'

// 어떤 액션을 할지 정의? 그에따른 필요 파라미터 정의
export function increment() {
  return {
    type: types.INCREMENT
  }
}

export function decrement() {
  return {
    type: types.DECREMENT
  }
}

export function setColor(color) {
  return {
    type: types.SET_COLOR,
    color
  }
}
