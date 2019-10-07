import React, {Component} from 'react';
import ImageIIIF from "./ImageIIIF";

class Splash extends Component {

    constructor(props) {
        super(props);
    };

    render() {

        const {collection} = this.props

        return (
            <div className="utk-digital--header--splash">
                <ImageIIIF data={collection}
                           width={1000} />
                <div className="utk-digital--header--splash--overlay"></div>
            </div>
        );
    }
}

export default Splash;
