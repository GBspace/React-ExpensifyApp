import uuid from 'uuid';

export const addExpense = ({
    desc = '',
    note = '' , 
    amount = 0, 
    createAt = 0
   } = {}) => ({
type: 'ADD_EXPENSE',
expense: {
   id: uuid(),
   desc,
   note,
   amount,
   createAt

}
});


export const removeExpense = ({id} = {})=>({
type: 'REMOVE_EXPENSE',
id

});

export const editExpense = (id,updates)=>({
type: 'EDIT_EXPENSE',
id,
updates
});
