import React from 'react';
import {shallow} from 'enzyme';
import NotFoundPage from '../../Components/NotFoundPage';

test('should display notFoundPage correctly',()=>{
    const wrapper=shallow(<NotFoundPage />);
    expect(wrapper).toMatchSnapshot();
});