import React, {Component} from 'react';

import getRandomCollection from "./components/Utilties";
import DigitalHeader from "./components/sections/DigitalHeader";
import DigitalCollections from "./components/sections/DigitalCollections";

const digital = require('./digital.json');

class Digital extends Component {

    constructor(props) {
        super(props);

        this.state = {
            collections : 'load'
        };
    };

    componentDidMount() {

        fetch(digital.endpoint, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                this.setState({
                    collections : data.collections
                })
            })
            .catch(err => console.error(err.toString()));

    }

    render() {

        let collections = this.state.collections;

        if (collections === 'load') {
            return 'Loading'
        } else if (collections === null) {
            return 'Critical Error'
        } else {
            return (
                <React.Fragment>
                    <DigitalHeader featured={getRandomCollection(collections, digital.featuredFilter)} />
                    <DigitalCollections collections={collections} />
                </React.Fragment>
            );
        }
    }
}

export default Digital;
