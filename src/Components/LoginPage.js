import React from 'react';
import {connect} from 'react-redux';
import {startLogin} from '../actions/auth';

//stateless functional component
export const LoginPage = ({startLogin})=>{
    return(
        <div>
           <button onClick={startLogin}> Login </button> 
        </div>
    );
};

const mapDispatchToProps = (dispatch) =>({
    startLogin : ()=>dispatch(startLogin())
});
export default connect(undefined,mapDispatchToProps)(LoginPage);
// export default LoginPage;

