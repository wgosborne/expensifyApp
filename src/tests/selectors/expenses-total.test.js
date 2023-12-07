import selectExpensesTotal from "../../selectors/expenses-total";
import expenses from "../fixtures/expenses";

test('should return 0 if no expenses', () => {
    const res = selectExpensesTotal([]);
    expect(res).toEqual(0);
});

test('should correctly get the total for one expense', () => {
    const res = selectExpensesTotal([expenses[0]]);
    expect(res).toEqual(195);
});

test('should add up multiple expenses', () => {
    const res = selectExpensesTotal(expenses);
    expect(res).toEqual(74115);
});