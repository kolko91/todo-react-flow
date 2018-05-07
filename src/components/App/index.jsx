import React from 'react';

import Footer from 'components/Footer';
import TodoListContainer from 'containers/TodoListContainer';
import TodoForm from 'containers/TodoForm';
import AccessCheck from 'containers/AccessCheck';

const App = () => (
  <AccessCheck>
    <TodoForm />
    <TodoListContainer />
    <Footer />
  </AccessCheck>
);

export default App;
