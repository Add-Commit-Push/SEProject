'use strict';

import React         from 'react';
import {Link}        from 'react-router';
import DocumentTitle from 'react-document-title';

const propTypes = {
    currentUser: React.PropTypes.object
};

class Customer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <DocumentTitle title="User Profile">
                <div className="row">
                    <div className="uk-overflow-auto">
                        <table className="uk-table uk-table-hover uk-table-middle uk-table-divider">
                            <thead>
                            <tr>
                                <th className="uk-table-shrink"></th>
                                <th className="uk-table-shrink"></th>
                                <th className="uk-table-expand">Customer Name</th>
                                <th className="uk-table-expand">Customer Contact</th>
                                <th className="uk-table-shrink uk-text-nowrap"></th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td></td>
                                <td><img className="uk-preserve-width uk-border-circle" src="http://localhost:3000/images/faces/face-0.jpg" width="40" alt=""/></td>
                                <td className="uk-table-link">
                                    <a className="uk-link-reset" href="">Meriam Elabor Rapulai.</a>
                                </td>
                                <td className="uk-text-truncate">Waiter.</td>
                                <td className="uk-text-nowrap"><button className="btn btn-info btn-fill btn-wd">View Profile</button></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td><img className="uk-preserve-width uk-border-circle" src="http://localhost:3000/images/faces/face-0.jpg" width="40" alt=""/></td>
                                <td className="uk-table-link">
                                    <a className="uk-link-reset" href="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</a>
                                </td>
                                <td className="uk-text-truncate">Waiter.</td>
                                <td className="uk-text-nowrap"><button className="btn btn-info btn-fill btn-wd">View Profile</button></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td><img className="uk-preserve-width uk-border-circle" src="http://localhost:3000/images/faces/face-0.jpg" width="40" alt=""/></td>
                                <td className="uk-table-link">
                                    <a className="uk-link-reset" href="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</a>
                                </td>
                                <td className="uk-text-truncate">Waiter.</td>
                                <td className="uk-text-nowrap"><button className="btn btn-info btn-fill btn-wd">View Profile</button></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td><img className="uk-preserve-width uk-border-circle" src="http://localhost:3000/images/faces/face-0.jpg" width="40" alt=""/></td>
                                <td className="uk-table-link">
                                    <a className="uk-link-reset" href="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</a>
                                </td>
                                <td className="uk-text-truncate">Sue Chef.</td>
                                <td className="uk-text-nowrap"><button className="btn btn-info btn-fill btn-wd">View Profile</button></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </DocumentTitle>
        );
    }

}

Customer.propTypes = propTypes;

export default Customer;
