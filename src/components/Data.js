import React from 'react';

let collections = null;
const digital = require('../digital.json');

const Data = () => {

    fetch(digital.endpoint, {
        headers : {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => {
            collections = data;
        })
        .catch(err => console.error(err.toString()));

    return collections
};

export default Data;
