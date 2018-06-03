//react-test-renderer

import { shallow } from 'enzyme';
import React from 'react';
import Header from '../../Components/Header';


test('should render header correctly', ()=>{
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
    

});
