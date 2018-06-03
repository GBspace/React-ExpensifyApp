import { createStore } from 'redux';

//Action Generators



const incrementCount = ({ incrementBy=1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy=1 } = {}) =>({
    type: 'DECREMENT',
    decrementBy
});

const resetCount = () => ({
    type: 'RESET'
});

const setCount = ({ count = 2000} = {}) => ({
    type: 'SET',
    count
});

//Reducer : pure function (output is only determined by input)
//          Never change state or action directly in reducer
//          
const countReducer = ((state = {count: 0}, action)=>{
    switch (action.type){
        case 'INCREMENT':
            // const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return{
                count: state.count+action.incrementBy
            };
        case 'DECREMENT':
            // const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return{
                 count: state.count-action.decrementBy
            };
        case 'RESET': 
            return{
                count: 0
            };
        case 'SET':
            return {
                count: action.count
            }
        default:
            return state;
    }
});

   //createStore takes one argument
    // and that is current state. And is setting current 
    //state object with default count as 0.    
const store = createStore(countReducer());

//watch changes done to redux store change.
store.subscribe(()=>{
    console.log(store.getState());
});

// const unsubscribe = store.subscribe(()=>{
//     console.log(store.getState());
// });

//Actions: -- object that get sent to store to instruct what to do
//example:
        //increment
        //decrement
        //reset
// store.dispatch({  //again execute createStore
//     type: 'INCREMENT',   //convention but not mandatory 
//     incrementBy : 5
// });

store.dispatch(incrementCount({ incrementBy: 5 }));

// unsubscribe();

store.dispatch(incrementCount());


store.dispatch(resetCount()); 


store.dispatch(decrementCount());
store.dispatch(decrementCount({decrementBy: 10}));


store.dispatch(setCount({count: 100}));
store.dispatch(setCount());
