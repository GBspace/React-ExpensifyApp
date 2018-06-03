import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

//Actions:  
//          ADD_EXPENSE
//          EDIT_EXPENSE
//          REMOVE_EXPENSE
//          SET_TEXT_FILTERS
//          SORT_BY_DATE
//          SET_START_DATE
//          SET_END_DATE



//Action generator
const addExpense = ({
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


const removeExpense = ({id} = {})=>({
    type: 'REMOVE_EXPENSE',
    id
    
});

const editExpense = (id,updates)=>({
    type: 'EDIT_EXPENSE',
    id,
    updates
});


const setTextFilter = (text = '')=>({
    type: 'SET_TEXT_FILTER',
    text
});

const sortByAmount = ()=>({
    type: 'SORT_BY_AMOUNT',
    sortBy: 'amount'
});

const sortByDate = ()=>({
    type: 'SORT_BY_DATE',
    sortBy: 'date'
});

const setStartDate = (startDate)=>({  //no need to set undefined as default as it is taken by default
    type: 'SET_START_DATE',
    startDate
});

const setEndDate = (endDate)=>({  //no need to set undefined as default as it is taken by default
    type: 'SET_END_DATE',
    endDate
});

//CREATE 2 REDUCERS ONE FOR EACH PROP OF DEMOSTATE
//Expense reducer

const expenseReducerDefaultState = [];

const expenseReducer = (state = expenseReducerDefaultState ,action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state,action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter(({id})=>id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map((expense)=>{
                if(expense.id === action.id){
                    return{
                        ...expense,
                        ...action.updates
                    };
                }else{
                    return expense;
                }
            });
        default:
            return state;
    }
};

//Filter Reducer
const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};
const filterReducer = (state = filterReducerDefaultState,action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: action.sortBy
            };
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: action.sortBy
            };       
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            };  
        case 'SET_END_DATE' :
            return  {
                ...state,
                endDate: action.endDate
            };           
        default: 
            return state;
    }
};


//get visibile expenses

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense)=>{
        const startDateMatch = typeof startDate !== 'number' || expense.createAt >= startDate;
        const endDateMatch = typeof startDate !== 'number' || expense.createAt <= endDate;
        const textMatch = expense.desc.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
        // return textMatch;
        // return startDateMatch && endDateMatch;
    }).sort((a,b)=>{
        if(sortBy==='date') {
            return a.createAt < b.createAt ? 1 : -1;
        }
        else if(sortBy==='amount'){
            return a.amount > b.amount ? 1 : -1;
        }
    });
};

//Store creation

const store = createStore(
                combineReducers({
                    expense: expenseReducer,
                    filters: filterReducer
                }));

store.subscribe(()=>{
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expense,state.filters);
    console.log(visibleExpenses);
});
const exp2 = store.dispatch(addExpense({desc: 'Coffee',amount: 200 , createAt: -1000}));
const exp3 = store.dispatch(addExpense({desc: 'tea',amount: 150, createAt: 50000}));
const exp1 = store.dispatch(addExpense({desc: 'Rent',amount: 100 , createAt: 1000}));
  
//return value from dispatch is the action value

/*console.log(exp3);

store.dispatch(removeExpense( { id: exp1.expense.id }));
store.dispatch(editExpense(exp2.expense.id , {
    desc: 'Midnight Mocha'
}));

*/
// store.dispatch(setTextFilter('rent'));

// store.dispatch(setTextFilter(''));

store.dispatch(sortByAmount()); //setting the sort by property to amount
store.dispatch(sortByDate()); //setting the sort by property to date

store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());

store.dispatch(setEndDate(1250));


const demoState = {
    expense: [{
        id: '123',      
        desc: 'Rent',
        note: 'Settle Soon',
        amount: 13000,
        createAt: 0
    }],
    filters : {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }


};

// const obj = {
//     name: 'GB',
//     age: '30'
// };

// console.log({
//     age: 18,
//     ...obj,
//     location: 'BLR'
// });