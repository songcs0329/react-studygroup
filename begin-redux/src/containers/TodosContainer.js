// 리덕스와 연동된 컨테이너 컴포넌트 작성
import React, { Component } from 'react';
import Todos from 'components/Todos';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as todoActions from 'store/modules/todo';

class TodosContainer extends Component {
    handleChange = (e) => {
        // 인풋값 변경
        const { TodoActions } = this.props;
        TodoActions.changeInput(e.target.value);
    }
    handleInsert = () => {
        // 아이템 추가
        const { input, TodoActions } = this.props;
        TodoActions.insert(input); // todos에 추가
        TodoActions.changeInput(''); // input값 초기화
    }
    handleToggle = (id) => {
        // 삭제선 toggle
        const { TodoActions } = this.props;
        TodoActions.toggle(id);
    }
    handleRemove = (id) => {
        // todos item 삭제
        const { TodoActions } = this.props;
        TodoActions.remove(id);
    }

    render() {
        const { handleChange, handleInsert, handleToggle, handleRemove } = this;
        const { input, todos } = this.props;

        return (
            <Todos
                todos={todos}
                input={input}
                onChange={handleChange}
                onInsert={handleInsert}
                onToggle={handleToggle}
                onRemove={handleRemove}
            />
        )
    }
}


export default connect(
    // state 비구조화 할당
    ({ todo }) => ({
        // immutable 사용시 값 조회할때는 .get() 사용
        input: todo.get('input'),
        todos: todo.get('todos'),
    }),
    (dispatch) => ({
        TodoActions: bindActionCreators(todoActions, dispatch)
    })
)(TodosContainer);