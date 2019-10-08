import React, {Component} from 'react';
import ImageIIIF from "./ImageIIIF";

import FlipMove from 'react-flip-move';
import shuffle from 'lodash/shuffle';
import throttle from 'lodash/throttle';

class Collection extends Component {

    render() {

        const {data, index} = this.props
        const style = { zIndex: 100 - index }

        return (
            <div className="utk-digital--collection"
                 style={style}>
                <ImageIIIF data={data}
                           width={322}/>
                <h3>{data.fgs_label_s}</h3>
            </div>
        );
    }
}

class Grid extends Component {

    constructor(props) {
        super(props);

        this.state = {
            sortingMethod: 'chronological',
            enterLeaveAnimation: 'accordionVertical',
            collections: this.props.collections,
            removedcollections: [],
        };

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
                        {/*<Toggle*/}
                            {/*clickHandler={this.toggleList}*/}
                            {/*text="List" icon="list"*/}
                            {/*active={this.state.view === 'list'}*/}
                        {/*/>*/}
                        {/*<Toggle*/}
                            {/*clickHandler={this.toggleGrid}*/}
                            {/*text="Grid" icon="th"*/}
                            {/*active={this.state.view === 'grid'}*/}
                        {/*/>*/}
                    </div>
                    <div className="abs-right">
                        <button onClick={this.sortShuffle}
                        >shuffle</button>
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
