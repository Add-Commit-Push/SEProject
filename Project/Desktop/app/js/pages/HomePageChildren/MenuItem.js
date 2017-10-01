'use strict';

import React         from 'react';
import {Link}        from 'react-router';
import DocumentTitle from 'react-document-title';

const propTypes = {
    currentUser: React.PropTypes.object
};

let tempStyle = {
    marginBottom: 'auto'};
let styles = {
    modal:{
        borderRadius: '0'
    }
};
class MenuItem extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            modal: false
        };

    }

    componentWillMount() {

    }

    render() {
        return (

            <DocumentTitle title="Employees">
                <div className="main-content">
                    <div style={{height:'40px'}} className="uk-grid-small uk-flex-row uk-text-center" uk-grid>

                            <div style={tempStyle} className="col-sm-6 col-xs-12 col-lg-4 col-md-4">
                                <div className="wrapper uk-card uk-card-hover" style={{backgroundColor:'white'}}>
                                    <div className="card radius shadowDepth1">
                                        <div className="card__image border-tlr-radius">
                                            <img width="100%" src="http://lorempixel.com/400/200/food" alt="" className="border-tlr-radius" />
                                        </div>
                                        <div style={{padding:'15px'}} className="card__content card__padding">
                                            <article className="card__article">
                                                <h4>Something ala what</h4>
                                                <div className="card__meta">
                                                    <time style={{color:'#5D5C58'}}>Wested Cape, South Africa</time>
                                                </div>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus harum</p>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus harum</p>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus harum</p>
                                            </article>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <button className="btn btn-info btn-fill btn-wd">Edit</button>
                                    </div>
                                </div>
                            </div>


                            <div style={tempStyle} className="col-sm-6 col-xs-12 col-lg-4 col-md-4">
                                <div className="wrapper uk-card uk-card-hover" style={{backgroundColor:'white'}}>
                                    <div className="card radius shadowDepth1">
                                        <div className="card__image border-tlr-radius">
                                            <img width="100%" src="http://lorempixel.com/400/200/food" alt="" className="border-tlr-radius" />
                                        </div>
                                        <div style={{padding:'15px'}} className="card__content card__padding">
                                            <article className="card__article">
                                                <h4>Something ala what</h4>
                                                <div className="card__meta">
                                                    <time style={{color:'#5D5C58'}}>Wested Cape, South Africa</time>
                                                </div>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus harum</p>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus harum</p>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus harum</p>
                                            </article>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <button className="btn btn-info btn-fill btn-wd">Edit</button>
                                    </div>
                                </div>
                            </div>


                    </div>
                </div>
            </DocumentTitle>
        );
    }

}

MenuItem.propTypes = propTypes;

export default MenuItem;
