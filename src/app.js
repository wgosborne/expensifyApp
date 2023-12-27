import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { setExpenses } from './actions/expenses';
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';
import database from './firebase/firebase';

const store = configureStore();

const jsx = (
    <Provider store = {store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

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
    });

    //since I am not using middleware mine takes a sec to load
    ReactDOM.render(jsx, document.getElementById('app'));
}, 3000);








//ReactDOM.render(jsx, document.getElementById('app'));
