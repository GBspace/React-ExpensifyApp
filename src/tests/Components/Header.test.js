//react-test-renderer

import { shallow } from 'enzyme';
import React from 'react';
import { Header }  from '../../Components/Header';

// beforeEach(()=>{
//     const wrapper = shallow(<Header startLogout={()=>{}}/>);
// });
test('should render header correctly', ()=>{
    const wrapper = shallow(<Header startLogout={()=>{}}/>);
    expect(wrapper).toMatchSnapshot();
    

});

test('should call startLogout on button click',()=>{
    const startLogout = jest.fn();
    const wrapper = shallow(<Header startLogout={startLogout}/>);
    wrapper.find('button').simulate('click');
    expect(startLogout).toHaveBeenCalled();
   
});
