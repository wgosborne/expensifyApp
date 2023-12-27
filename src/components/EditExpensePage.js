import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { editExpense, removeExpense } from "../actions/expenses";
import database from '../firebase/firebase';

export class EditExpensePage extends React.Component {

    onSubmit = (expense) => {
        this.props.editExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    };

    onRemoveExpense = () => {
        database.ref(`expenses/${this.props.expense.id}`) //Removing data using remove
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
                <ExpenseForm
                    expense={this.props.expense}
                    onSubmit = {this.onSubmit}
                />
                <button onClick = {this.onRemoveExpense}>Remove</button>
            </div>
        )
    };
};

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    };
};

const mapDispatchToProps = (dispatch, props) => ({
    editExpense: (id, expense) => dispatch(editExpense(id, expense)),
    removeExpense: (data) => dispatch(removeExpense(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);