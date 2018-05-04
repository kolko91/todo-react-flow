import React, { PureComponent } from 'react';
import styled from 'styled-components';

import type { Text } from 'types/todos';

const EditField = styled.input`
    display: block;
    width: 506px;
    padding: 13px 17px 12px 17px;
    margin: 0 0 0 43px;
`;

type Props = {
  onSave: (text: Text)=>void,
  text: Text
}

export default class TodoEditTextInput extends PureComponent<Props, {text: Text}> {
  state = {
    text: this.props.text,
  }

  handleSubmit = (e: SyntheticKeyboardEvent<HTMLButtonElement>) => {
    const { target, which } = e;
    if (target instanceof HTMLInputElement) {
      const text = target.value.trim();
      if (which === 13) {
        this.props.onSave(text);
      }
    }
  }

  handleChange = (e: Event) => {
    const { target } = e;
    if (target instanceof HTMLInputElement) {
      this.setState({ text: target.value });
    }
  }

  handleBlur = (e: Event) => {
    const { target } = e;
    if (target instanceof HTMLInputElement) {
      this.props.onSave(target.value);
    }
  }


  render() {
    return (
      <EditField
        type="text"
        autoFocus="true"
        value={this.state.text}
        onBlur={this.handleBlur}
        onChange={this.handleChange}
        onKeyDown={this.handleSubmit}
      />
    );
  }
}

