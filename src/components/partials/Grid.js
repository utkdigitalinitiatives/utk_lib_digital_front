import React, {Component} from 'react';
import Collection from "./Collection";

class Grid extends Component {

    constructor(props) {
        super(props);
    };

    getCollections = (items) => {
        return items.map((item, index) => {
            return <Collection key={index}
                               index={index}
                               data={item} />
        });
    };

    render() {

        return (
            <div className="utk-digital--grid">
                {this.getCollections(this.props.collections)}
            </div>
        );
    }
}

export default Grid;
