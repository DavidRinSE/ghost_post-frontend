import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux"
import { ConnectedRouter } from "connected-react-router"
import './index.css';
import App from './App';

import configureStore, { history } from './redux/configureStore'
const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
