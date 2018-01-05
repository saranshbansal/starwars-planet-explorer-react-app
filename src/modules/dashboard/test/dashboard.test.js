import React from 'react';
import { shallow, mount } from 'enzyme';
import chai, { expect } from 'chai';
import Dashboard from '../dashboard.js';
import store from '../../../shared/store';

it('<Dashboard store={store} /> :: render test', () => {
    const wrapper = shallow(<Dashboard store={store} />);
    expect(wrapper).to.have.lengthOf(1);
});