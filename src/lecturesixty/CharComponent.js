import React from 'react';
import './CharComponent.css'
export const  CharComponent = (props)=>{

    return(
        <div className="Char" onClick={props.clicked} >
            {props.value}
        </div>
    )

}