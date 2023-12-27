import React from "react";
import { shallow } from 'enzyme';
import { LoginPage } from "../../components/LoginPage";


test('should correctly render login page', () => {
    const wrapper = shallow(<LoginPage />); //shallow rendering LoginPage
    expect(wrapper).toMatchSnapshot();
});