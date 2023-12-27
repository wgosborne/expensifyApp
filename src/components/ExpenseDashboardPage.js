import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenselistFilters from "./ExpenseListFilters";
import ExpenseSummary from "./ExpenseSummary";
import { setExpenses } from '../actions/expenses';
import database from '../firebase/firebase';

// database.ref('expenses')
//                 .once('value')
//                 .then((snapshot) => {
//                     const expenses = [];
//                     snapshot.forEach((childSnapshot) => {
//                         expenses.push({
//                             id: childSnapshot.key,
//                             ...childSnapshot.val()
//                         });
//                     });
//                     console.log(expenses);
//                 })

const ExpenseDashBoardPage = (expenses) => (
    <div>
    <ExpenseSummary />
    <ExpenselistFilters />
        <ExpenseList />
    </div>
);

export default ExpenseDashBoardPage;