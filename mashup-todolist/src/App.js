import React from 'react';
import {createGlobalStyle} from 'styled-components';
import {Reset} from 'styled-reset';
import TodoCreate from './components/TodoCreate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';
import { Todoprovider } from './TodoContext';

const GlabalStyle = createGlobalStyle`
  body {
    background: #e9ecef
  }
`

function App() {
  return (
    <Todoprovider>
      <Reset/>
      <GlabalStyle/>
      <TodoTemplate>
        <TodoHead/>
        <TodoList/>
        <TodoCreate/>
      </TodoTemplate>
    </Todoprovider>
  );
}

export default App;
