import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as api from '../../shared/api.js';
import * as util from '../../shared/util.js';
import * as actions from './actions.js';
import * as authenticationActions from '../login/actions.js';
import Search from './searchBox.js';
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
        this.showPlanetInfo = this.showPlanetInfo.bind(this);
    }

    callApi(input, uri, results) {
        api.getPlanetSuggestions(input, uri, (response) => {
            if (response != null && response.body != null) {
                const resultNode = response.body;
                results = [...results].concat(resultNode.results || []);
                this.setState({ planets: results });
                if (resultNode.next) {
                    this.callApi('', resultNode.next, results);
                }
            }
        });
    }

    handleSearch(event) {
        const input = event.target.value;
        let planets = [];
        const error = (this.props.user.username !== 'Luke Skywalker' && this.props.counter > 15) && 'Only Luke Skywalker can make more than 15 searches in a minute.';
        if (input !== null && input.trim() !== '' && !error) {
            this.props.incrementSearchCount(this.props.counter + 1); // increment counter
            this.callApi(input, util.planetsUri, []);
            this.setState({ input });
        } else {
            this.setState({ input, planets, error });
        }
    }

    showPlanetInfo(name) {
        // insert planet in map
        const fullInfoFilter = { ...this.state.fullInfoFilter, [name]: !this.state.fullInfoFilter[name]};
        this.setState({ fullInfoFilter });
    }

    render() {
        if (!this.props.isLoggedIn || !this.props.location.state.isLoggedIn) {
            return <Redirect to={{
                pathname: '/login',
                state: { isLoggedIn: this.props.isLoggedIn }
            }} />;
        } else {
            return (
                <div className="container-fluid">
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