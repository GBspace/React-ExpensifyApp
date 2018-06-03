import moment from 'moment';
import {setTextFilter,sortByAmount,
        sortByDate,setStartDate,setEndDate} from '../../actions/filters';


test('should generate setStartDate action',()=>{
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate : moment(0)
    });
});

test('should generate setEndDate action',()=>{
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate : moment(0)
    });
});

test('should set text filter object with text value ',()=>{
    const action = setTextFilter('New Filter');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'New Filter'
    });
});


test('should set text filter object with default value ',()=>{
    const action = setTextFilter('');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});


test('should generate action sort by amount',()=>{
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT',
        sortBy: 'amount'
    });
});

test('should generate action sort by date',()=>{
    expect(sortByDate()).toEqual({
        type: 'SORT_BY_DATE',
        sortBy: 'date'
    });
});