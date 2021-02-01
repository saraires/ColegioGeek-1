import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./Css/styles.css"
//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//JQuery
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import SignIn from "./Pages/SignIn"

ReactDOM.render(
  <React.StrictMode>
    <SignIn />
  </React.StrictMode>,
  document.getElementById('root')
);

