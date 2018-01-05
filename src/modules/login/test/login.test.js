import React from 'react';
import { shallow, mount } from 'enzyme';
import chai, { expect } from 'chai';
import store from '../../../shared/store';
import Login from '../login.js';
import Form from '../form.js';

let dummyState = { username: '', password: '123', error: '' }

it('<Login store={store} /> :: render test', () => {
    const wrapper = shallow(<Login store={store} />);
    expect(wrapper).to.have.lengthOf(1);
});

it('<Login store={store} /> :: state simulation test', () => {
    const loginWrapper = shallow(<Login store={store} />);
    // supply username/pass -> check actual state
    loginWrapper.setState(dummyState);
    const state = loginWrapper.state();
    expect(state).to.deep.equal(dummyState);
});