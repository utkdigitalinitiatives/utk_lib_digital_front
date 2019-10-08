import React, {Component} from 'react';
import ImageIIIF from "./ImageIIIF";
import Toggle from './Toggle';

import FlipMove from 'react-flip-move';
import {forceCheck} from 'react-lazyload';
import orderBy from 'lodash/orderBy';
import shuffle from 'lodash/shuffle';
import throttle from 'lodash/throttle';

class Collection extends Component {

    render() {

        const {data, index, view} = this.props

        const viewClass = `utk-digital--collection ${view}`;
        const style = { zIndex: 100 - index }

        return (
            <div className={viewClass}
                 style={style}>
                <ImageIIIF parentKey={index}
                           data={data}
                           width={322}/>
                <h3>{data.fgs_label_s}</h3>
                <p>{data.mods_abstract_s}</p>
            </div>
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
            enterLeaveAnimation: 'elevator',
            collections: this.props.collections,
            removedcollections: [],
        };

        this.toggleList = this.toggleList.bind(this);
        this.toggleGrid = this.toggleGrid.bind(this);
        this.sortAlpha = this.sortAlpha.bind(this);
        this.sortGroups = this.sortGroups.bind(this);
        this.sortShuffle = this.sortShuffle.bind(this);
    };

    moveCollections(source, dest, pid) {
        const sourceCollections= this.state[source].slice();
        let destCollections = this.state[dest].slice();

        if ( !sourceCollections.length ) return;

        // Find the index of the collection clicked.
        // If no pid is provided, the index is 0
        const i = pid ? sourceCollections.findIndex(item => item.PID === pid) : 0;

        // If the collection is already removed, do nothing.
        if ( i === -1 ) return;

        destCollections = [].concat( sourceCollections.splice(i, 1), destCollections );

        this.setState({
            [source]: sourceCollections,
            [dest]: destCollections,
        });
    }

    toggleList() {
        this.setState({
            view: 'list',
            enterLeaveAnimation: 'elevator'
        });
    }

    toggleGrid() {
        this.setState({
            view: 'grid',
            enterLeaveAnimation: 'elevator'
        });
    }

    sortAlpha() {
        this.setState({
            collections: orderBy(this.state.collections, 'fgs_label_s', this.state.order),
            order: (this.state.order === 'asc' ? 'desc' : 'asc'),
            sortingMethod: 'alphabetically'
        });
    }

    sortGroups() {
        this.setState({
            sortingMethod: 'groups',
            collections: shuffle(this.state.collections)
        });
    }

    sortShuffle() {
        this.setState({
            sortingMethod: 'shuffle',
            collections: shuffle(this.state.collections)
        });
    }

    getCollections = (items) => {
        return items.map((item, index) => {
            return <Collection key={item.PID}
                               index={index}
                               view={this.state.view}
                               data={item}
                               clickHandler={throttle(() => this.moveCollections('collections', 'removedcollections', item.PID), 290)}
                               {...item} />
        });
    };

    render() {

        return (
            <React.Fragment>
                <header>
                    <div className="abs-left">
                        <Toggle
                            clickHandler={this.toggleList}
                            text="List"
                            active={this.state.view === 'list'}
                        />
                        <Toggle
                            clickHandler={this.toggleGrid}
                            text="Grid"
                            active={this.state.view === 'grid'}
                        />
                    </div>
                    <div className="abs-right">
                        <Toggle
                            clickHandler={this.sortAlpha}
                            text={this.state.order === 'asc' ? 'A-Z' : 'Z-A'}
                            icon={this.state.order === 'asc' ? 'angle-up' : 'angle-down'}
                            active={this.state.sortingMethod === 'alphabetically'}
                        />
                        <Toggle
                            clickHandler={this.sortGroups}
                            text="Group By Collection"
                            icon="shuffle"
                            active={this.state.sortingMethod === 'groups'}
                        />
                        <Toggle
                            clickHandler={this.sortShuffle}
                            text="Randomize"
                            icon="shuffle"
                            active={this.state.sortingMethod === 'random'}
                        />
                        <Toggle
                            clickHandler={() => (
                                this.moveCollections('collections', 'removedcollections')
                            )}
                            text="Remove Item"
                            icon="close"
                            active={this.state.collections.length > 0}
                        />
                    </div>
                </header>
                <FlipMove className="utk-digital--grid"
                          staggerDurationBy="30"
                          duration={500}
                          enterAnimation={this.state.enterLeaveAnimation}
                          leaveAnimation={this.state.enterLeaveAnimation}>
                    {this.getCollections(this.state.collections)}
                </FlipMove>
            </React.Fragment>
        );
    }
}

export default Grid;
