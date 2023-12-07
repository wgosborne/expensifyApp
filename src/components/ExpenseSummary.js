import React from "react";
import numeral from 'numeral';
import { connect } from 'react-redux';
import selectExpensesTotal from "../selectors/expenses-total"; //this gives access to the total
import selectExpenses from "../selectors/expenses"; //this gives access to the expenses

export const ExpenseSummary = ({expenseCount, expensesTotal}) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    const formattedExpensesTotal = numeral(expensesTotal/100).format('$0,0.00');
    return (
        <div>
            <h1>Viewing {expenseCount} {expenseWord} totalling {formattedExpensesTotal}</h1>
        </div>
    )
};

const mapStateToProps = (state) => { //this is what actually gives it access to the props
    const visibleExpenses = selectExpenses(state.expenses, state.filters);

    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses)
    }
};

export default connect(mapStateToProps)(ExpenseSummary);