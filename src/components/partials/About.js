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
                            <a href="#search"
                               onKeyDown={this.handleKeyDown()}
                               onClick={this.handleOnClick()}><span className="icon-left-big"></span> Back to Search</a>
                        </span>
                        <p>Cras sed augue quam. Donec congue nulla lectus, eu volutpat libero lacinia ac. Fusce commodo metus nec porta consequat. Quisque pellentesque convallis velit, nec auctor sem accumsan vitae. Duis massa sapien, sodales vel ex in, interdum condimentum ligula.</p>
                        <p>Aliquam erat volutpat. In hac habitasse platea dictumst. Nunc vestibulum neque fermentum, euismod risus elementum, elementum turpis. Praesent dignissim fermentum velit, vitae mattis sapien dignissim id. Morbi at risus vel ex rutrum viverra. Curabitur auctor suscipit blandit. Pellentesque in nulla sed lorem rhoncus scelerisque. Curabitur consequat tortor lectus, vel ornare mi malesuada eget. Mauris rutrum massa in mauris euismod, in convallis ante iaculis.</p>
                        <p>Ut eu erat ac turpis cursus dictum quis nec nisl. Suspendisse potenti. Duis augue eros, faucibus sed lorem eget, mollis euismod erat. Nunc eget sodales eros. Nulla blandit sapien lacus, ac elementum leo lobortis ut. Proin non ligula id sem gravida ultricies. Aenean facilisis metus nec tortor placerat, id ullamcorper augue tristique. Mauris a commodo nunc.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;
