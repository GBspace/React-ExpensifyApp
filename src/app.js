
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './styles/style.scss';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {startSetExpense} from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'react-dates/lib/css/_datepicker.css';
import {firebase} from './firebase/firebase';



const store = configureStore();
// store.dispatch(addExpense({
//     desc: 'Water bill',
//     note : 'May' , 
//     amount : 300, 
//     createAt : 2000
// }));

// store.dispatch(addExpense({
//     desc: 'Grocery',
//     note : 'May' , 
//     amount : 400, 
//     createAt : 21000
// }));

// store.dispatch(addExpense({
//     desc: 'gas Bill',
//     note : 'May' , 
//     amount : 650, 
//     createAt : 20000
// }));
// store.dispatch(setTextFilter('Bill'));
// console.log(store.getState());
// store.dispatch(setTextFilter('Water'));
// console.log(store.getState());

// setTimeout(()=>{
//     store.dispatch(setTextFilter('Bill'));
// }, 3000);

// const visibleExpenses = getVisibleExpenses(store.getState().expense,store.getState().filters);
// console.log(visibleExpenses);

const jsx = (
    <Provider store={store}> 
        <AppRouter />
    </Provider>
    
);

ReactDOM.render(<p>Loading...</p>,document.getElementById('app'));
store.dispatch(startSetExpense()).then(()=>{
    ReactDOM.render(jsx,document.getElementById('app'));
});

firebase.auth().onAuthStateChanged((user)=>{
    if(user) {
        console.log("Logged In");
    }else{
        console.log("Logged Out");
    }
});

