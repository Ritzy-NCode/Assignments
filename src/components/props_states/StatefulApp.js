import React, {Component}from 'react'
import {Message} from './Message'


class StatefulApp extends React.Component {
    constructor(props) {
       super(props);		
       this.state = {
          data: 
          [
             {
                "id":1,
                "name":"Murthy",
                "age":"46"
             },
                 
             {
                "id":2,
                "name":"Kavitha",
                "age":"30"
             },
                 
             {
                "id":3,
                "name":"Kiran",
                "age":"40"
             }
          ]
       }
    }
    render() {
        return (
           <div>
              <Message data="Resource alignment for latest project"/>
             <h3 >Developers Enrolled</h3>
             <table className='table table-dark'>
<tbody className='table table-dark'>
                   {this.state.data.map((person, index) =>
                        <TableRow key = {index} data = {person} />)
                    }</tbody>
                 
              </table>                              
           </div>
        );
     }
  }
  
const TableRow =(props) =>{
    return(
        <div>
            <tr>
                <td>{props.data.id}</td>
                <td>{props.data.name}</td>
                <td>{props.data.age}</td>
            </tr>
        </div>
    )
}

export default StatefulApp;