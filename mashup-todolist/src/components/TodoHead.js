import React from 'react';
import styled from 'styled-components'
import { useTodoState } from '../TodoContext';

const TodoHeadBlock = styled.div`
  padding: 48px 32px 24px;
  border-bottom: 1px solid #e9ecef;
  h1 {
    font-size: 36px;
    color: #343a40;
  }
  .day {
    margin: 4px 0 40px;
    font-size: 21px;
    color: #868e96;
  }
  .tasks-left {
    font-weight: bold;
    font-size: 18px;
    color: #20c997;
  }
`

const TodoHead = () => {
  const todos = useTodoState();
  const undoneTasks = todos.filter(todo => !todo.done);
  const today = new Date();
  const dateString = today.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  const dayName = today.toLocaleDateString('ko-KR', { weekday: 'long' });
  
  return (
    <TodoHeadBlock>
      <h1>{dateString}</h1>
      <div className="day">{dayName}</div>
      <div className="tasks-left">할일 {undoneTasks.length}개 남음</div>
    </TodoHeadBlock>
  );
};

export default TodoHead;