import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenselistFilters from "./ExpenseListFilters";

const ExpenseDashBoardPage = () => (
    <div>
    <ExpenselistFilters />
        <ExpenseList />
    </div>
);

export default ExpenseDashBoardPage;