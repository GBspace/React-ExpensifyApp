import filterReducer from '../../reducers/filters';
import moment from 'moment';

const intialState = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
};

test('should setup default filter values',()=>{
    const state=filterReducer(undefined,{type: '@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set sort by to amount',()=>{
    const state = filterReducer(undefined,{type: 'SORT_BY_AMOUNT',sortBy: 'amount'});
    expect(state.sortBy).toBe('amount');
});

test('should set sort by to date',()=>{
    
    const action = {type: 'SORT_BY_DATE', sortBy: 'date'};
    const state = filterReducer(undefined,action);
    expect(state.sortBy).toBe('date');
});

test('should set start date as provided',()=>{
    const action = {
        type: 'SET_START_DATE',
        startDate: moment().startOf('month')
    };
    const state = filterReducer(undefined,action);
    expect(state.startDate).toBe(action.startDate);
});

test('should set end date as provided',()=>{
    const action = {
        type: 'SET_END_DATE',
        endDate: moment().endOf('month')
    };
    const state = filterReducer(undefined,action);
    expect(state.endDate).toBe(action.endDate);
});

test('should set text filter as provided',()=>{
    const text = 'This is my filter';
    const action = {type: 'SET_TEXT_FILTER',text};
    const state = filterReducer(undefined,action);
    expect(state.text).toBe(text);
});

