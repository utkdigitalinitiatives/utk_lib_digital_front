import React from 'react';
import remove from "lodash/remove"

const digital = require('../digital.json');

const getRandomCollection = (data, filter) => {

    let featured = remove(data, filter)

    return featured[Math.floor(Math.random()*featured.length)]
};

export default getRandomCollection;
