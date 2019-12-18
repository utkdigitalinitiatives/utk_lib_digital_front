import React from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';

import Digital from './Digital';

import './scss/styles.scss';

if (document.getElementById('utk-lib-digital-front')) {
    ReactDOM.render(<Digital />, document.getElementById('utk-lib-digital-front'));
}
