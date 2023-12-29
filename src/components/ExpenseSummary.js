import React from "react";
import numeral from 'numeral';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import selectExpensesTotal from "../selectors/expenses-total"; //this gives access to the total
import selectExpenses from "../selectors/expenses"; //this gives access to the expenses

export const ExpenseSummary = ({expenseCount, expensesTotal}) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    const formattedExpensesTotal = numeral(expensesTotal/100).format('$0,0.00');
    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Viewing <span>{expenseCount}</span> {expenseWord} totalling <span>{formattedExpensesTotal}</span></h1>
                <div className="page-header__actions">
                    <Link className='button' to='/create'>Add Expense</Link>
                </div>
            </div>
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