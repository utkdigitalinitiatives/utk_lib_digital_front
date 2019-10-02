import React, {Component} from 'react';

import Data from "./components/Data";

const endpoint = 'http://porter.lib.utk.edu:8080/solr/collection1/select?q=*%3A*&fq=RELS_EXT_hasModel_uri_ss%3A%22info%3Afedora%2Fislandora%3AcollectionCModel%22+-PID%3A%22islandora%3Avideo_collection%22+-PID%3A%22ir%3AcitationCollection%22+-PID%3A%22islandora%3Aaudio_collection%22+-PID%3A%22islandora%3Aoralhistories_collection%22+-PID%3A%22islandora%3Asp_basic_image_collection%22+-PID%3A%22islandora%3Asp_large_image_collection%22+-PID%3A%22islandora%3Asp_pdf_collection%22&sort=PID+asc&rows=90&fl=PID+fgs_label_s+mods_abstract_s+mods_relatedItem_Featured_Item_titleInfo_title_s+mods_relatedItem_Featured_Item_identifier_pid_s+mods_relatedItem_Featured_Item_dateCreated_s+ancestors_ms&wt=json&indent=true';

class Digital extends Component {

    constructor(props) {
        super(props);

        this.state = {
            collections : null
        };
    };

    componentDidMount() {
        this.setState({
            collections : Data(endpoint)
        })
    }

    render() {

        return (
            <React.Fragment>
                hi
            </React.Fragment>
        );
    }
}

export default Digital;
