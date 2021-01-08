// 스토어를 생성하는 함수를 만들어서 내보냄(생성은 안함 ./index.js에서 생성 configure())
// 이 함수는 store/index.js 에서 불러와서 사용하게됨
import { createStore } from 'redux';
import modules from './modules';

const configure = () => {
    // const store = createStore(modules);
    // redux-devtools 사용할려고 (크롬 익스텐션)
    const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    const store = createStore(modules, devTools);

    return store;
}

export default configure;