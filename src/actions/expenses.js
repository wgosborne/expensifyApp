import { v4 as uuid } from 'uuid';
import database from '../firebase/firebase';

//Add_EXPENSE
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

//I dont use this method, I DO THIS IN ADDEXPENSEAGE.JS
export const startAddExpense = (expenseData = {}) => {
    return(dispatch) => {
    const {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
    } = expenseData;
    const expense = { description, note, amount, createdAt };
    
    database.ref('expenses').push(expense).then((ref) => {
        dispatch(addExpense({
            ...expense,
            id: ref.key
        }));
        console.log(...expense, ref.key)
    });
}};




//REMOVE_EXPENSE, I do the database in EDITEXPENSEPAGE.JS
export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id: id
});

//EDIT_EXPENSE, I do the database in EDITEXPENSEPAGE.JS
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

// SET_EXPENSES gets values from firebase and sets the array

export const setExpenses = (expensesArray) => ({
    type: 'SET_EXPENSES',
    expensesArray
});

//export const startSetExpenses, I DONT USE THIS METHOD, I DO THIS IN APP.JS
export const startSetExpenses = () => {
    return(dispatch) => {
        
        return database.ref('expenses')
            .once('value')
            .then((snapshot) => {
                const expenses = [];
                snapshot.forEach((childSnapshot) => {
                    expenses.push({
                        id: childSnapshot.key,
                        ...childSnapshot.val()
                    });
                });
                dispatch(setExpenses(expenses));
            });
}};


//used named exports


//SYNCHRONOUS
//component calls action generator
//action generator returns object
//component dispatches object
//redux store changes

//ASYNCHRONOUS
//component calls action generator
//action generator returns function
//component dispatches function 
//function runs (has the ability to dispatch other actions and do whatever it wants)