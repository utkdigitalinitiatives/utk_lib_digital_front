import React, {Component} from 'react';
import Data from "./components/Data";
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
        this.setState({
            collections : Data(digital)
        })
    }

    render() {

        let collections = this.state.collections;

        return (
            <React.Fragment>
                <DigitalHeader collections={getRandomCollection(collections, digital.featuredFilter)} />
                <DigitalCollections collections={collections} />
            </React.Fragment>
        );
    }
}

export default Digital;
