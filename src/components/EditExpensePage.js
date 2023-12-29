import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { editExpense, removeExpense } from "../actions/expenses";
import database from '../firebase/firebase';

export class EditExpensePage extends React.Component {

    onSubmit = (expense) => {
        database.ref(`users/${this.props.auth.uid}/expenses/${this.props.expense.id}`).update({ //update only on root level, we need the slash in quotes to update nested value
            amount: expense.amount,
            createdAt: expense.createdAt,
            description: expense.description,
            note: expense.note
        });
        this.props.editExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    };

    onRemoveExpense = () => {
        database.ref(`users/${this.props.auth.uid}/expenses/${this.props.expense.id}`) //Removing data using remove
            .remove()
            .then((ref) => {
                this.props.removeExpense({ id: this.props.expense.id});
                console.log('data was removed');
            }).catch((e) => {
                console.log('did not remove data', e);
            });
        
        this.props.history.push('/');
    };

    render() {
        return(
            <div>
                <div className="page-header">
                    <div className='content-container'>
                        <h1 className='page-header__title'>Edit Expense</h1>
                    </div>
                </div>

                <div className='content-container'>

                    <ExpenseForm
                        expense={this.props.expense}
                        onSubmit = {this.onSubmit}
                    />

                    <button className='button button--secondary' onClick = {this.onRemoveExpense}>Remove Expense</button>

                </div>

            </div>
        )
    };
};

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id),
        auth: state.auth // Mapping auth state to props
    };
};

const mapDispatchToProps = (dispatch, props) => ({
    editExpense: (id, expense) => dispatch(editExpense(id, expense)),
    removeExpense: (data) => dispatch(removeExpense(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);