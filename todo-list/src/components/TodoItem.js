import React, { Component } from 'react'
import './TodoItem.css'

class TodoItem extends Component {
    render() {
        const { text, checked, id, onToggle, onRemove, color } = this.props;
        // console.log(id);

        return (
            <div className="todo-item" onClick={() => onToggle(id)}>
                <div className="remove"
                    onClick={(e) => {
                        e.stopPropagation(); // onToggle 실행 막기
                        onRemove(id)}
                    }>&times;</div>
                <div style={{ color }} className={`todo-text ${checked && 'checked'}`}>
                    <div>{text}</div>
                </div>
                {
                    checked && (<div className="check-mark">✓</div>)
                }
            </div>
        )
    }
}

export default TodoItem