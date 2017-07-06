import React from 'react';
import reactDOM from 'react-dom';
import Store from './store.js';
import App from './components/app.jsx'
import {Provider} from 'react-redux';
import store from './store.js'
reactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>
  , document.getElementById('myApp'));
