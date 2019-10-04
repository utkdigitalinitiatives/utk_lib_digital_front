import React, {Component} from 'react';
import ImageIIIF from "./ImageIIIF";

class Collection extends Component {

    constructor(props) {
        super(props);
    };

    render() {

        const {data} = this.props

        return (
            <div className="utk-digital--collection">
                <ImageIIIF data={data}
                           width={322} />
                <h3>{data.fgs_label_s}</h3>
            </div>
        );
    }
}

export default Collection;
