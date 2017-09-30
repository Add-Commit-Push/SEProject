import React from 'react';
import {Link} from 'react-router-dom';

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    // trigger episode loading
    // this.init(props);
  }

  // componentDidUpdate() {
  // }
  //
  // componentWillUnmount() {
  // }

  render() {
    return (
        <div className="login-page">
          <div className="form">
            <form className="register-form">
              <input type="text" placeholder="name"/>
              <input type="password" placeholder="password"/>
              <input type="text" placeholder="email address"/>
              <button>create</button>
              <p className="message"><a href="#">Forgot password?</a></p>
            </form>
            <form className="login-form">
              <input type="text" placeholder="username"/>
              <input type="password" placeholder="password"/>
              <Link to="/home" ><button>login</button></Link>
              <p className="message">Not registered? <a href="#">Create an account</a></p>
            </form>
          </div>
        </div>
    );
  }
}
