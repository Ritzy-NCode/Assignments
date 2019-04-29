import React from 'react';
export const ValidationComponent =(props)=>{
    const MINIMUN_LENGTH =5;
    let inputLength=props.length;
    let display=inputLength<MINIMUN_LENGTH ?"Text too Short":"Valid Text";
      return(
            <div>
                {display}
            </div>
        )

}