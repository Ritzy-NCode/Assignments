import React from 'react';
import './User.css';
const userOutput= (props) =>{
    return <div>
        Hi! {props.name}
                <p className="p">I am paragraph 1 </p>
                <p>I am paragraph 2</p>
            </div>
}

export default userOutput;