import uuid from 'uuid';
import database from '../firebase/firebase';

//Normal redux steps
//component call action generator
//action generator return object
//component dispatches object
//redux store changes

//Redux with firebase steps
//component call action generator
//action generator returns function
//component dispatches function --> not supported by redux
//fucntion runs (it has the ability to dispatch other actions and do whatever it wants)


export const addExpense = (expense) => ({
type: 'ADD_EXPENSE',
expense
});

export const startAddExpense = (expenseData = {})=>{
    return (dispatch)=>{
        const {
            desc = '',
            note = '' , 
            amount = 0, 
            createAt = 0
        } = expenseData;
        const expense = {desc,note,amount,createAt };
     return database.ref('expenses')
        .push(expense)
        .then((ref)=>{
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        });
    };
};

export const removeExpense = ({id} = {})=>({
type: 'REMOVE_EXPENSE',
id

});

export const editExpense = (id,updates)=>({
type: 'EDIT_EXPENSE',
id,
updates
});
