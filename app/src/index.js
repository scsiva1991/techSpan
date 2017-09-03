'use strict'

import 'babel-polyfill';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import configureStore from './store/configureStore';
import routes from './routes/routes';
import { render } from 'react-dom';
import React from 'react'; 

import '../libs/font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../libs/custom.css';

const store = configureStore();

render(
  <Provider store={store}>
    { routes }
  </Provider>,
  document.getElementById('root')
)
