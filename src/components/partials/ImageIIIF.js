import React, {Component} from 'react';

const iiif = 'http://digital.lib.utk.edu/iiif/2/collections~islandora~object~'

class ImageIIIF extends Component {

    constructor(props) {
        super(props);

        this.state = {
            available : 'load',
            source : null
        };
    };

    checkResponse = (request) => {
        fetch(request).then(response => {
            if (response.status === 200)
                this.setState({
                    available : true
                });
            else
                this.setState({
                    available : false
                });
        });

        return null
    };

    componentDidMount() {

        const {pid, width} = this.props;
        const source = iiif + pid +'~datastream~FEATURED~view/full/' + width + ',/0/default.jpg';

        this.setState({
            source : source
        });

        this.checkResponse(source)
    }

    render() {

        const {available, source} = this.state;

        if (available === true)
            return (
                <figure>
                    <img src={source} />
                </figure>
            );
        else if (available === 'load')
            return (
                <span>loading</span>
            )
        else
            return (
                <span>placeholder</span>
            )
    }
}

export default ImageIIIF;
