import React from "react";
import { connect } from 'react-redux';

const ExpenseList = (props) => ( //regular component
    <div>
        <h1>Expense List</h1>
        {props.expenses.length}
        {props.filters.text}
    </div>
);

const mapStateToProps = (state) => { //some function
    return {
        expenses: state.expenses,
        filters: state.filters
    };
}

export default connect(mapStateToProps)(ExpenseList); //connecting and exporting, pulls it together. Reactive
