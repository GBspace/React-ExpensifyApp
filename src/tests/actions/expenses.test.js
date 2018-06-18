import {addExpense,removeExpense,editExpense,
        startAddExpense,setExpenses,
        startSetExpense,startRemoveExpense
        ,startEditExpense} from '../../actions/expenses';

import expenses from '../fixtures/expenses';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {database} from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);
const uid = 'testuid';
const defaultAuthState = {auth: {uid}};

beforeEach((done)=>{
    const expensesData = {};
    expenses.forEach(({id,desc,note,amount,createAt})=>{
        expensesData[id] = {desc,note,amount,createAt};
    });
    database.ref(`users/${uid}/expenses`).set(expensesData).then(()=>done());
});

test('should setup remove expense action', ()=>{
    const action = removeExpense({id: '123abc3'});
    expect(action).toMatchObject({
        type: 'REMOVE_EXPENSE',
        id: '123abc3'
    });
}); 

test('should remove expense from firebase',(done)=>{
    const store = createMockStore(defaultAuthState);
    const id = expenses[2].id;
    store.dispatch(startRemoveExpense({id})).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'REMOVE_EXPENSE',
            id
        });
        return database.ref(`users/${uid}/expense/${id}`).once('value');
    }).then((snapshot)=>{
        expect(snapshot.val()).toBeFalsy();
        done();
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

        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot)=>{
            expect(snapshot.val()).toEqual(expenseData);
            done();
        });
});


test('should add expense with defaults to database and store',(done)=>{
    const store = createMockStore(defaultAuthState); //intial state passed 
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
                ...expenseDefault
            }
        });

        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot)=>{
            expect(snapshot.val()).toEqual(expenseDefault);
            done();
        });
});


test('should setup set expenses action object with data' , ()=>{
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    });
});

test('should fetch expenses from firebase',(done)=>{
    const store = createMockStore({});
    store.dispatch(startSetExpense()).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
        });
        done();
    });
});

test('should test startEditExpense' , (done)=>{
    const id = [0].id;
    const updates = {
        note: 'new note'
    }

    const store = createMockStore(defaultAuthState);
    store.dispatch(startEditExpense(id,updates)).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'EDIT_EXPENSE',
            id,
            updates
        });
        return database.ref(`users/${uid}/expenses/${id}`).once('value');
    }).then((snapshot)=>{
        expect(snapshot.val().note).toBe(updates.note);
        done();
    });
});
