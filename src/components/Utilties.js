import React from 'react';
import filter from "lodash/filter"

const digital = require('../digital.json');

const getRandomCollection = (data, filterBy) => {

    let featured = filter(data, filterBy)

    return featured[Math.floor(Math.random()*featured.length)]
};

export default getRandomCollection;
