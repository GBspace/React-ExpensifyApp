import React from 'react';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import ExpenseDashboardPage from '../Components/ExpenseDashboardPage';
import AddExpensePage from '../Components/AddExpensePage';
import EditExpensePage from '../Components/EditExpensePage';
import HelpPage from '../Components/HelpPage';
import NotFoundPage from '../Components/NotFoundPage';
import Header from '../Components/Header';

//props will pass down only to component value to route
const AppRouter = ()=>(
    <BrowserRouter>  
    <div>
        <Header />
        <Switch> 
             <Route path= "/" component={ExpenseDashboardPage} exact = {true}/>
             <Route path= "/create" component={AddExpensePage} />
             <Route path= "/edit/:id" component = {EditExpensePage} />
             <Route path= "/help" component = {HelpPage}/>
             <Route component= {NotFoundPage} />
        </Switch>
    </div>
    
</BrowserRouter>
);
// browser router can have either 0 or 1 child, not more than that.
//react router does not matches the complete path but just the starting point. 
//ex: paths matching with /create will return / and /create both.
export default AppRouter;
