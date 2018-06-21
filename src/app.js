
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './styles/style.scss';
import AppRouter, {history} from './routers/AppRouter';
import configureStore from './store/configureStore';
import {startSetExpense} from './actions/expenses';
import { login, logout } from './actions/auth';
import getVisibleExpenses from './selectors/expenses';
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './firebase/firebase';
import LoadingPage from './Components/LoadingPage';

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
let hasRendered = false;

const renderApp = ()=>{
    if(!hasRendered) {
        ReactDOM.render(jsx,document.getElementById('app'));
        hasRendered = true;
    }
};

ReactDOM.render(<LoadingPage />,document.getElementById('app'));
firebase.auth().onAuthStateChanged((user)=>{
    if(user) {
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpense()).then(()=>{
            renderApp();
            if(history.location.pathname === '/'){
                history.push('/dashboard');
            }
        });
    }else{
        store.dispatch(logout());
        renderApp();
        history.push("/");
    }
});

