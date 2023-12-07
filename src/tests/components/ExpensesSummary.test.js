import React from "react";
import { ExpenseSummary } from "../../components/ExpenseSummary";
import { shallow } from "enzyme";

test('should render ExpenseSummary with 1 expense', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={1} expensesTotal={235} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseSummary with multiple expenses', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={23} expensesTotal={6942069420} />);
    expect(wrapper).toMatchSnapshot();
});