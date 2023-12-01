import React from "react";
import { connect } from 'react-redux';
import { removeExpense } from "../actions/expenses";

// export a stateless functional component
// description, amount, createdAt value

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt}) => (
    <div>
        <h3>{description}</h3>
        <p>{amount} - {createdAt}</p>
        <button onClick = {() => {
            dispatch(removeExpense({id}));
        }}>Remove</button>
    </div>
);

export default connect()(ExpenseListItem);