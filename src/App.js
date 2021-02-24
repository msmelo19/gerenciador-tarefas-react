import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';

import Header from './components/Header';
import GlobalStyle from './style/globalStyle';
import Routes from './routes';
import store, { persistor } from './store';

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Router>
            <GlobalStyle />
            <Header />
            <Routes />
            <ToastContainer className="toast-container" autoClose={5000} />
          </Router>
        </PersistGate>
      </Provider>
    );
  }
}
