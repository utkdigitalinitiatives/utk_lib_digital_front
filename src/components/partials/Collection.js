import React, {Component} from 'react';
import ImageIIIF from "./ImageIIIF";

class Collection extends Component {

    constructor(props) {
        super(props);
    };

    render() {

        const {data} = this.props

        return (
            <div>
                <h3>{data.fgs_label_s}</h3>
                <ImageIIIF pid={data.PID}
                           width={400} />
            </div>
        );
    }
}

export default Collection;
