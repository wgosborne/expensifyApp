import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { addExpense } from "../actions/expenses";

const AddExpensePage = (props) => (
    <div>
        <h1>Add Expense</h1>
        <ExpenseForm
            onSubmit = {(expense) => {
                props.dispatch(addExpense(expense));
                props.history.push('/'); //switches pages using browser routing, you can still use back arrow
            }}
        />
    </div>
);

export default connect()(AddExpensePage); //first parenthesis is what we need from the state, second parenth gives access to props.dispatch