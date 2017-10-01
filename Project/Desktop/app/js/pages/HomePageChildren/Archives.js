'use strict';

import React            from 'react';
import {Link}           from 'react-router';
import DocumentTitle    from 'react-document-title';

const propTypes = {
  currentUser: React.PropTypes.object
};

class Notifications extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      query: ''
    };
  }

  render() {
    return (
      <DocumentTitle title="Search">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="header">
                <h4 className="title">May, 2017</h4>
                <p className="category"><time>16:00:32</time></p>
              </div>
              <div className="content table-responsive table-full-width">
                <table className="table table-striped">
                  <thead>
                  <th>ID</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Type</th>
                  <th>Processed by</th>
                  </thead>
                  <tbody>
                  <tr>
                    <td>1</td>
                    <td>Dakota Rice</td>
                    <td>$36,738</td>
                    <td>Niger</td>
                    <td>Oud-Turnhout</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Minerva Hooper</td>
                    <td>$23,789</td>
                    <td>Curaçao</td>
                    <td>Sinaai-Waas</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Sage Rodriguez</td>
                    <td>$56,142</td>
                    <td>Netherlands</td>
                    <td>Baileux</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Philip Chaney</td>
                    <td>$38,735</td>
                    <td>Korea, South</td>
                    <td>Overland Park</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Doris Greene</td>
                    <td>$63,542</td>
                    <td>Malawi</td>
                    <td>Feldkirchen in Kärnten</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>Mason Porter</td>
                    <td>$78,615</td>
                    <td>Chile</td>
                    <td>Gloucester</td>
                  </tr>
                  </tbody>
                </table>

              </div>
            </div>
          </div>



        </div>
      </DocumentTitle>
    );
  }

}

Notifications.propTypes = propTypes;

export default Notifications;
