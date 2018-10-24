import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import GlobalStyle from './styles/global';
import Board from './containers/Board';
import reducer from './store/reducers';

const store = createStore(reducer);

const App = () => (
  <>
    <GlobalStyle />
    <Provider store={store}>
      <Board />
    </Provider>
  </>
);

export default App;
