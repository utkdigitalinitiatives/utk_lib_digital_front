import React from 'react';

const Data = (endpoint) => {

    let collections = null;

    fetch(endpoint, {
        headers : {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => {
            collections = data;
        })
        .catch(err => console.error(this.props.url, err.toString()));

    return collections
};

export default Data;
