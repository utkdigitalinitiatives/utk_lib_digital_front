import React from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';
import "babel-polyfill"

import Digital from './Digital';
import Header from './Header';
import Footer from './Footer';

import './scss/styles.scss';

ReactDOM.render(
  <Header />,
  document.getElementById('utk-lib-header')
);


if (document.getElementById('utk-lib-digital-front')) {
    ReactDOM.render(<Digital />, document.getElementById('utk-lib-digital-front'));
}

ReactDOM.render(
  <Footer />,
  document.getElementById('utk-lib-footer')
);
