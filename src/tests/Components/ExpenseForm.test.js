import React from 'react';
import {shallow} from 'enzyme';
import ExpenseForm from '../../Components/ExpenseForm';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should render expense form correctly',()=>{
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

test('should render expense form with expense data',()=>{
    const wrapper = shallow(<ExpenseForm expense={expenses[1]}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission',()=>{
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit',{
        preventDefault: ()=>{}
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test('should add description on input change',()=>{
    const value = 'New Description';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(0).simulate('change',{
        target: {value}
    });
    expect(wrapper.state('description')).toBe(value);
});

test('should set note on text area change',()=>{
    const value = "New Note";
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('textarea').simulate('change',{
        target: {value}
    });
    expect(wrapper.state('note')).toBe(value);
});

test('should set amount id with valid input',()=>{
    const value = '32';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate("change",{
        target: {value}
    });
    expect(wrapper.state('amount')).toBe(value);
});

test('should not set amount if invalid input',()=>{
    const value = '32.xyz';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate("change",{
        target: {value}
    });
    expect(wrapper.state('amount')).toBe('');
});

test('should call onSubmit prop for valid form sumbission',()=>{
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense = {expenses[0]} 
                            onSubmit={onSubmitSpy}/>);
    wrapper.find('form').simulate('submit',{
        preventDefault: ()=>{}
    });
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        desc: expenses[0].desc,
        note: expenses[0].note,
        createAt:expenses[0].createAt,
        amount:expenses[0].amount
    });
});

test('should set new date on date change',()=>{
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(now);
    expect(wrapper.state('createAt')).toEqual(now);
});

test('should set calander focus on change',()=>{
    const focused = true;
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('withStyles(SingleDatePicker)').prop('onFocusChange')({focused});
    expect(wrapper.state('calanderFocused')).toBe(focused);
});