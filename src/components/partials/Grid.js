import React, {Component} from 'react';
import ImageIIIF from "./ImageIIIF";
import Toggle from './Toggle';

import FlipMove from 'react-flip-move';
import orderBy from 'lodash/orderBy';
import throttle from 'lodash/throttle';
import {Dropdown} from "semantic-ui-react";

const digital = require('../../digital.json')

class Collection extends Component {

    render() {

        const {data, index, view} = this.props

        const pid = encodeURIComponent(data.PID);
        const url = `https://digital.lib.utk.edu/collections/islandora/object/${pid}`;
        const viewClass = `utk-digital--collection ${view}`;
        const style = {zIndex: 100 - index}

        let description = ''

        // if (data.utk_mods_abstract_ms[0]) {
        //     description = data.utk_mods_abstract_ms[0]
        // }


        return (
            <a className={viewClass}
               style={style}
               href={url}>
                <ImageIIIF parentKey={index}
                           data={data}
                           width={322}/>
                <div className="utk-digital--collection--content">
                    <h3>{data.fgs_label_s}</h3>
                    <p>{description}</p>
                    <span className="btn btn-primary btn-outline btn-sm">View Collection</span>
                </div>
            </a>
        );
    }
}

class Grid extends Component {

    constructor(props) {
        super(props);

        this.state = {
            view: 'list',
            order: 'asc',
            enterLeaveAnimation: 'fade',
            collections: this.props.collections,
            group: 'digital:collections',
            groupLabel: 'All Collections',
            removedcollections: [],
            filterString: ''
        };

        this.toggleList = this.toggleList.bind(this);
        this.toggleGrid = this.toggleGrid.bind(this);
        this.sortAlpha = this.sortAlpha.bind(this);
        this.sortGroups = this.sortGroups.bind(this);
    };

    moveCollections(source, dest, pid) {
        const sourceCollections = this.state[source].slice();
        let destCollections = this.state[dest].slice();

        if (!sourceCollections.length) return;

        // Find the index of the collection clicked.
        // If no pid is provided, the index is 0
        const i = pid ? sourceCollections.findIndex(item => item.PID === pid) : 0;

        // If the collection is already removed, do nothing.
        if (i === -1) return;

        destCollections = [].concat(sourceCollections.splice(i, 1), destCollections);

        this.setState({
            [source]: sourceCollections,
            [dest]: destCollections,
        });
    }

    toggleList() {
        this.setState({
            view: 'list',
        });
    }

    toggleGrid() {
        this.setState({
            view: 'grid',
        });
    }

    sortAlpha() {
        let order = (this.state.order === 'asc' ? 'desc' : 'asc')

        this.setState({
            collections: orderBy(this.state.collections, 'fgs_label_s', order),
            order: order
        });
    }

    sortGroups() {
        this.setState({
            collections: this.props.collections
        });
    }

    setGroups = (collections) => {
        let groupsArr = []
        let group = this.state.group

        collections.map(function (item) {
            if (item.hasOwnProperty('ancestors_ms')) {
                if (item.ancestors_ms.includes(group))
                    groupsArr.push(item)
            }
        })

        return groupsArr
    }

    updateGroups = (e, data) => {
        this.setState({
            group: data.value,
            groupLabel: e.target.textContent
        });

        this.sortGroups()
    }

    getCollections = () => {
        let items = this.setGroups(this.state.collections);

        return items.map((item, index) => {
            return <Collection key={item.PID}
                               index={index}
                               view={this.state.view}
                               data={item}
                               clickHandler={throttle(() => this.moveCollections('collections', 'removedcollections', item.PID), 470)}
                               {...item} />
        });
    };

    render() {

        return (
            <React.Fragment>
                <header>
                    <div className="utk-digital--collections--view">
                        <Toggle
                            clickHandler={this.toggleList}
                            text="List"
                            icon="th-list"
                            active={this.state.view === 'list'}
                        />
                        <Toggle
                            clickHandler={this.toggleGrid}
                            text="Grid"
                            icon="th"
                            active={this.state.view === 'grid'}
                        />
                    </div>
                    <div className="utk-digital--collections--toggles">
                        <Toggle
                            clickHandler={this.sortAlpha}
                            text={this.state.order === 'asc' ? 'A-Z' : 'Z-A'}
                            icon={this.state.order === 'asc' ? 'up-dir' : 'down-dir'}
                        />
                        <Toggle
                            clickHandler={this.sortGroups}
                            text="Group"
                            icon="box"
                        />
                        <Dropdown icon
                                  className="icon-down-open"
                                  text={this.state.groupLabel}
                                  value={this.state.group}
                                  name="group"
                                  options={digital.groups}
                                  onChange={this.updateGroups} />
                    </div>
                </header>
                <FlipMove className="utk-digital--grid"
                          duration={760}
                          easing="cubic-bezier(.93,.3,.6,.95)"
                          enterAnimation={this.state.enterLeaveAnimation}
                          leaveAnimation={this.state.enterLeaveAnimation}>
                    {this.getCollections()}
                </FlipMove>
            </React.Fragment>
        );
    }
}

export default Grid;
