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
import LoadingPage from './components/LoadingPage';

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

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

//routes the user based on login
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log(user.uid)
        store.dispatch(login(user.uid));
        setTimeout(() => {
            database.ref(`users/${user.uid}/expenses`)
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
                if (history.location.pathname === '/') {
                    history.push('/dashboard');
                  }
            });
        
            //since I am not using middleware mine takes a sec to load
            
        }, 100);

    } else {
        store.dispatch(logout());
        console.log('logged out')
        renderApp();
        history.push('/');
    }
});




//ReactDOM.render(jsx, document.getElementById('app'));
