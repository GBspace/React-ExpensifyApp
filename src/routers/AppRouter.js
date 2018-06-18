import React from 'react';
import { Router , Route,Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ExpenseDashboardPage from '../Components/ExpenseDashboardPage';
import AddExpensePage from '../Components/AddExpensePage';
import EditExpensePage from '../Components/EditExpensePage';
import HelpPage from '../Components/HelpPage';
import NotFoundPage from '../Components/NotFoundPage';
import LoginPage from '../Components/LoginPage';
import PrivateRoute from './PrivateRoute';

export const history = createHistory();
//props will pass down only to component value to route
const AppRouter = ()=>(
    <Router history={history}>  
    <div>
        <Switch> 
             <Route path= "/" component={LoginPage} exact = {true}/>
             <PrivateRoute path= "/dashboard" component= {ExpenseDashboardPage} />
             <PrivateRoute path= "/create" component={AddExpensePage} />
             <PrivateRoute path= "/edit/:id" component = {EditExpensePage} />
             <Route path= "/help" component = {HelpPage}/>
             <Route component= {NotFoundPage} />
        </Switch>
    </div>
</Router>
);
// browser router can have either 0 or 1 child, not more than that.
//react router does not matches the complete path but just the starting point. 
//ex: paths matching with /create will return / and /create both.
export default AppRouter;
