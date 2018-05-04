import React, { PureComponent } from 'react';
import styled from 'styled-components';

import type { Title } from 'types/todos';

const EditField = styled.input`
    display: block;
    width: 506px;
    padding: 13px 17px 12px 17px;
    margin: 0 0 0 43px;
`;

type Props = {
  onSave: (text: Title)=>void,
  title: Title
}

export default class TodoEditTextInput extends PureComponent<Props, {title: Title}> {
  state = {
    title: this.props.title,
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
      this.setState({ title: target.value });
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
        value={this.state.title}
        onBlur={this.handleBlur}
        onChange={this.handleChange}
        onKeyDown={this.handleSubmit}
      />
    );
  }
}

