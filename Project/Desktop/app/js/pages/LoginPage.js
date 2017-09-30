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

        this.passwordHandleChange = this.passwordHandleChange.bind(this);
        this.emailHandleChange = this.emailHandleChange.bind(this);
        this.checkboxHandleChange = this.checkboxHandleChange.bind(this);
        this.loginHandleClick=this.loginHandleClick.bind(this);

        this.state={
            email:'',
            password:'',
            remember:false

        }
    }


    emailHandleChange(value) {
        this.setState({
            email:value
        });

    }
    passwordHandleChange(value) {
        this.setState({
            password:value
        });
    }

    checkboxHandleChange(value) {
        this.setState({
            remember:!this.state.remember
        })
    }
    loginHandleClick(event){
        event.preventDefault();

        var data={
            "type":"login",
            "username":this.state.email,
            "password":this.state.password
        }

        var sendData={
            method:'POST',
            headers:new Headers({
                'Content-Type':'application/x-www-form-urlencoded'
            }),
            body:$.param(data)

        };
        var remember=this.state.remember;
        fetch("http://10.30.111.176/khulabackend/khulabackend/API/V2/Client/",sendData)
            .then((resp) => resp.json()) // Transform the data into json
            .then(function(data) {
                if(data.success==1){
                    Cookies.setCookie("accessToken",data.token);
                    Cookies.setCookie("rememberMe",remember);
                }else{
                    alert(data.message);
                }
                // Create and append the li's to the ul
            });
    }


    render() {
        return (
            <DocumentTitle title="Welcome to Khula">
                <div id="wrapper">
                    <div className="vertical-align-wrap">
                        <div className="vertical-align-middle">
                            <div className="auth-box ">
                                <div className="left">
                                    <div className="content">
                                        <div className="header">
                                            <div className="logo text-center"><img style={{height: '60px'}} src="images/agric_logo.svg" alt="KHULA"/></div>
                                            <p className="lead">Login to your Khula account</p>
                                        </div>
                                        <form className="form-auth-small" >
                                            <div className="form-group">
                                                <label for="signin-email" className="control-label sr-only">Email</label>
                                                <input type="email" onChange={(e)=>this.emailHandleChange(e.target.value)} value={this.state.email} className="form-control" id="signin-email" placeholder="Email"/>
                                            </div>
                                            <div className="form-group">
                                                <label for="signin-password" className="control-label sr-only">Password</label>
                                                <input type="password" onChange={(e)=>this.passwordHandleChange(e.target.value)} value={this.state.password} className="form-control" id="signin-password" placeholder="Password"/>
                                            </div>
                                            <div className="form-group clearfix">
                                                <label className="fancy-checkbox element-left">
                                                    <input onChange={this.checkboxHandleChange} type="checkbox" className="uk-checkbox"/>
                                                        <span>Remember me</span>
                                                </label>
                                            </div>
                                            <button type="submit" className="btn btn-primary btn-lg btn-block" onClick={this.loginHandleClick}>LOGIN</button>
                                            <div className="bottom">
                                                <span className="helper-text"><i className="lnr-lock"></i> <a href="#">Forgot password?</a></span>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="right">
                                    <div className="overlay"></div>
                                    <div className="content text">
                                        <h1 className="heading" style={{color: 'white'}}>Welcome To Khula</h1>
                                    </div>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </DocumentTitle>
        );
    }

}

LoginPage.propTypes = propTypes;

export default LoginPage;
