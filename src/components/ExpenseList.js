import React from "react";
import { connect } from 'react-redux';
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses"
import { setExpenses } from "../actions/expenses";
import database from '../firebase/firebase';
import expenses from "../selectors/expenses";


export const ExpenseList = (props) => ( //regular component
    <div className="content-container">
        <div className="list-header">
            <div className="show-for-mobile">Expenses</div>
            <div className="show-for-desktop">Expense</div>
            <div className="show-for-desktop">Amount</div>
        </div>

        <div className="list-body">
            {           
                props.expenses.length === 0 ? (
                    <div className="list-item list-item--message">
                        <span>No expenses</span>
                    </div>
                ) : (
                    props.expenses.map((expense) => {
                        return <ExpenseListItem key={expense.id} {...expense} />;
                    })
                )
            }
        </div>
    </div>
);

const mapStateToProps = (state) => { //some function
    // database.ref('expenses')
    //             .once('value')
    //             .then((snapshot) => {
    //                 const expenses = [];
    //                 snapshot.forEach((childSnapshot) => {
    //                     expenses.push({
    //                         id: childSnapshot.key,
    //                         ...childSnapshot.val()
    //                     });
    //                 });
    //                 console.log(expenses);
    //             })
    // this.setState({expenses});
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
}

export default connect(mapStateToProps)(ExpenseList); //connecting and exporting, pulls it together. Reactive
