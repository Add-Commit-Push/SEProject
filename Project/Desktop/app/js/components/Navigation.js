'use strict';

import React from 'react';
import {Router, Route, IndexRoute,Link} from 'react-router';
import { Modal } from 'react-bootstrap';
import {RaisedButton} from 'material-ui/RadioButton';



const propTypes = {
    params: React.PropTypes.object,
    query: React.PropTypes.object,
    children: React.PropTypes.oneOfType([
        React.PropTypes.array,
        React.PropTypes.object
    ])
};


class Navigation extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        modal: false
    };
  }

    renderChildren() {
        return React.cloneElement(this.props.children, {
            params: this.props.params,
            query: this.props.query,
            currentUser: this.state.currentUser
        });
    }

  render() {
    return (
        <div className="wrapper">
            <div className="sidebar" data-background-color="white" data-active-color="danger">
                <div className="sidebar-wrapper">
                    <div className="logo">
                        <img style={{marginLeft: '50px'}} width="100px" height="auto" src="http://localhost:3000/images/logo.svg" alt="Manager"/>
                    </div>

                    <ul className="nav">
                        <li>
                            <Link activeClassName="active" to="/home/dash">
                                <i className="ti-home"></i>
                                <p>Home</p>
                            </Link>
                        </li>
                        <li>
                            <Link activeClassName="active" to="/home/profile">
                                <i className="ti-user"></i>
                                <p>User Profile</p>
                            </Link>
                        </li>
                        <li>
                            <Link activeClassName="active"  to="/home/inventory">
                                <i className="ti-view-list-alt"></i>
                                <p>Inventory</p>
                            </Link>
                        </li>
                        <li>
                            <Link activeClassName="active" to="/home/customer">
                                <i className="ti-server"></i>
                                <p>Manage Customers</p>
                            </Link>
                        </li>
                        <li>
                            <Link activeClassName="active" to="/home/employees">
                                <i className="ti-pencil-alt2"></i>
                                <p>Manage Employees</p>
                            </Link>
                        </li>
                        <li>
                            <Link activeClass="active" to="/home/menu" href="maps.html">
                                <i className="ti-map"></i>
                                <p>Menus</p>
                            </Link>
                        </li>
                        <li>
                            <a href="notifications.html">
                                <i className="ti-wallet"></i>
                                <p>Accounting</p>
                            </a>
                        </li>
                        <li>
                            <Link activeClassName="active"  active to="/home/archives">
                                <i className="ti-briefcase"></i>
                                <p>Archives</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="main-panel">
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar bar1"></span>
                                <span className="icon-bar bar2"></span>
                                <span className="icon-bar bar3"></span>
                            </button>
                            <a className="navbar-brand" href="#">{/*Page*/}</a>
                        </div>
                        <div className="collapse navbar-collapse">
                            <ul className="nav navbar-nav navbar-right">
                                <li>
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                        <i className="ti-panel"> </i>
                                        <p> Stats</p>
                                    </a>
                                </li>
                                <li className="dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                        <i className="ti-bell"></i>
                                        <p className="notification">5 </p>
                                        <p> Notifications</p>
                                        <b className="caret"></b>
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a href="#">Notification 1</a></li>
                                        <li><a href="#">Notification 2</a></li>
                                        <li><a href="#">Notification 3</a></li>
                                        <li><a href="#">Notification 4</a></li>
                                        <li><a href="#">Another notification</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="ti-settings"></i>
                                        <p>Settings</p>
                                    </a>
                                </li>
                            </ul>

                        </div>
                    </div>
                </nav>


                <div className="content">
                    <div className="container-fluid">
                        {this.props.children}
                    </div>
                </div>
            </div>
        </div>
    );
  }

}

export default Navigation;
