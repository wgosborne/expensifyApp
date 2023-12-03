import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: -1
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add an expense', () => {
    const newExpense = {
        id: '4',
        description: 'laundry',
        note: '',
        amount: 250,
        createdAt: 20000
    };

    const action = {
        type: 'ADD_EXPENSE',
        expense: newExpense
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, newExpense]);
});

test('should edit an expense', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            description: 'water bill'
        }
    };

    const state = expensesReducer(expenses, action);
    expect(state[1].description).toBe('water bill');

});

test('should not edit expense if expense not found', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: -1,
        updates: {
            description: 'water bill'
        }
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});