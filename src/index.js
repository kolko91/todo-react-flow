import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import App from './components/App';
import './index.css';

const element = document.getElementById('root');
if (!element) {
  throw new Error("couldn't find element with id root");
}
render(
  <Provider store={store}>
    <App />
  </Provider>,
  element,
);
