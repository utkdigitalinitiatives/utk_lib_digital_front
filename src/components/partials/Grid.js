import React, {Component} from 'react';
import ImageIIIF from "./ImageIIIF";
import Toggle from './Toggle';

import FlipMove from 'react-flip-move';
import orderBy from 'lodash/orderBy';
import throttle from 'lodash/throttle';

class Collection extends Component {

    render() {

        const {data, index, view} = this.props

        const pid = encodeURIComponent(data.PID);
        const url = `https://digital.lib.utk.edu/collections/islandora/object/${pid}`;
        const viewClass = `utk-digital--collection ${view}`;
        const style = { zIndex: 100 - index }

        return (
            <a className={viewClass}
               style={style}
               href={url}>
                <ImageIIIF parentKey={index}
                           data={data}
                           width={322}/>
                <div className="utk-digital--collection--content">
                    <h3>{data.fgs_label_s}</h3>
                    <p>{data.mods_abstract_s}</p>
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
            removedcollections: []
        };

        this.toggleList = this.toggleList.bind(this);
        this.toggleGrid = this.toggleGrid.bind(this);
        this.sortAlpha = this.sortAlpha.bind(this);
        this.sortGroups = this.sortGroups.bind(this);
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
            console.log(item)
            if (item.hasOwnProperty('ancestors_ms')) {
                if (item.ancestors_ms.includes(group))
                    groupsArr.push(item)
            }
        })

        return groupsArr
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
                <header>
                    <div className="abs-left">
                        <Toggle
                            clickHandler={this.toggleGrid}
                            text="Grid"
                            icon="th-1"
                            active={this.state.view === 'grid'}
                        />
                        <Toggle
                            clickHandler={this.toggleList}
                            text="List"
                            icon="th-list-1"
                            active={this.state.view === 'list'}
                        />
                    </div>
                    <div className="abs-right">
                        <Toggle
                            clickHandler={this.sortAlpha}
                            text={this.state.order === 'asc' ? 'A-Z' : 'Z-A'}
                            icon={this.state.order === 'asc' ? 'up-circled2' : 'down-circled2'}
                            active={this.state.sortingMethod === 'alphabetically'}
                        />
                        <Toggle
                            clickHandler={this.sortGroups}
                            text="Group By Collection"
                            icon="box"
                            active={this.state.sortingMethod === 'groups'}
                        />
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
