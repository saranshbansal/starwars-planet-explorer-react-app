import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as api from '../../shared/api.js';
import * as actions from './actions.js';
import * as authenticationActions from '../login/actions.js';
import Search from './search.js';
import ResultGrid from './resultGrid.js';

class Dashboard extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            input: '',
            fullInfoFilter: {},
            planets: [],
            error: ''
        }
        this.handleSearch = this.handleSearch.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
        this.showPlanetInfo = this.showPlanetInfo.bind(this);
    }

    handleSearch(event) {
        const input = event.target.value;
        let planets = [];
        const error = (this.props.user.username !== 'Luke Skywalker' && this.props.counter > 15) && 'Only Luke Skywalker can make more than 15 searches in a minute.';
        if (input && input.trim() !== ''&& !error) {
            this.props.incrementSearchCount(this.props.counter + 1); // increment counter
            api.getPlanetSuggestions(input, (response) => {
                if (response != null && response.body != null) {
                    const resultNode = response.body;
                    planets = resultNode.results || [];
                    this.setState({ input, planets });
                }
            });
        } else {
            this.setState({ input, planets, error });
        }
    }

    showPlanetInfo(name) {
        // insert planet in map
        const fullInfoFilter = { ...this.state.fullInfoFilter, [name]: !this.state.fullInfoFilter[name]};
        this.setState({ fullInfoFilter });
    }

    handleLogout(e, history) {
        e.preventDefault();
        this.props.authenticateUser(false);
    };

    render() {
        if (!this.props.isLoggedIn || !this.props.location.state.isLoggedIn) {
            return <Redirect to={{
                pathname: '/login',
                state: { isLoggedIn: this.props.isLoggedIn }
            }} />;
        } else {
            return (
                <div className="container-fluid">
                    <div className="logoutContainer">
                        <button type="submit" className="btn btn-default" onClick={e => this.handleLogout(e)}>Logout</button>
                    </div>
                    <Search
                        searchTxt={this.state.input}
                        handleSearch={this.handleSearch}
                    />
                    <ResultGrid
                        rowdata={this.state.planets}
                        error={this.state.error}
                        fullInfoFilter={this.state.fullInfoFilter}
                        showPlanetInfo={this.showPlanetInfo}
                    />
                </div>
            );
        }
    }
}

function mapStateToProps(state) {
  return {
      counter: state.dashboardReducer.counter,
      user: state.authenticationReducer.user,
      isLoggedIn: state.authenticationReducer.isLoggedIn
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
      incrementSearchCount: actions.incrementSearchCount,
      authenticateUser: authenticationActions.authenticateUser
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);