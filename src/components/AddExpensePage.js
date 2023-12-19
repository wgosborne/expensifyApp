import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpense, addExpense } from '../actions/expenses';
import database from '../firebase/firebase';

export class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
    database.ref('expenses').push(expense).then((ref) => {
        this.props.addExpense({
          ...expense,
          id: ref.key
            
        });
        console.log(expense, ref.key)
    }).then(() => {
        this.props.history.push('/');
    });
    //this.props.addExpense(expense);
    // this.props.history.push('/'); //switches pages using browser routing, you can still use back arrow
  };
  
  render() {
    return (
      <div>
        <h1>Add Expense</h1>
        <ExpenseForm
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addExpense: (expense) => dispatch(addExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage); //first parenthesis is what we need from the state, second parenth gives access to props.dispatch
