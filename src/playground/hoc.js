//Higher order component -- a component (HOC) that renders another component. Its a design pattern
//reuse
//render hijacking
//prop manipulation
//abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        This is some info : {props.info}
    </div>
);

const WithAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p> This is private info</p> }
            <WrappedComponent {...props}/>
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) =>(
        <div>
            {props.isAuthenticated ? (<WrappedComponent {...props} />) : (<p>Please login to view</p>)}
      </div>
    );
};

const AuthInfo = requireAuthentication(Info);

const AdminInfo = WithAdminWarning(Info);

// ReactDOM.render(<AdminInfo isAdmin={false} info = "NAME is GB"/>, document.getElementById("app"));

ReactDOM.render(<AuthInfo isAuthenticated={true} info = "NAME is GB"/>, document.getElementById("app"));