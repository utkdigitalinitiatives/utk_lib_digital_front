import React, {Component} from 'react';

import getRandomCollection from "./components/Utilties";
import DigitalHeader from "./components/sections/DigitalHeader";
import DigitalCollections from "./components/sections/DigitalCollections";

const digital = require('./digital.json');

class Digital extends Component {

    constructor(props) {
        super(props);

        this.state = {
            collections : 'load',
            dataLoad : ''
        };
    };

    componentDidMount() {
        fetch(digital.endpoint, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                this.setState({
                    collections : data.collections
                })

                setTimeout(() => {
                    this.setState({
                        dataLoad : true
                    })
                }, 470)
            })
            .catch(err => console.error(err.toString()));
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.state.dataLoad === true)
            setTimeout(() => {
                const load = document.querySelector('.utk-loading');
                load.parentNode.removeChild(load);
            }, 760)
    }

    loadContent = (data) => {
        if (data !== 'load')
            return (
                <React.Fragment>
                    <DigitalHeader featured={getRandomCollection(data, digital.featuredFilter)} />
                    <DigitalCollections collections={data} />
                </React.Fragment>
            )
    }

    render() {

        let collections = this.state.collections;

        return (
            <React.Fragment>
                {this.loadContent(collections)}
                <div className={`utk-loading${this.state.dataLoad && ' utk-loading--loaded'}`}>
                    <div className="utk-loading--spinner"></div>
                </div>
            </React.Fragment>
        )
    }
}

export default Digital;
