import React, {Component} from 'react';
import Data from "./components/Data";

class Digital extends Component {

    constructor(props) {
        super(props);

        this.state = {
            collections : 'load'
        };
    };

    componentDidMount() {
        this.setState({
            collections : Data()
        })
    }

    render() {

        return (
            <React.Fragment>
                testing...
            </React.Fragment>
        );
    }
}

export default Digital;
