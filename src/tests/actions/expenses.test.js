import {addExpense,removeExpense,editExpense} from '../../actions/expenses';

test('should setup remove expense action', ()=>{
    const action = removeExpense({id: '123abc'});
    expect(action).toMatchObject({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
}); 

test('should setup edit expense action',()=>{
    const action = editExpense('123', {'note':'New update'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        'id' : '123',
        updates: {
        'note':'New update'
        }
    });
});

test('should setup add expense action object with provided values',()=>{
    const data = {
        desc: 'Rent',
        amount: 1234,
        createAt: 10002,
        note: 'Last month'
    };
    const action = addExpense(data);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...data,
            id: expect.any(String)
        }
    });

});

test('should setup add expense action object with default values',()=>{
    // const data = {};
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            desc : '',
            note : '' , 
            amount : 0, 
            createAt : 0
        }
    });
});