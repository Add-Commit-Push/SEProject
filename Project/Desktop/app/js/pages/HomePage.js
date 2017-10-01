'use strict';

import React         from 'react';
import {Link}        from 'react-router';
import DocumentTitle from 'react-document-title';


const propTypes = {
  currentUser: React.PropTypes.object
};

class HomePage extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <DocumentTitle title="Home">
          <div>
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="card">
                  <div className="content">
                    <div className="row">
                      <div className="col-xs-5">
                        <div className="icon-big icon-warning text-center">
                          <i className="ti-server"></i>
                        </div>
                      </div>
                      <div className="col-xs-7">
                        <div className="numbers">
                          <p>Capacity</p>
                          200GB
                        </div>
                      </div>
                    </div>
                    <div className="footer">
                      <hr />
                      <div className="stats">
                        <i className="ti-reload"></i> Updated now
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="card">
                  <div className="content">
                    <div className="row">
                      <div className="col-xs-5">
                        <div className="icon-big icon-success text-center">
                          <i className="ti-wallet"></i>
                        </div>
                      </div>
                      <div className="col-xs-7">
                        <div className="numbers">
                          <p>Revenue</p>
                          R13,345
                        </div>
                      </div>
                    </div>
                    <div className="footer">
                      <hr />
                      <div className="stats">
                        <i className="ti-calendar"></i> Last day
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="card">
                  <div className="content">
                    <div className="row">
                      <div className="col-xs-5">
                        <div className="icon-big icon-danger text-center">
                          <i className="ti-pulse"></i>
                        </div>
                      </div>
                      <div className="col-xs-7">
                        <div className="numbers">
                          <p>failed orders</p>
                          23
                        </div>
                      </div>
                    </div>
                    <div className="footer">
                      <hr />
                      <div className="stats">
                        <i className="ti-timer"></i> In the last hour
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="card">
                  <div className="content">
                    <div className="row">
                      <div className="col-xs-5">
                        <div className="icon-big icon-info text-center">
                          <i className="ti-pie-chart"></i>
                        </div>
                      </div>
                      <div className="col-xs-7">
                        <div className="numbers">
                          <p>Customers</p>
                          +5
                        </div>
                      </div>
                    </div>
                    <div className="footer">
                      <hr />
                      <div className="stats">
                        <i className="ti-reload"></i> Updated now
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="header">
                <h4 className="title">Live Orders</h4>

              </div>
              <div className="content">
                <div className="row">
                  <div className="col-md-6">

                    <div className="alert alert-info alert-with-icon" data-notify="container">
                      <button type="button" aria-hidden="true" className="close">×</button>
                      <a><span data-notify="icon" className="ti-more"></span></a>
                      <span data-notify="message">This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.</span>
                    </div>

                    <div className="alert alert-danger alert-with-icon" data-notify="container">
                      <button type="button" aria-hidden="true" className="close">×</button>
                      <a><span data-notify="icon" className="ti-more"></span></a>
                      <span data-notify="message">This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.</span>
                    </div>

                    <div className="alert alert-warning alert-with-icon" data-notify="container">
                      <button type="button" aria-hidden="true" className="close">×</button>
                      <a><span data-notify="icon" className="ti-more"></span></a>
                      <span data-notify="message"><h4>Hello</h4>This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.</span>
                    </div>

                  </div>
                  <div className="col-md-6">

                    <div className="alert alert-success alert-with-icon" data-notify="container">
                      <button type="button" aria-hidden="true" className="close">×</button>
                      <a><span data-notify="icon" className="ti-more"></span></a>
                      <span data-notify="message">This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.</span>
                    </div>

                    <div className="alert alert-danger alert-with-icon" data-notify="container">
                      <button type="button" aria-hidden="true" className="close">×</button>
                      <a><span data-notify="icon" className="ti-more"></span></a>
                      <span data-notify="message">This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.</span>
                    </div>

                    <div className="alert alert-warning alert-with-icon" data-notify="container">
                      <button type="button" aria-hidden="true" className="close">×</button>
                      <a><span data-notify="icon" className="ti-more"></span></a>
                      <span data-notify="message">This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.</span>
                    </div>


                  </div>
                </div>
                <br/>
                <br/>
              </div>
            </div>
          </div>
      </DocumentTitle>
    );
  }

}

HomePage.propTypes = propTypes;

export default HomePage;
