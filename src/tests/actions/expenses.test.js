import {addExpense,removeExpense,editExpense,startAddExpense} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

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
    
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    });

});

test('should add expense to databse and store',(done)=>{
    const store = createMockStore({}); //intial state passed 
    const expenseData = {
        desc: 'tea',
        amount: 10,
        note: 'green',
        createAt: 1000000
    };
    store.dispatch(startAddExpense(expenseData)).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });

        database.ref(`expenses/${actions[0].expense.id}`).once('value').then((snapshot)=>{
            expect(snapshot.val()).toEqual(expenseData);
            done();
        });

        
    });

});


test('should add expense with defaults to databse and store',()=>{
    const store = createMockStore({}); //intial state passed 
    const expenseDefault = {
        desc: '',
        amount: 0,
        note: '',
        createAt: 0
    };
    store.dispatch(startAddExpense()).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });

        database.ref(`expenses/${actions[0].expense.id}`).once('value').then((snapshot)=>{
            expect(snapshot.val()).toEqual(expenseDefault);
            done();
        });

        
    });
});

// test('should setup add expense action object with default values',()=>{
//     // const data = {};
//     const action = addExpense();
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: {
//             id: expect.any(String),
//             desc : '',
//             note : '' , 
//             amount : 0, 
//             createAt : 0
//         }
//     });
// });