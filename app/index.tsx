import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'mobx-react';

import createStores from '../app/stores/createStore';

import App from './App';

// prepare MobX stores
const rootStore = createStores();

render(
  <Provider {...rootStore}>
    <App />
  </Provider>,
  document.querySelector('main#app')
);
