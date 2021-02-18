import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import Header from './components/Header';
import GlobalStyle from './style/globalStyle';
import Routes from './routes';
import store from './store';

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <GlobalStyle />
          <Header />
          <Routes />
        </Router>
      </Provider>
    );
  }
}
