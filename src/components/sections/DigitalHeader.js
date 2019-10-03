import React, {Component} from 'react';
import Splash from "../partials/Splash";

class DigitalHeader extends Component {

    constructor(props) {
        super(props);
    };

    render() {

        const {featured} = this.props

        return (
            <section className='utk-digital--header'>
                <Splash collection={featured} />
            </section>
        );
    }
}

export default DigitalHeader;
