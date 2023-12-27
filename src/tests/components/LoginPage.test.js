import React from "react";
import { shallow } from 'enzyme';
import { LoginPage } from "../../components/LoginPage";


test('should correctly render login page', () => {
    const wrapper = shallow(<LoginPage />); //shallow rendering LoginPage
    expect(wrapper).toMatchSnapshot();
});

test('should call login on button click', () => {
    const startLogin = jest.fn()
    const wrapper = shallow(<LoginPage startLogin={startLogin}/>); //shallow rendering Header
    wrapper.find('button').simulate('click');
    expect(startLogin).toHaveBeenCalled();
});