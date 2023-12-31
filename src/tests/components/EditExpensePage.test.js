import React from "react";
import { shallow } from 'enzyme';
import expenses from "../fixtures/expenses";
import { EditExpensePage } from "../../components/EditExpensePage";

let editExpense, removeExpense, history, wrapper;

beforeEach(() => {
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<EditExpensePage 
        editExpense={editExpense}
        removeExpense={removeExpense} 
        history={history}
        expense={expenses[0]}
    />)
});

test('should render EditExpensePage', () => {
    expect(wrapper).toMatchSnapshot();
});

// test('should handle editExpense', () => {
//     wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
//     expect(history.push).toHaveBeenLastCalledWith('/');
//     expect(editExpense).toHaveBeenLastCalledWith(expenses[0].id, expenses[0]);
// });

// test('should handle removeExpense', () => {
//     wrapper.find('button').simulate('click');
//     expect(history.push).toHaveBeenLastCalledWith('/');
//     expect(removeExpense).toHaveBeenLastCalledWith({
//         id: expenses[0].id
//     });
// });