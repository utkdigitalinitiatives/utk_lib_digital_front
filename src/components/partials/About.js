import React, {Component} from 'react';

class About extends Component {

    constructor(props) {
        super(props);
    };

    togglePage = (e) => {
        if (e.type === 'click' || (e.type === 'keydown' && e.keyCode === 13)) {
            e.stopPropagation();
            this.props.activeView('search');
        }
    }

    handleOnClick() {
        return (e) => this.togglePage(e);
    }

    handleKeyDown() {
        return (e) => this.togglePage(e);
    }

    render() {

        return (
            <div className="utk-digital--search--heading">
                <span className="utk-heading-1" role="heading" aria-level="1">Digital Collections</span>
                <span className="utk-description" role="subheading">
                    <a href="#search"
                       onKeyDown={this.handleKeyDown()}
                       onClick={this.handleOnClick()}>Search our Collections</a>
                </span>
            </div>
        )
    }
}

export default About;
