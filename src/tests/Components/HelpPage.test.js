import React from 'react';
import {shallow} from 'enzyme';
import HelpPage from '../../Components/HelpPage';

test('should display help page correctly',()=>{
    const wrapper = shallow(<HelpPage />);
    expect(wrapper).toMatchSnapshot();
});