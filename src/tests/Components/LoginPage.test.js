import {shallow} from 'enzyme';
import React from 'react';
import LoginPage from '../../Components/LoginPage';

test('should render login page correctly',()=>{
    const wrapper = shallow(<LoginPage />);
    expect(wrapper).toMatchSnapshot();
});