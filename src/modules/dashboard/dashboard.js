import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as api from '../../shared/api.js';
import * as actions from './actions.js';
import * as authenticationActions from '../login/actions.js';
import * as util from '../../shared/util.js';
import Search from './search.js';
import ResultGrid from './resultGrid.js';

class Dashboard extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            input: '',
            planets: []
        }
        this.handleSearch = this.handleSearch.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    componentWillMount() {
        if (!this.props.isLoggedIn) {
            return <Redirect to="/login" />;
        }
    }

    componentWillReceiveProps(nextProps) {
        if (!util.deepCompare(nextProps.listOfplanets, this.state.planets)) {
            this.setState({
                planets: nextProps.listOfplanets || []
            });
        }
    }

    handleSearch(event) {
        const input = event.target.value;
        let planets = [];
        if (input !== null && input.trim() !== '') {
            api.getPlanetSuggestions(input, (response) => {
                if (response != null && response.body != null) {
                    const resultNode = response.body;
                    planets = resultNode.results || [];
                    this.setState({ input, planets });
                    this.props.searchPlanets(planets);
                }
            });
        } else {
            this.setState({ input, planets });
            this.props.searchPlanets([])
        }
    }

    handleLogout(e, history) {
        e.preventDefault();
        this.props.authenticateUser(false);
        history.push('/login');
    };

    render() {
        if (!this.props.isLoggedIn) {
            return <Redirect to="/login" />;
        } else {
            return (
                <div className="container-fluid">
                    <div className="logoutContainer">
                        <button type="submit" className="btn btn-default" onClick={e => this.handleLogout(e, this.props.history)}>Logout</button>
                    </div>
                    <Search
                        searchTxt={this.state.input}
                        handleSearch={this.handleSearch}
                    />
                    <ResultGrid rowdata={this.state.planets} />
                </div>
            );
        }
    }
}

function mapStateToProps(state) {
  return {
      listOfplanets: state.dashboardReducer.listOfplanets,
      isLoggedIn: state.authenticationReducer.isLoggedIn
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
      searchPlanets: actions.searchPlanets,
      authenticateUser: authenticationActions.authenticateUser
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);