import React from 'react';
import { Router } from 'react-router-dom';

import Header from './components/Header';
import GlobalStyle from './style/globalStyle';
import Routes from './routes';
import history from './services/history';

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <GlobalStyle />
        <Header />
        <Routes />
      </Router>
    );
  }
}
