import { addExpense, editExpense, removeExpense, setExpenses } from "../../actions/expenses";
import expenses from '../fixtures/expenses';
// beforeEach(() => {
//     databse
// })

//testing remove expense
test('should set up remove espense action object', () => {
    const action = removeExpense({ id: '123' });
    expect(action).toEqual({ //conpares the actual values of objects or arrays so we need toEqual for objects and arrays. It iterates over things inside
        type: 'REMOVE_EXPENSE',
        id: '123'
    });
});

//testing edit expense
test('should set up edit expense action object', () => {
    const action = editExpense( '123', {note: 'New note value'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123',
        updates: { note: 'New note value' }
    })
});

test('should set up add expense action object with provided values', () => {
    const expenseDate = {
        id: '-NlpL0fkmdNpf6-kfVbA',
        description: 'Rent',
        amount: 100000000,
        createdAt: 69420,
        note: 'last months rent'
    };

    const action = addExpense(expenseDate);

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseDate,
            id: expect.any(String) //because the id is guuid we can just keep it general, just telling it to expect a string
        }
    });
});

test('should set up add expense action object with default values', () => {
    const expenseData = {
        id: '-NlpL0fkmdNpf6-kfVbA',
        description: '',
        note: '',
        amount: 0,
        createdAt: 0
    }

    const action = addExpense(expenseData);

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

// test('should setup set expense action object with data', () => {
//     const action = setExpenses(expenses);
//     expect(action).toEqual({
//         type: 'SET_EXPENSES',
//         expenses
//     });
// });

