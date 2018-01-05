import React from 'react';
import { shallow, mount } from 'enzyme';
import chai, { expect } from 'chai';
import Planet from '../planet.js';

//dummy prop setup for Unit Test case of the component
let fullInfoFilter = {};
function showPlanetInfo() {
    fullInfoFilter = { "Saransh": true };
}

const props = {
    data: {
        name: "Saransh",
        population: "100",
        gravity: "1",
        orbital_period: "24",
        terrain: ""
    },
    fullInfoFilter: fullInfoFilter,
    showPlanetInfo: showPlanetInfo
};

it('<Planet {...props} /> :: render test', () => {
    const wrapper = shallow(<Planet {...props} />);
    expect(wrapper).to.have.lengthOf(1);
});

it('<Planet {...props} /> :: click simulation test', () => {
    const wrapper = mount(<Planet {...props} />);
    expect(props.fullInfoFilter).to.deep.equal({});
    wrapper.find('.clickable').simulate('click');
    expect(fullInfoFilter).to.deep.equal({ "Saransh": true });
});