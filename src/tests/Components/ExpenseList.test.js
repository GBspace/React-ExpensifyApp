import React from 'react';
import {shallow} from 'enzyme';
import { ExpenseList } from '../../Components/ExpenseList';
import expenses from '../fixtures/expenses';


test('should render expense list with given expense',()=>{
    const wrapper = shallow(<ExpenseList expenses={expenses} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render expense list with zero expenses',()=>{
    const wrapper = shallow(<ExpenseList expenses={[]} />);
    expect(wrapper).toMatchSnapshot();
});