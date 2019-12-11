import React, {Component} from 'react';
import ImageIIIF from "./ImageIIIF";

class Splash extends Component {

    constructor(props) {
        super(props);
    };

    featuredItem = (item) => {

        const baseUrl = 'https://digital.lib.utk.edu/collections/islandora/object/';
        const collectionUrl = baseUrl + item.PID;
        const itemUrl = baseUrl + item.mods_relatedItem_Featured_Item_identifier_pid_s;

        let title = item.utk_mods_relatedItem_featuredItem_titleInfo_title_ms

        if (item.utk_mods_relatedItem_featuredItem_date_ms)
            title = title + ', ' + item.utk_mods_relatedItem_featuredItem_date_ms

        return (
            <div className={`utk-digital--header--splash--featured`}>
                <div className="container">
                    <div className="utk-digital--header--splash--featured--content">
                        <ImageIIIF data={item}
                                   width={322} />
                        <h3>Featured Collection</h3>
                        <a href={collectionUrl}>
                            <h4>{item.fgs_label_s}</h4>
                        </a>
                        <a href={itemUrl}>
                            <h5>{title}</h5>
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
