import React from 'react';
import { ShallowWrapper, mount, shallow } from 'enzyme';
//import ReactShallowRenderer from 'react-test-renderer/shallow'; //shallow rendering only renders given component, no children
import Header from '../../components/Header';

//react-test-renderer - allows us to render test components
//snapshots allow us to track data over time, we use toMatchSnapshot

test('should render Header correctly', () => {
    const wrapper = shallow(<Header />); //shallow rendering Header
    expect(wrapper.find('h1').length).toBe(1);

    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot(); //since its the first time theres no previous so it will pass

    // console.log(renderer.getRenderOutput());
});