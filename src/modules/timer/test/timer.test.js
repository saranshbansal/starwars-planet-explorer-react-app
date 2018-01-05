import React from 'react';
import { shallow, mount } from 'enzyme';
import chai, { expect } from 'chai';
import store from '../../../shared/store';
import Timer from '../timer.js';

it('<Timer /> :: render test', () => {
    const wrapper = shallow(<Timer />);
    expect(wrapper).to.have.lengthOf(1);
});

it('<Timer /> :: time simulation test', () => {
    const wrapper = mount(<Timer />);
    expect(wrapper.state().secondsElapsed).to.equal(0);    
    wrapper.instance().tick();
    expect(wrapper.state().secondsElapsed).to.equal(1);
    expect(wrapper.find('div').text()).to.equal(' (Time Elapsed: 1 seconds)');
});