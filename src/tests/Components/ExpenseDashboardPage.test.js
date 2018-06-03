import React from 'react';
import {shallow} from 'enzyme';
import ExpenseDashboardPage from '../../Components/HelpPage';

test('should display ExpenseDashboardPage correctly',()=>{
    const wrapper = shallow(<ExpenseDashboardPage />);
    expect(wrapper).toMatchSnapshot();
});