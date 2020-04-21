import React, {Component} from 'react';
import LazyLoad, {forceCheck} from 'react-lazyload';
import placeholder from '../../media/placeholder.png';

const iiif = 'https://digital.lib.utk.edu/iiif/2/collections~islandora~object~';

class Source extends Component {
    constructor(props) {
        super(props);

        this.state = {
            didMount : ''
        };
    };

    componentDidMount(){
        setTimeout(() => {
            this.setState({didMount: true})
        }, 470)
    }

    render() {
        return (
            <figure className={`image-fade-in${this.state.didMount && ' image-visible'}`}>
                <img src={this.props.src} />
            </figure>
        )
    }
}

class ImageIIIF extends Component {

    constructor(props) {
        super(props);

        this.state = {
            source : null,
            preload : null,
            available : null
        };
    };

    componentWillUpdate(nextProps, nextState, nextContext) {
        forceCheck()
    }

    getFeaturedImage = (data) => {
        if (typeof data.utk_fedora_datastream_version_FEATURED_SIZE_ms !== "undefined")
            return true
    }

    componentDidMount() {

        const {data, width} = this.props;

        if (this.getFeaturedImage(data)) {

            const preload = iiif + data.PID +'~datastream~FEATURED~view/full/18,/0/default.jpg';
            const source = iiif + data.PID +'~datastream~FEATURED~view/full/' + width + ',/0/default.jpg';

            this.setState({
                source : source,
                preload : preload,
                available : true
            });
        }
    }

    render() {

        const {available, source, preload} = this.state;

        if (available === true)
            return (
                <div className="utk-digital--image">
                    <LazyLoad once={true}
                              resize={true}
                              offset={0}
                              throttle={29}>
                        <Source src={source} />
                    </LazyLoad>
                    <span className="utk-digital--image--preload">
                        <img src={preload} />
                    </span>
                </div>
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
