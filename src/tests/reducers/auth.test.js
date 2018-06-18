import authReducer from '../../reducers/auth';

const defaultAuthState = {}

test('should test state when default is matched',()=>{
    const state = authReducer(undefined,'@@INIT');
    expect(state).toEqual({});
});

test('should set uid for logged in',()=>{
    const action = {
        type: 'LOGIN',
        uid: '123'
    };

    const state = authReducer(undefined,action);
    expect(state.uid).toBe('123');
});

test('should set empty object when logged out',()=>{
    const action = {type: 'LOGOUT'};

    const state = authReducer(undefined,action);
    expect(state).toEqual({});
});
