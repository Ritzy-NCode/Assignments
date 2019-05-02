import React from 'react';
import StylesWrapper from './hoc/StylesWrapper';
const ButtonOne = (props)=>{
    return(
        <button  style={props.styles} >{props.children} </button>
    )
}
export default StylesWrapper(ButtonOne);