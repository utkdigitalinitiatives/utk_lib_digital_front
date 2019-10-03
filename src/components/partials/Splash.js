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
                <ImageIIIF pid={collection.PID}
                           width={1000}
                           type="collection" />
            </div>
        );
    }
}

export default Splash;
