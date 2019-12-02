import React, {Component} from 'react';
import Search from "../partials/Search";
import Splash from "../partials/Splash";
import About from "../partials/About";

class DigitalHeader extends Component {

    constructor(props) {
        super(props);

        this.state = {
            view : 'search'
        };

        this.activeView = this.activeView.bind(this);
    };

    activeView(activeView) {
        this.setState({
            view: activeView
        });
    }

    render() {

        const {featured} = this.props

        return (
            <section className={`utk-digital--header utk-digital--header--view-${this.state.view}`}>
                <Search activeView={this.activeView} view={this.state.view} />
                <About activeView={this.activeView} view={this.state.view} />
                <Splash activeView={this.activeView} view={this.state.view} collection={featured} />
            </section>
        );
    }
}

export default DigitalHeader;
