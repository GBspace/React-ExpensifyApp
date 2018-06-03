import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseListFilters} from '../../Components/ExpenseListFilters';
import {filters,altFilters} from '../fixtures/filters';
import moment from 'moment';

let setTextFilter,sortByDate,sortByAmount,setStartDate,setEndDate,wrapper;

beforeEach(()=>{
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(<ExpenseListFilters 
        filters ={filters}
        setTextFilter={setTextFilter}
        sortByAmount={sortByAmount}
        sortByDate={sortByDate}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        />);
    
});

test('should render expense list filters',()=>{
    expect(wrapper).toMatchSnapshot();
});

test('should render expense list filters with alt data filters',()=>{
    wrapper.setProps({
        filters: altFilters
    });
    expect(wrapper).toMatchSnapshot();
});

test('should handle text change',()=>{
    const value = "Grocery";
    wrapper.find('input').simulate('change',{
        target: {
            value
        }
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('should sort by date',()=>{
    const value='date';
    wrapper.setProps({
        filters: altFilters
    });
    wrapper.find('select').simulate('change',{
        target: {value}
    });
    expect(sortByDate).toHaveBeenCalled();
});

test('should sort by amount',()=>{
    const value='amount';
  
    wrapper.find('select').simulate('change',{
        target: {value}
    });
    expect(sortByAmount).toHaveBeenCalled();
});

test('should handle date change',()=>{
    const startDate = moment(0).add(40,'years');
    const endDate = moment(0).add(44,'years');
    wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({startDate,endDate});
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('should handle date focus change',()=>{
    const calanderFocused = 'startDate';
    wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(calanderFocused);
    expect(wrapper.state('calanderFocused')).toBe(calanderFocused);
});
