import React, {Component} from 'react';

export class FooterSystem extends Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {

        return (
            <section className="utk-footer footer-system">
                <div className="container">
                    <div className="footer-system--inner">
                        <a href="http://tennessee.edu" className="footer-system--logo">
                            <span className="sr-only">University of Tennessee System</span>
                            <svg id="ut-system" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 100 56.505">
                                <title>University of Tennessee System</title>
                                <path fill="#ffffff"
                                      d="M83.829,19.645h-10.5V56.377H57.6V0H100c-.879.879-.559,2.2-1.757,3.914-1.557,2.076-3.087,1.107-4.352,2.635-1.167,1.41-.659,2.887-1.757,4.351-1.559,2.083-3.952,1.319-5.669,3.514-1.4,1.757-1.318,3.474-2.636,5.231Z"
                                      transform="translate(0)"/>
                                <path fill="#ffffff"
                                      d="M35.409.107c-.877.879-.633,2.28-1.83,4C32.024,6.176,30.5,5.208,29.232,6.734c-1.166,1.408-.659,2.884-1.754,4.346-1.558,2.081-3.909,1.317-5.664,3.51-1.395,1.756-1.316,3.47-2.632,5.225H39.721V38.16H22.692c-1.41,0-2.546.153-3.51-.877a3.382,3.382,0,0,1-.877-2.633L18.37.107H.053L0,39.914C-.006,44.553,3.031,49.087,4.785,50.8c2.194,2.193,6.692,5.7,11.805,5.7H40.558L55,39.914,55.083.107Z"
                                      transform="translate(0)"/>
                            </svg>
                        </a>
                        <p className="footer-system--text">The flagship campus of <a href="http://tennessee.edu">the
                            University of Tennessee System</a> and partner in <a
                            href="http://www.tntransferpathway.org/">the Tennessee Transfer Pathway</a>.</p>
                    </div>
                </div>
            </section>
        )
    }
}
