// 모든 모듈(리듀서)들을 불러와서 합치는 작업이 이뤄짐
// 루트 리듀서
import { combineReducers } from 'redux'; // 을 통해 하나의 리듀서로 합쳐줌
import counter from './counter';
import todo from './todo';

export default combineReducers({
    counter,
    todo
});