import React, {Component} from 'react';
import Grid from "../partials/Grid";

const digital = require('../../digital.json')

class DigitalCollections extends Component {

    constructor(props) {
        super(props);
    };

    render() {

        const {collections} = this.props;

        return (
            <section className='utk-digital--collections'>
                <div className="container">
                    <h2>Browse Collections</h2>
                    <Grid collections={collections} />
                </div>
            </section>
        );
    }
}

export default DigitalCollections;
