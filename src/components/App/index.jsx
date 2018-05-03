import React from 'react';
import styled from 'styled-components';

import Footer from 'components/Footer';
import TodoListContainer from 'containers/TodoListContainer';
import TodoForm from 'containers/TodoForm';

const Content = styled.div`
    background: #fff;
    margin: 130px 0 40px 0;
    position: relative;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
`;

const App = () => (
  <Content>
    <TodoForm />
    <TodoListContainer />
    <Footer />
  </Content>
);

export default App;
