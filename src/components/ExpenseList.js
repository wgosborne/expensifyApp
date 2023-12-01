import React from "react";
import { connect } from 'react-redux';
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses"

const ExpenseList = (props) => ( //regular component
    <div>
        <h1>Expense List</h1>
        {props.expenses.map((expense) => {
            return <ExpenseListItem key={expense.id} {...expense} />;
        })}
    </div>
);

const mapStateToProps = (state) => { //some function
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
}

export default connect(mapStateToProps)(ExpenseList); //connecting and exporting, pulls it together. Reactive
