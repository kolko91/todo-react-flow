import React, { Component } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  position: relative;
  z-index: 1;
  background: #FFFFFF;
  max-width: 360px;
  margin: 0 auto 100px;
  padding: 45px;
  text-align: center;
`;
const FormInput = styled.input`
  font-family: "Roboto", sans-serif;
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
`;

const FormButton = styled.button`
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  outline: 0;
  background: #EAD7D7;
  width: 100%;
  border: 0;
  padding: 15px;
  color: #FFFFFF;
  font-size: 14px;
  cursor: pointer;
`;

const ErrorText = styled.button`
  text-align: center;
  color: red;
`;

type Props = {
  onSubmit: (username: string, pass: string) => void,
  error: boolean
};

type State = {
  username: string,
  pass: string,
}

class App extends Component<Props, State> {
  state = {
    username: 'james',
    pass: 'password',
  }
  handleUsernameChange = (event: SyntheticKeyboardEvent<HTMLInputElement>) => {
    this.setState({ username: event.currentTarget.value });
  }

  handlePassChange = (event: SyntheticKeyboardEvent<HTMLInputElement>) => {
    this.setState({ pass: event.currentTarget.value });
  }

  handleSubmit = (event: Event) => {
    event.preventDefault();
    const { username, pass } = this.state;
    if (!username.trim() || !pass.trim()) {
      return;
    }
    this.props.onSubmit(username, pass);
  }

  render() {
    const { error } = this.props;
    return (
      <FormContainer>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            placeholder="username"
            value={this.state.username}
            onChange={this.handleUsernameChange}
          />
          <FormInput
            type="password"
            placeholder="password"
            value={this.state.pass}
            onChange={this.handlePassChange}
          />
          {error && <ErrorText>Wrong password please try again</ErrorText>}
          <FormButton>login</FormButton>
        </form>
      </FormContainer>
    );
  }
}

export default App;
