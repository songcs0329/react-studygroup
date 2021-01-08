import React, { useState } from 'react';
import { MdAdd } from 'react-icons/md';
import styled, { css } from 'styled-components';
import { useTodoDispatch, useTodoNextId } from '../TodoContext';

const CircleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
  width: 80px;
  height: 80px;
  position: absolute;
  left: 50%;
  bottom: 0px;
  font-size: 60px;
  transform: translate(-50%, 50%);
  color: #fff;
  background: #38d9a9;
  border-radius: 50%;
  transition: 0.125s all ease-in;
  outline: none;
  border: none;
  cursor: pointer;
  &:hover {
    background: #63e6be;
  }
  &:active {
    background: #20c997;
  }
  ${props =>
    props.open &&
    css`
      background: #ff6b6b;
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
      transform: translate(-50%, 50%) rotate(45deg);
    `}
`;

const InsertFormPositioner = styled.div`
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
`;

const InsertForm = styled.form`
  padding: 32px 32px 72px;
  background: #f8f9fa;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;

const TodoCreate = () => {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('')

  const dispatch = useTodoDispatch()
  const nextId = useTodoNextId()

  const onToggle = () => setOpen(!open)
  const onChange = e => setValue(e.target.value)
  const onSubmit = e => {
    e.preventDefault()
    const todo = {
      id: nextId.current,
      text: value,
      done: false
    }
    dispatch({
      type: "CREATE",
      todo
    })
    setValue('')
    setOpen(false)
    nextId.current += 1
  }

  return (
    <>
      {open && (
        <InsertFormPositioner>
          <InsertForm onSubmit={onSubmit}>
            <Input
            autoFocus
            placeholder={"할일 입력 후, Enter를 누르세요"}
            onChange={onChange}
            value={value}
            />
          </InsertForm>
        </InsertFormPositioner>
      )}
      <CircleButton onClick={onToggle} open={open}>
        <MdAdd/>
      </CircleButton>
    </>
  );
};

export default React.memo(TodoCreate);