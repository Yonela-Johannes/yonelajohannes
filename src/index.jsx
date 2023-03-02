import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter } from "react-router-dom";
import GlobalStyles from './styles/GlobalStyle';
import App from './App';

ReactDOM.render(
  <BrowserRouter  basename={process.env.PUBLIC_URL}>
    <GlobalStyles />
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
