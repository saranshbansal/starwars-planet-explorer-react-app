import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authenticationActions from '../login/actions.js';

import logo from '../../assets/img/starwars1.png';

class Header extends Component {

    constructor(props, context) {
        super(props, context);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout(e) {
        e.preventDefault();
        this.props.authenticateUser(false);
    };

    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <div className="logoutContainer">
                    <button type="submit" onClick={e => this.handleLogout(e)}>LOGOUT</button>
                </div>
                <div className="userContainer">
                    Welcome! {this.props.user && this.props.user.username}
                </div>
            </header>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.authenticationReducer.user
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        authenticateUser: authenticationActions.authenticateUser
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);