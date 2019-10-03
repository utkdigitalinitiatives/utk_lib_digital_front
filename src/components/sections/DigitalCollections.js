import React, {Component} from 'react';
import Grid from "../partials/Grid";

class DigitalCollections extends Component {

    constructor(props) {
        super(props);
    };

    render() {

        return (
            <section>
                <Grid collections={this.props.collections} />
            </section>
        );
    }
}

export default DigitalCollections;
