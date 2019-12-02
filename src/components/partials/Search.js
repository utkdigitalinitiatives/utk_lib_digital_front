import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, Form, Select, Input, Dropdown} from 'semantic-ui-react'

const digital = require('../../digital.json')

class Search extends Component {

    constructor(props) {
        super(props);

        this.state = {
            search: '',
            type: 'all',
            typeLabel: 'All'
        };
    };

    updateSearch = (e, data) => {
        this.setState({
            search: data.value
        });
    };

    updateType = (e, data) => {
        this.setState({
            type: data.value,
            typeLabel: e.target.textContent
        });
    };

    togglePage = (e) => {
        if (e.type === 'click' || (e.type === 'keydown' && e.keyCode === 13)) {
            e.stopPropagation();
            this.props.activeView('about');
        }
    }

    handleOnClick () {
        return (e) => this.togglePage(e);
    }

    handleKeyDown () {
        return (e) => this.togglePage(e);
    }

    handleSubmit = (e) => {

        e.preventDefault();

        const { search, type } = this.state

        let facet = '';
        if (type !== 'all')
            facet = "=mods_typeOfResource_ms%3A%22" + type + "%22";

        let islandoraQuery = "https://digital.lib.utk.edu/collections/islandora/search/" + search + "?type=edismax&islandora_solr_search_navigation=0&f%5B0%5D" + facet;

        window.location.href = islandoraQuery;
    };

    render() {

        return (
            <div className="utk-digital--search">
                <div className="container">
                    <div className="utk-digital--search--heading">
                        <span className="utk-heading-1" role="heading" aria-level="1">Digital Collections</span>
                        <span className="utk-description" role="subheading">
                            <span>Explore Items digitized from our collections.</span>
                            <a href="#about"
                               onKeyDown={this.handleKeyDown()}
                               onClick={this.handleOnClick()}>Learn More</a>
                        </span>
                    </div>
                    <div className="utk-digital--search--base">
                        <Form method="post"
                              className="utk-digital--search--base--form"
                              onSubmit={this.handleSubmit}>
                            <Input type='text'
                                   name="digital-search"
                                   value={this.state.search}
                                   placeholder="Search UT Digital Collections"
                                   onChange={this.updateSearch}
                                   action>
                                <span className="utk-search--icon">
                                    <span className="icon-search"></span>
                                </span>
                                <input/>
                                <Select icon
                                        compact
                                        text={this.state.typeLabel}
                                        value={this.state.type}
                                        name="digital-resource"
                                        options={digital.searchOptions}
                                        className="icon-down-open"
                                        onChange={this.updateType} />
                                <Button type='submit'>Search</Button>
                            </Input>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

Search.propTypes = {
    activeView: PropTypes.func
};

export default Search;
