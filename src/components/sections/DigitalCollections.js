import React, {Component} from 'react';
import Grid from "../partials/Grid";

class DigitalCollections extends Component {

    constructor(props) {
        super(props);
    };

    render() {

        return (
            <section className='utk-digital--collections'>
                <div className="container">
                    <h2>Browse Collections</h2>
                    <Grid collections={this.props.collections} />
                </div>
            </section>
        );
    }
}

export default DigitalCollections;
