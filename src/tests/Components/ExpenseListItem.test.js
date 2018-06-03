import React from 'react';
import {shallow} from 'enzyme';
import  {ExpenseListItem}  from '../../Components/ExpenseListItem';
import expenses from '../fixtures/expenses';

test('should render expense list item with data',()=>{
    const expense = expenses[0];
    const wrapper = shallow(<ExpenseListItem {...expense}/>);
    expect(wrapper).toMatchSnapshot();
});
