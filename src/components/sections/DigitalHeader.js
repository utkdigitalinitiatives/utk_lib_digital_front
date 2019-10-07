import React, {Component} from 'react';
import Search from "../partials/Search";
import Splash from "../partials/Splash";

class DigitalHeader extends Component {

    constructor(props) {
        super(props);
    };

    render() {

        const {featured} = this.props

        return (
            <section className='utk-digital--header'>
                <Search/>
                <Splash collection={featured} />
            </section>
        );
    }
}

export default DigitalHeader;
