import React, {Component} from 'react';
import ImageIIIF from "./ImageIIIF";
import Toggle from './Toggle';

import FlipMove from 'react-flip-move';
import orderBy from 'lodash/orderBy';
import throttle from 'lodash/throttle';
import {Dropdown} from "semantic-ui-react";

const digital = require('../../digital.json')

class Collection extends Component {

    trimByWord = (sentence, words) => {
        let trimmed = sentence;
        let trimmedArray = trimmed.split(" ");

        if(trimmedArray.length > words){
            trimmedArray = trimmedArray.slice(0, words);
            trimmed = trimmedArray.join(" ") + "... ";
            return <React.Fragment>{trimmed}{this.readMore(sentence)}</React.Fragment>;
        } else {
            return <React.Fragment>{sentence}</React.Fragment>
        }
    };

    readMore = (desc) => {
        if (desc)
            return <span className="utk-digital--collection--content--more"> Read More</span>
    }

    render() {

        const {data, index, view} = this.props

        const pid = encodeURIComponent(data.PID);
        const url = `https://digital.lib.utk.edu/collections/islandora/object/${pid}`;
        const viewClass = `utk-digital--collection ${view}`;
        const style = {zIndex: 100 - index}
        let description = null

        if (data.mods_abstract_s)
            description = this.trimByWord(data.mods_abstract_s, 40);

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
            view: 'grid',
            order: 'asc',
            sortingMethod: 'alphabetically',
            enterLeaveAnimation: 'fade',
            collections: this.props.collections,
            group: 'collections:gsmrc',
            groupLabel: 'Great Smoky Mountains Regional Collection',
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
            order: order,
            sortingMethod: 'alphabetically'
        });
    }

    sortGroups() {
        this.setState({
            sortingMethod: 'groups',
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
        let items = this.state.collections;

        if (this.state.sortingMethod === 'groups')
            items = this.setGroups(this.props.collections);

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
                <header className={`utk-sort-${this.state.sortingMethod}`}>
                    <div className="utk-digital--collections--view">
                        <Toggle
                            clickHandler={this.toggleGrid}
                            text="Grid"
                            icon="th"
                            active={this.state.view === 'grid'}
                        />
                        <Toggle
                            clickHandler={this.toggleList}
                            text="List"
                            icon="th-list"
                            active={this.state.view === 'list'}
                        />
                    </div>
                    <div className="utk-digital--collections--toggles">
                        <Toggle
                            clickHandler={this.sortAlpha}
                            text={this.state.order === 'asc' ? 'A-Z' : 'Z-A'}
                            icon={this.state.order === 'asc' ? 'up-dir' : 'down-dir'}
                            active={this.state.sortingMethod === 'alphabetically'}
                        />
                        <Toggle
                            clickHandler={this.sortGroups}
                            text="Collection Groups"
                            icon="box"
                            active={this.state.sortingMethod === 'groups'}
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
