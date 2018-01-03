import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import avatar from '../../assets/img/zabrak.svg';

class Login extends Component {

    state = {
        redirectToReferrer: false
    }

    login = () => {
        this.props.route.auth.authenticate(() => {
            this.setState({ redirectToReferrer: true })
        })
    }

    render() {
        const { from } = this.props.location.state || { from: { pathname: '/' } }
        const { redirectToReferrer } = this.state

        if (redirectToReferrer) {
            return (
                <Redirect to={from} />
            )
        }

        return (
            <div>
                <div className="imgcontainer">
                    <img src={avatar} alt="Avatar" className="avatar" />
                </div>
                <div className="container">
                    <label><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="uname" required />
                    <label><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required />
                </div>
                <div className="container" style={{backgroundColor:'#f1f1f1'}}>
                    <button type="submit" onClick={this.login}>LOGIN</button>
                    <button type="button" className="cancelbtn">CANCEL</button>
                </div>
            </div>
        );
    }
}

export default Login;