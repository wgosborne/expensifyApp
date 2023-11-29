import {createStore, combineReducers } from 'redux';
import { v4 as uuid } from 'uuid';

//ADD_EXPENSE
const addExpense = (
    {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
    } = {}
) =>({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount, 
        createdAt
    }
});

//REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id: id
});

//EDIT_EXPENSE
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

//SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER', 
    text
});

//SORT_BY_DATE
//SORT_BY_AMOUNT
//SET_START_DATE
//SET_END_DATE

//Expenses Reducer

const expenseReducerDefaultState = [];

const expenseReducer = (state = expenseReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            //return state.concat(action.expense) //takes the array and combines it with the other and produces a new array rather than changing old
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if(expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense;
                }
            })
        default: 
            return state;
    }
};

//Filters Reducer

const filtersReducerDefaultState = {
    text:'',
    sortBy: 'date', //date or amount
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
switch (action.type) {
    case 'SET_TEXT_FILTER':
        return {
            ...state,
            text: action.text
        }
    default: 
        return state;
}};

//Store Creation

const store = createStore(
    combineReducers({
        expenses: expenseReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    console.log(store.getState());
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300 }));

//Calling remove expense
store.dispatch(removeExpense({ id: expenseOne.expense.id }));
//calling edit expense
store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 })); //pass in the expense and the change
//calling filters reducer
store.dispatch(setTextFilter('rent')); //should see expenses with test rent
store.dispatch(setTextFilter('')); //should see expenses with test rent

console.log(expenseOne);

const demoState = {
    expenses: [{
        id: 'hdhedundsk',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 54500, 
        createdAt: 0
    }],
    filters: {
        text:  'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};

const user = {
    name: 'Jen',
    age: 24
}

console.log({
    ...user, 
    location: 'Philly',
    age: 27
});