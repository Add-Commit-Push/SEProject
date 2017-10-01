'use strict';

import React         from 'react';
import DocumentTitle from 'react-document-title';
import $ from 'jquery';
import Header from "../components/Navigation";

const propTypes = {
    currentUser: React.PropTypes.object
};

class LoginPage extends React.Component {

    constructor(props) {
        super(props);

        // this.passwordHandleChange = this.passwordHandleChange.bind(this);
        // this.emailHandleChange = this.emailHandleChange.bind(this);
        // this.checkboxHandleChange = this.checkboxHandleChange.bind(this);
        // this.loginHandleClick=this.loginHandleClick.bind(this);

        this.state={
            email:'',
            password:'',
            remember:false

        }
    }

    //
    // emailHandleChange(value) {
    //     this.setState({
    //         email:value
    //     });
    //
    // }
    // passwordHandleChange(value) {
    //     this.setState({
    //         password:value
    //     });
    // }
    //
    // checkboxHandleChange(value) {
    //     this.setState({
    //         remember:!this.state.remember
    //     })
    // }


    render() {
        return (
            <DocumentTitle title="Welcome to Manager">
                <div className="container">
                    <div id="login" className="signin-card">
                        <div className="logo-image">
                            <img src="http://localhost:3000/images/logo.svg" alt="Logo" title="Logo" width="138"/>
                        </div>
                        <p className="subhead">Licenced to</p>
                        <h1 className="display1">DW Eleven - 13</h1>
                        <form action="" method="" className="" role="form">
                            <div id="form-login-username" className="form-group">
                                <input id="username" className="form-control" name="username" type="text" size="18" alt="login" required />
                                <span className="form-highlight"></span>
                                <span className="form-bar"></span>
                                <label for="username" className="float-label">login</label>
                            </div>
                            <div id="form-login-password" className="form-group">
                                <input id="passwd" className="form-control" name="password" type="password" size="18" alt="password" required/>
                                    <span className="form-highlight"></span>
                                    <span className="form-bar"></span>
                                    <label for="password" className="float-label">password</label>
                            </div>
                            <div id="form-login-remember" className="form-group">
                                <div className="checkbox checkbox-default">
                                    <input id="remember" type="checkbox" value="yes" alt="Remember me" className=""/>
                                        <label for="remember">Remember me</label>
                                </div>
                            </div>
                            <div>
                                <button className="btn btn-block btn-info ripple-effect" type="submit" name="Submit" alt="sign in">Sign in</button>
                            </div>
                        </form>

                    </div>
                </div>
            </DocumentTitle>
        );
    }

}

LoginPage.propTypes = propTypes;

export default LoginPage;
