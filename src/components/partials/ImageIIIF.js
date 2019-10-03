import React, {Component} from 'react';
import LazyLoad from 'react-lazyload';
import placeholder from '../../media/placeholder.png';

const iiif = 'http://digital.lib.utk.edu/iiif/2/collections~islandora~object~';

class ImageIIIF extends Component {

    constructor(props) {
        super(props);

        this.state = {
            available : 'load',
            source : null,
            preload : null
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
        const preload = iiif + pid +'~datastream~FEATURED~view/full/18,/0/default.jpg';
        const source = iiif + pid +'~datastream~FEATURED~view/full/' + width + ',/0/default.jpg';

        this.setState({
            source : source,
            preload : preload
        });

        this.checkResponse(source)
    }

    render() {

        const {available, source, preload} = this.state;

        if (available === true)
            return (
                <div className="utk-digital--image">
                    <LazyLoad>
                        <figure>
                            <img src={source} />
                        </figure>
                        <span className="utk-digital--image--preload"
                              style={{ backgroundImage: "url("+ preload +")" }}>
                        </span>
                    </LazyLoad>
                </div>
            );
        else if (available === 'load')
            return (
                <span>loading</span>
            )
        else
            return (
                <span className="utk-digital--image-placeholder">
                    <img src={placeholder} />
                </span>
            )
    }
}

export default ImageIIIF;
