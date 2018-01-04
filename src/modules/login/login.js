import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions.js';
import LoginForm from './form.js';

class Login extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            username: '',
            password: '',
            error: '',
            redirectToReferrer: false
        }
        this.handleLogin = this.handleLogin.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleLogin(e) {
        e.preventDefault();

        const { username, password } = this.state;
        const { history } = this.props;

        if (username === 'Saransh' && password === '12345') {
            this.setState({ error: false, redirectToReferrer: true });
            this.props.authenticateUser(true);
            history.push('/dashboard');
        } else {
            this.setState({ error: true, redirectToReferrer: false });
            this.props.authenticateUser(false);
        }
    }
    
    render() {
        if (this.props.isLoggedIn) {
            return <Redirect to="/dashboard" />;
        } else {
            return (
                <LoginForm
                    username={this.state.username}
                    password={this.state.password}
                    error={this.state.error}
                    handleInputChange={this.handleInputChange}
                    handleLogin={this.handleLogin}
                />
            );
        }
    }
}

function mapStateToProps(state) {
    return {
        isLoggedIn: state.authenticationReducer.isLoggedIn
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        authenticateUser: actions.authenticateUser
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);