import React from 'react';
import ReactDOM from 'react-dom';

import Digital from './Digital';

import './scss/styles.scss';

if (document.getElementById('utk-lib-header')) {
    ReactDOM.render(<Digital />, document.getElementById('utk-lib-header'));
}
