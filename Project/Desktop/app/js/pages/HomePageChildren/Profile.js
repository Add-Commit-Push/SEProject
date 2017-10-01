'use strict';

import React         from 'react';
import {Link}        from 'react-router';
import DocumentTitle from 'react-document-title';

const propTypes = {
    currentUser: React.PropTypes.object
};

class Profile extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <DocumentTitle title="User Profile">
                <div className="row">
                    <div className="col-lg-4 col-md-5">
                        <div className="card card-user">
                            <div className="image">
                                <img src="http://localhost:3000/images/background.jpg" alt="..."/>
                            </div>
                            <div className="content">
                                <div className="author">
                                    <img className="avatar border-white" src="http://localhost:3000/images/faces/face-2.jpg" alt="..."/>
                                    <h4 className="title">Chef Ferreira<br />
                                        <a href="#"><small>@Chef_Marthinus_Ferreira</small></a>
                                    </h4>
                                </div>
                                <p className="description text-center">
                                    "Since 2009 we have been<br/>
                                    providing patrons with a dinning <br/>
                                    Atmosphere & menu that is <br/>
                                    constantly evolving"
                                </p>
                            </div>
                            <hr/>
                                <div className="text-center">
                                    <div className="row">
                                        <div className="col-md-3 col-md-offset-1">
                                            <h5>12<br /><small>Files</small></h5>
                                        </div>
                                        <div className="col-md-4">
                                            <h5>2GB<br /><small>Used</small></h5>
                                        </div>
                                        <div className="col-md-3">
                                            <h5>198.1GB<br /><small>Remaining</small></h5>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        <div className="card">
                            <div className="header">
                                <h4 className="title">Executive Team</h4>
                            </div>
                            <div className="content">
                                <ul className="list-unstyled team-members">
                                    <li>
                                        <div className="row">
                                            <div className="col-xs-3">
                                                <div className="avatar">
                                                    <img src="http://localhost:3000/images/faces/face-0.jpg" alt="Circle Image" className="img-circle img-no-padding img-responsive"/>
                                                </div>
                                            </div>
                                            <div className="col-xs-6">
                                                Chef Robbins
                                                <br />
                                                <span className="text-muted"><small>Offline</small></span>
                                            </div>

                                            <div className="col-xs-3 text-right">
                                                <btn className="btn btn-sm btn-success btn-icon"><i className="fa fa-envelope"></i></btn>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="row">
                                            <div className="col-xs-3">
                                                <div className="avatar">
                                                    <img src="http://localhost:3000/images/faces/face-1.jpg" alt="Circle Image" className="img-circle img-no-padding img-responsive"/>
                                                </div>
                                            </div>
                                            <div className="col-xs-6">
                                                Chef Stacy
                                                <br />
                                                <span className="text-success"><small>Available</small></span>
                                            </div>

                                            <div className="col-xs-3 text-right">
                                                <btn className="btn btn-sm btn-success btn-icon"><i className="fa fa-envelope"></i></btn>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="row">
                                            <div className="col-xs-3">
                                                <div className="avatar">
                                                    <img src="http://localhost:3000/images/faces/face-3.jpg" alt="Circle Image" className="img-circle img-no-padding img-responsive"/>
                                                </div>
                                            </div>
                                            <div className="col-xs-6">
                                                Sue Chef Jonathen
                                                <br />
                                                <span className="text-danger"><small>Busy</small></span>
                                            </div>

                                            <div className="col-xs-3 text-right">
                                                <btn className="btn btn-sm btn-success btn-icon"><i className="fa fa-envelope"></i></btn>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-7">
                        <div className="card">
                            <div className="header">
                                <h4 className="title">Edit Profile</h4>
                            </div>
                            <div className="content">
                                <form>
                                    <div className="row">
                                        <div className="col-md-5">
                                            <div className="form-group">
                                                <label>Company</label>
                                                <input type="text" className="form-control border-input" disabled placeholder="Company" value="DW Eleven - 13."/>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="form-group">
                                                <label>Username</label>
                                                <input type="text" className="form-control border-input" placeholder="Username" value="Chef_Marthinus_Ferreira"/>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label for="exampleInputEmail1">Email address</label>
                                                <input type="email" className="form-control border-input" placeholder="Email"/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>First Name</label>
                                                <input type="text" className="form-control border-input" placeholder="Company" value="Marthinus"/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Last Name</label>
                                                <input type="text" className="form-control border-input" placeholder="Last Name" value="Ferreira"/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label>Address</label>
                                                <input type="text" className="form-control border-input" placeholder="Home Address" value="Dunkeld West Shopping Centre"/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label>City</label>
                                                <input type="text" className="form-control border-input" placeholder="City" value="Jan Smuts & Bompas Str"/>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label>Country</label>
                                                <input type="text" className="form-control border-input" placeholder="Country" value="Johannesburg"/>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label>Postal Code</label>
                                                <input type="number" className="form-control border-input" placeholder="ZIP Code" value="2003"/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label>About Me</label>
                                                <textarea rows="5" className="form-control border-input" placeholder="Here can be your description">

                                                </textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <button type="submit" className="btn btn-info btn-fill btn-wd">Update Profile</button>
                                    </div>
                                    <div className="clearfix"></div>
                                </form>
                            </div>
                        </div>
                    </div>


                </div>
            </DocumentTitle>
        );
    }

}

Profile.propTypes = propTypes;

export default Profile;
