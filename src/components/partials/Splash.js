import React, {Component} from 'react';
import ImageIIIF from "./ImageIIIF";

class Splash extends Component {

    constructor(props) {
        super(props);
    };

    featuredItem = (item) => {

        return (
            <div className="utk-digital--header--splash--featured">
                <div className="container">
                    <div className="utk-digital--header--splash--featured--content">
                        <h3>Featured Collection</h3>
                        <a href={item.mods_relatedItem_Featured_Item_identifier_pid_s}>
                            <h4>{item.fgs_label_s}}</h4>
                        </a>
                        <a href={item.mods_relatedItem_Featured_Item_identifier_pid_s}>
                            <h5>{item.mods_relatedItem_Featured_Item_titleInfo_title_s}, {item.mods_relatedItem_Featured_Item_dateCreated_s}</h5>
                        </a>
                    </div>
                </div>
            </div>
        )
    }

    render() {

        const {collection} = this.props

        return (
            <div className="utk-digital--header--splash">
                {this.featuredItem(collection)}
                <ImageIIIF data={collection}
                           width={1100} />
                <div className="utk-digital--header--splash--overlay"></div>
            </div>
        );
    }
}

export default Splash;
