import {login,logout} from '../../actions/auth';

test('should generate login action',()=>{
    const action = login('234');
    expect(action).toEqual({
        type: 'LOGIN',
        uid: '234'
    });
});

test('should generate logout action',()=>{
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT'
    });
});


