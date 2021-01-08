import React, { Component } from 'react'
import TodoListTemplate from './components/TodoListTemplate'
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';
import Palette from './components/Palette';

const colors = ['#343a40', '#f03e3e', '#12b886', '#228ae6'];

class App extends Component {
  
  id = 3 // 0,1,2 dummy

  state = {
    input: '',
    todos: [
      { id: 0, text: 'hello', checked: false },
      { id: 1, text: 'react', checked: true },
      { id: 2, text: 'world', checked: false }
    ],
    color: '#343a40'
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    })
  }
  handleCreate = () => {
    const { input, todos, color } = this.state;
    this.setState({
      input: '', // input 비우기
      // concat으로 배열에 추가 (블변성때문에 concat 사용)
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false,
        color
      })
    })
  }
  handleKeyPress = (e) => {
    if(e.key === 'Enter') {
      this.handleCreate();
    }
  }
  handleToggle = (id) => {
    const { todos } = this.state;

    // 파라미터 id로 아이템 index 찾기
    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index]; // 선택한 객체

    // const nextTodos = [...todos]; // 배열 복사(불변성때문)

    // // 기존의 값들 복사 후 check값 덮어쓰기
    // nextTodos[index] = {
    //   ...selected,
    //   checked: !selected.checked
    // };

    // this.setState({
    //   todos: nextTodos
    // });

    this.setState({
      todos: [
        ...todos.slice(0, index), {
          ...selected,
          checked: !selected.checked
        },
        ...todos.slice(index + 1, todos.length)
      ]
    })
  }
  handleRemove = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
  }
  handleSelectColor = (color) => {
    this.setState({
      color
    })
  }

  render() {
    const { input, todos, color } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove,
      handleSelectColor
    } = this;
    return (
      <TodoListTemplate
        form={
          <Form
            value={input}
            onChange={handleChange}
            onCreate={handleCreate}
            onKeyPress={handleKeyPress}
            color={color}
          />
        }
        palette={
          <Palette
            colors={colors}
            selected={color}
            onSelect={handleSelectColor}
          />
        }
      >
      <TodoItemList
        todos={todos}
        onToggle={handleToggle}
        onRemove={handleRemove}
      />
      </TodoListTemplate>
    )
  }
}

export default App;