import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authenticationActions from '../login/actions.js';
import Timer from '../timer/timer.js';
import logo from '../../assets/img/starwars1.png';
import avatar from '../../assets/img/avatar.png';

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
                    <Timer />                    
                </div>
                <div className="userContainer">
                    <img src={avatar} className="App-avatar" alt="avatar" />
                    <div>
                        {this.props.user && this.props.user.username}
                    </div>                
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