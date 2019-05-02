import React from 'react';
import CommmonStyles from './CommonStyles';


const translateProps = (props) => {
    console.log(props.useless) 
     let _styles = {...CommmonStyles.default}
    if(props.useless){
        _styles = { ..._styles,...CommmonStyles.useless};  
    }
    const newProps = {...props,styles:_styles }
    return newProps;
} 


export default (WrappedComponent) => {
    return function wrappedRender(args) {
        return WrappedComponent(translateProps(args));
    }
}