// todo 리듀서
// todo 관련 상태 로직
import { createAction, handleActions } from 'redux-actions';
import { Map, List} from 'immutable';

// 액션타입 설정
const CHANGE_INPUT = 'todo/CHANGE_INPUT'; // 인풋값 변화
const INSERT = 'todo/INSERT'; // todo 추가
const TOGGLE = 'todo/TOGGLE'; // todo checked toggle
const REMOVE = 'todo/REMOVE'; // todo 삭제

// 액션생성함수 설정
//createAction(액션이름, payload값, meta값)
export const changeInput = createAction(CHANGE_INPUT, value => value);
export const insert = createAction(INSERT, text => text);
export const toggle = createAction(TOGGLE, id => id);
export const remove = createAction(REMOVE, id => id);

let id = 0; // todo 아이템의 key값

const initialState = Map({ // immutable 객체는 Map({}), 배열은 List([])
    input: '',
    todos: List()
})

export default handleActions({
    // 한줄일 경우 {} 생략가능
    [CHANGE_INPUT]: (state, action) => state.set('input', action.payload),
    [INSERT]: (state, { payload: text }) => {
        // 위 코드는 action객체를 비구조화 할당하고, payload 값을 text라고 부르겠다는 의미
        const item = Map({
            id: id++,
            checked: false,
            text
        });
        return state.update('todos', todos => todos.push(item));
    },
    [TOGGLE]: (state, { payload: id }) => {
        // id값을 가진 index를 찾아서 checked 반전
        const index = state.get('todos').findIndex(item => item.get('id') === id);
        return state.updateIn(['todos', index, 'checked'], checked => !checked);
    },
    [REMOVE]: (state, { payload: id }) => {
        // id값을 가진 index를 찾아서 todos에서 삭제
        const index = state.get('todos').findIndex(item => item.get('id') === id);
        return state.deleteIn(['todos', index]);
    }
}, initialState)