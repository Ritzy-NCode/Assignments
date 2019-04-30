import React,{Component} from 'react'
import './Display.css';

export default class DisplayRecords extends Component{

    constructor(props){
        super(props);
        this.state={
            data:[
                {
                    id:"1524",
                    name:"Abi",
                    skills:"Linux"
                },
                {
                    id:"47903",
                    name:"Abhi",
                    skills:"Angular, Javascript"
                },
                {
                    id:"324342",
                    name:"Abhishek",
                    skills:"React, JavaScript"
                },
                {
                    id:"4341",
                    name:"Ronty",
                    skills:"Vue.js, JavaScript"
                }
            ],
            editWindowOpen:false,
            personToEdit:null
        }
    }
    editRecord =(index)=>{
        this.setState({
            editWindowOpen:true,
            personToEdit:this.state.data[index]
        })  
        
    }
    render(){
        
    return(
        <div>
            <table className="table table.striped">
            <tbody>
                <tr>
                    <td>ID</td>
                    <td>Name</td>
                    <td>Skills</td>
                </tr>
                {this.state.data.map((person,index) =>
                        <tr key={index}>
                            <td>{person.id}</td>
                            <td>{person.name}</td>
                            <td>{person.skills}</td>
                            <td><button onClick={()=>this.editRecord(index)}>Edit</button></td>
                        </tr>
                        )
                    }
            </tbody></table>
            {this.state.editWindowOpen?<EditWindow  person={this.state.personToEdit}/>:null}
        </div>
    )

    }

}

const EditWindow =(props)=>{
    return(
        <div id="myModal" className="modal">
      <div className="modal-content">
      <table>
        <tbody>
        <tr>
            <td colSpan="2"><h3>Edit Record</h3></td>
        </tr>
        <tr>
            <td>Id</td>
            <td>{props.person.id}</td>
        </tr>
        <tr>
            <td>Name</td>
            <td>{props.person.name}</td>
        </tr>
        <tr>
            <td>Skills</td>
            <td>{props.person.skills}</td>
        </tr></tbody>
    </table>
   </div></div>
    )
}
