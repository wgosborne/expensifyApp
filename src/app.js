import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { setExpenses } from './actions/expenses';
import { login, logout } from './actions/auth';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from'./firebase/firebase';
import database from './firebase/firebase';
import { render } from 'enzyme';

const store = configureStore();

const jsx = (
    <Provider store = {store}>
        <AppRouter />
    </Provider>
);

let hasRendered = false;
const renderApp = () => {
    if(!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
}

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));



//routes the user based on login
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user.uid));
        setTimeout(() => {
            database.ref('expenses')
            .once('value')
            .then((snapshot) => {
                const expensesArray = [];
                snapshot.forEach((childSnapshot) => {
                    expensesArray.push({
                        id: childSnapshot.key,
                        ...childSnapshot.val()
                    });
                });
                console.log(expensesArray);
                //this.props.setExpenses(expenses);
                store.dispatch(setExpenses(expensesArray))
            }).then(() => {
                renderApp();
            });
        
            //since I am not using middleware mine takes a sec to load
            
            if(history.location.pathname === '/') { //history.location is how we get their current location
                history.push('/dashboard');
            }
        }, 100);

    } else {
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
});




//ReactDOM.render(jsx, document.getElementById('app'));
