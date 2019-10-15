import React, {Component} from 'react';
import {Button, Form, Select, Input} from 'semantic-ui-react'

const options = [
    {key: 'all', text: 'All', value: 'all'},
    {key: 'cartographic', text: 'Cartographic', value: 'cartographic'},
    {key: 'moving image', text: 'Moving Image', value: 'moving image'},
    {key: 'notated music', text: 'Notated Music', value: 'notated music'},
    {key: 'sound recording-musical', text: 'Sound Recording (Musical)', value: 'sound recording-musical'},
    {key: 'sound recording-nonmusical', text: 'Sound Recording (Non-musical)', value: 'sound recording-nonmusical'},
    {key: 'still image', text: 'Still Image', value: 'still image'},
    {key: 'text', text: 'Text', value: 'text'},
    {key: 'three dimensional object', text: 'Three Dimensional Object', value: 'three dimensional object'},
]

class Search extends Component {

    constructor(props) {
        super(props);
    };

    render() {


        return (
            <div className="utk-digital--search">
                <div className="container">
                    <div className="utk-digital--search--heading">
                        <span className="utk-heading-1" role="heading" aria-level="1">Digital Collections</span>
                        <span className="utk-description" role="subheading">Explore Items digitized from our collections. <a
                            href="#">Learn More</a></span>
                    </div>
                    <div className="utk-digital--search--base">
                        <Form method="post" className="utk-digital--search--base--form">
                            <Input type='text'
                                   name="digital-search"
                                   placeholder="Search UT Digital Collections"
                                   action>
                                <span className="utk-search--icon">
                                    <span className="icon-search"></span>
                                </span>
                                <input/>
                                <Select icon
                                        compact
                                        text="All"
                                        name="digital-resource"
                                        options={options}
                                        className="icon-down-open" />
                                <Button type='submit'>Search</Button>
                            </Input>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;
