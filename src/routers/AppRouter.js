import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ExpenseDashBoardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => ( //stateless functional component, browser router does it for me
    <Router history = {history}> 
    <div>
        <Switch>
            <PublicRoute path='/' component={LoginPage} exact={true}/> 
            <PrivateRoute path='/dashboard' component={ExpenseDashBoardPage}/>
            <PrivateRoute path='/create' component={AddExpensePage}/>
            <PrivateRoute path='/edit/:id' component={EditExpensePage}/>
            <Route path='/help' component={HelpPage}/>
            <Route component={NotFoundPage}/>
        </Switch>
    </div>
    </Router>
);

export default AppRouter;
