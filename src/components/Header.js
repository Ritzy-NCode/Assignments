import React from 'react';
export const Header=(props)=>{
    return(
        <div>
            <h2 className="text-info text-center">{props.title}</h2>
        </div>
    )
}

Header.defaultProps ={
    title:'No Title Provided'
}