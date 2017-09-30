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
                                    <h4 className="title">Chet Faker<br />
                                        <a href="#"><small>@chetfaker</small></a>
                                    </h4>
                                </div>
                                <p className="description text-center">
                                    "I like the way you work it <br/>
                                    No diggity <br/>
                                    I wanna bag it up"
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
                                            <h5>24,6$<br /><small>Spent</small></h5>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        <div className="card">
                            <div className="header">
                                <h4 className="title">Team Members</h4>
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
                                                DJ Khaled
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
                                                Creative Tim
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
                                                Flume
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
                                                <input type="text" className="form-control border-input" disabled placeholder="Company" value="Creative Code Inc."/>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="form-group">
                                                <label>Username</label>
                                                <input type="text" className="form-control border-input" placeholder="Username" value="michael23"/>
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
                                                <input type="text" className="form-control border-input" placeholder="Company" value="Chet"/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Last Name</label>
                                                <input type="text" className="form-control border-input" placeholder="Last Name" value="Faker"/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label>Address</label>
                                                <input type="text" className="form-control border-input" placeholder="Home Address" value="Melbourne, Australia"/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label>City</label>
                                                <input type="text" className="form-control border-input" placeholder="City" value="Melbourne"/>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label>Country</label>
                                                <input type="text" className="form-control border-input" placeholder="Country" value="Australia"/>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <label>Postal Code</label>
                                                <input type="number" className="form-control border-input" placeholder="ZIP Code"/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label>About Me</label>
                                                <textarea rows="5" className="form-control border-input" placeholder="Here can be your description" value="Mike">Oh so, your weak rhyme
You doubt I'll bother, reading into it
I'll probably won't, left to my own devices
But that's the difference in our opinions.</textarea>
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
