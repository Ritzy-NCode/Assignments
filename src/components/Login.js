import React from 'react';

export function Login(props){
     return(
        <div>
        <h3><a href="https://verizon.com">Login to {props.portal}</a></h3>
        </div>)
}
Login.defaultProps={
    portal:"No Portal Provided"
}