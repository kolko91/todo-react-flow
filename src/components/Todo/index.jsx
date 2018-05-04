import React from 'react';
import styled from 'styled-components';

import type { Text } from 'types/todos';
import toogleImage from './toogle.svg';
import toogleCheckImage from './toogle-check.svg';

export type Props = {
  onClick: () => void,
  completed: boolean,
  text: Text
};

const Toggle = styled.input`
    text-align: center;
    height: 40px;
    width: 40px;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
    border: none;
    appearance: none;
    background: none;
    &:after {
    content: url(${toogleImage});
    }
    &:checked:after {
    content: url(${toogleCheckImage});
    }
    &:focus{
        outline:0;
    }
`;

const Label = styled.label`
    white-space: pre-line;
    word-break: break-all;
    padding: 15px 60px 15px 15px;
    margin-left: 45px;
    display: block;
    line-height: 1.2;
    transition: color 0.4s;
`;

const DestroyButton = styled.button`
    display: none;
    position: absolute;
    top: 0;
    right: 10px;
    bottom: 0;
    width: 40px;
    height: 40px;
    margin: auto 0;
    font-size: 30px;
    color: #cc9a9a;
    margin-bottom: 11px;
    transition: color 0.2s ease-out;
    &:after{
      content: '×';
    }
`;

const Item = styled.li`
    background: ${({ completed }: Props) => (completed ? '#f1f1f1' : '#fff')};
    text-decoration: ${({ completed }: Props) => (completed ? 'line-through' : 'none')};
    position: relative;
    font-size: 24px;
    border-bottom: 1px solid #ededed;
    &:hover ${DestroyButton}{
      display: block;
      color: #af5b5e;
    }
`;

const EditField = styled.input`
    display: block;
    width: 506px;
    padding: 13px 17px 12px 17px;
    margin: 0 0 0 43px;
`;


const Todo = ({ onClick, completed, text }: Props) => (
  <Item
    completed={completed}
  >
    <div>
      <Toggle
        checked={completed}
        onChange={onClick}
        type="checkbox"
      />
      <Label>{text}</Label>
      <DestroyButton />
    </div>
    {/* <EditField value={text} /> */}

  </Item>
);

export default Todo;
