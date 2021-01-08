// 카운터 리듀서
// 카운터 관련 상태 로직
import { createAction, handleActions } from 'redux-actions';

// 액션타입 정의
const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';

// 액션생성함수 만들기
// 다른파일에서 불러와야함으로 export
// export const increment = () => ({ type: INCREMENT });
// export const decrement = () => ({ type: DECREMENT });

export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);

// 모듈의 초기 상태를 정의합니다.
const initialState = {
    number: 0
};

// 리듀서 만들고 export
// export default function reducer(state = initialState, action) {
//     // 리듀서함수는 액션타입에 따라 변화된 상태를 정의 후 반환
//     // initialState = state 기본값
//     switch(action.type) {
//         case INCREMENT:
//             return { number: state.number + 1 };
//         case DECREMENT:
//             return { number: state.number - 1 };
//         default:
//             return state;
//             // 아무일없을때 현재상태 그대로 반환
//     }
// }

// handleAction의 첫번째 파라미터 = 액션을 처리하는 함수들로 이뤄진객체
// 두번째 파라미터는 초기상태
export default handleActions({
    [INCREMENT]: (state, action) => {
        return { number: state.number + 1 };
    },
    [DECREMENT]: ({ number }) => ({ number: number - 1 })
}, initialState);