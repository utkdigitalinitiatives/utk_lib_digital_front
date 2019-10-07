import React, {Component} from 'react';

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
                        <span className="utk-description" role="subheading">Explore Items digitized from our collections. <a href="#">Learn More</a></span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;
