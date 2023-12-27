import React from "react";
import { connect } from 'react-redux';
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses"
import { setExpenses } from "../actions/expenses";
import database from '../firebase/firebase';
import expenses from "../selectors/expenses";

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

// this.props.setExpenses(expenses)

export const ExpenseList = (props) => ( //regular component
    <div>
        {
            // database.ref('expenses')
            //     .once('value')
            //     .then((snapshot) => {
            //         const expenses = [];
            //         snapshot.forEach((childSnapshot) => {
            //             expenses.push({
            //                 id: childSnapshot.key,
            //                 ...childSnapshot.val()
            //             });
            //         });
            //         console.log(expenses);
            //         this.props.setExpenses(expenses);
            //     })
            
            props.expenses.length === 0 ? (
                <p>No Expenses</p>
            ) : (
                props.expenses.map((expense) => {
                    return <ExpenseListItem key={expense.id} {...expense} />;
                })
            )
        }
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
