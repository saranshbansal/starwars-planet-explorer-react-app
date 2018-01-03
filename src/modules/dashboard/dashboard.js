import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as api from '../../shared/api.js';
import * as actions from './actions.js';
import * as util from '../../shared/util.js';
import Search from '../searchbox/search.js';
import PlanetsGrid from './results.js';

class Dashboard extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            input: '',
            planets: []
        }
        this.handleSearch = this.handleSearch.bind(this);
    }

    componentWillMount() {
        
    }

    componentWillReceiveProps(nextProps) {
        if (!util.deepCompare(nextProps.listOfplanets, this.state.planets)) {
            this.setState({
                planets: nextProps.listOfplanets || []
            });
        }
    }

    componentWillUnmount() {
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

    render() {
        return (
            <div>
                <Search
                    searchTxt={this.state.input}
                    handleSearch={this.handleSearch}
                />
                <PlanetsGrid rowdata={this.props.listOfplanets} />
            </div>
        );
    }
}

function mapStateToProps(state) {
  return {
      listOfplanets: state.dashboardReducer.listOfplanets
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
      searchPlanets: actions.searchPlanets
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);