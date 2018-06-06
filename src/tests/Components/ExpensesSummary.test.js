import React from 'react';
import {shallow} from 'enzyme';
import ExpensesSummary from '../../Components/ExpensesSummary';

test('should render expenses summary with one expense',()=>{
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expenseTotal={20}/>);
    expect(wrapper).toMatchSnapshot();

});

test('should render expenses summary with multiple expense',()=>{
    const wrapper = shallow(<ExpensesSummary expenseCount={23} expenseTotal={2000}/>);
    expect(wrapper).toMatchSnapshot();
});