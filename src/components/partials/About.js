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
            <div className="utk-digital--about">
                <div className="container">
                    <div className="utk-digital--search--heading">
                        <span className="utk-heading-2" role="heading" aria-level="1">About Digital Collections</span>
                        <span className="utk-description" role="subheading">
                            <a href="#search"><span className="icon-left-big"></span> Back to Search</a>
                        </span>
                        <p>The University of Tennessee Libraries Digital Collections provide access to images, books, artworks, manuscripts, musical scores, videos, and oral histories. Materials come from our Special Collections including manuscripts, University Archives, Modern Political Archives, and the Great Smoky Mountains Regional Collection, as well as the DeVine Music Library and the Pendergrass Agricultural and Veterinary Medicine Library. While our primary focus is on materials held in Special Collections, several digital collections are the result of collaborative efforts with other departments on campus, and institutions outside the university.</p>
                        <p>UT Libraries has contributed to digital collections located at other institutions, such as:</p>
                        <ul>
                            <li><a href="#">Southeastern Native American Documents, 1730-1842</a> Contains letters, legal proceedings, military orders, financial papers, and archaeological images relating to Native Americans in the Southeast.</li>
                            <li><a href="#">Chronicling America</a>Contains over 13 million pages of historical US newspapers, including 300,000 pages from Tennessee newspapers. </li>
                        </ul>
                        <p>The university’s institutional repository, TRACE - Tennessee Research and Creative Exchange, provides access to scholarly works by UT faculty, staff, and graduate students, as well as documents from the University Archives.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;
