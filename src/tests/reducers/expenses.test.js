import expenseReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state',()=>{
    const state = expenseReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
});

test('should remove expense by id',()=>{
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[0].id
    };

    const state = expenseReducer(expenses,action);
    expect(state).toEqual([expenses[1],expenses[2]]);
});

test('should not remove expense if id not found',()=>{
    const action = {
        type: 'REMOVE_EXPENSE',
        id: -1
    };

    const state = expenseReducer(expenses,action);
    expect(state).toEqual(expenses);
});

test('should add an expense',()=>{
    const action = {
        type: 'ADD_EXPENSE',
        expense: {
            id:'10',
            desc: 'Swimming',
            note: 'Weekly',
            amount:250,
            createAt: 0
        }
    };

    const state = expenseReducer(expenses,action);
    expect(state).toEqual( [...expenses,action.expense]);
});

test('should edit an expense with id',()=>{
    const action = {
        type: 'EDIT_EXPENSE',
        updates: {
            id:'1',
            desc: 'SWIMMING-GURUKUL',
            note: 'Weekly',
            amount:250,
            createAt: 0
        }
    };

    const state = expenseReducer(expenses,action);
    expect(state).toEqual( [...expenses,...action.updates]);
});

test('should not edit an expense if id not found',()=>{
    const action = {
        type: 'EDIT_EXPENSE',
        updates: {
            id:'10',
            desc: 'SWIMMING-GURUKUL',
            note: 'Weekly',
            amount:250,
            createAt: 0
        }
    };

    const state = expenseReducer(expenses,action);
    expect(state).toEqual(expenses);
});

test('should set expenses',()=>{
    
    const action = {
        type: 'SET_EXPENSES',
        expenses: expenses[0]
    };
    const state = expenseReducer(expenses,action);
    expect(state).toEqual(expenses[0]);
});