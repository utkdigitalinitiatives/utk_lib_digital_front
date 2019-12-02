import React, {Component} from 'react';

import DigitalHeader from "./components/sections/DigitalHeader";
import DigitalCollections from "./components/sections/DigitalCollections";
import filter from "lodash/filter";
import remove from "lodash/remove";
import indexOf from "lodash/indexOf";

const digital = require('./digital.json');

class Digital extends Component {

    constructor(props) {
        super(props);

        this.state = {
            collections : 'load',
            dataLoad : '',
            featured : null
        };
    };

    getRandomCollection = (data, filterBy) => {
        let item = null

        if (this.state.featured) {
            item = this.state.featured
        } else {
            let featured = filter(data, filterBy)
            item = featured[Math.floor(Math.random()*featured.length)]

            this.setState({
                featured : item
            })
        }

        return item
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

                remove(data.collections, function(collection) {
                    if (indexOf(digital.exclude, collection.PID) !== -1)
                        return collection
                });

                this.setState({
                    collections : data.collections
                });

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
                    <DigitalHeader featured={this.getRandomCollection(data, digital.featuredFilter)} />
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
