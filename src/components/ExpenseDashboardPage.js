import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenselistFilters from "./ExpenseListFilters";
import ExpenseSummary from "./ExpenseSummary";

const ExpenseDashBoardPage = () => (
    <div>
    <ExpenseSummary />
    <ExpenselistFilters />
        <ExpenseList />
    </div>
);

export default ExpenseDashBoardPage;