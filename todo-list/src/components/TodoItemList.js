import React, { Component } from 'react'
import TodoItem from './TodoItem';

class TodoItemList extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        // console.log('this.props.todos', this.props.todos);
        // console.log('nextProps.todos', nextProps.todos);
        return this.props.todos !== nextProps.todos;
    }
    
    render() {
        const { todos, onToggle, onRemove } = this.props;
        const todoList = todos.map(
            ({id, text, checked, color}) => (
                <TodoItem
                    key={id}
                    id={id}
                    text={text}
                    // {...todo}
                    checked={checked}
                    onToggle={onToggle}
                    onRemove={onRemove}
                    color={color}
                />
            )
        )

        return (
            <div>
                {todoList}
            </div>
        )
    }
}

export default TodoItemList