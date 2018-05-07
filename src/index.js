import axios from 'axios';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { TOKEN_CLEAR } from 'actions/token';
import styled from 'styled-components';
import { PersistGate } from 'redux-persist/integration/react';

import store from './store';
import App from './components/App';
import './index.css';

// axios.defaults.baseURL = 'api/';
axios.defaults.baseURL = 'http://localhost:9000/api';

declare type Response = {
  ok: boolean,
  json: ()=> any,
}

axios.interceptors.response.use(response => response, (error: any) => {
  // Do something with response error

  if (error.response.status === 403) {
    store.store.dispatch({ type: TOKEN_CLEAR });
  }
  // Trow errr again (may be need for some other catch)
  return Promise.reject(error);
});

const element = document.getElementById('root');
if (!element) {
  throw new Error("couldn't find element with id root");
}
const Content = styled.div`
    background: #fff;
    margin: 130px 0 40px 0;
    position: relative;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
`;

render(
  <Provider store={store.store}>
    <PersistGate loading={null} persistor={store.persistor} >
      <Content>
        <App />
      </Content>
    </PersistGate>
  </Provider>,
  element,
);
