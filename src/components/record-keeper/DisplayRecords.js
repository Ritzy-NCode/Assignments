import React,{Component} from 'react'

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
            idToEdit:null
        }
    }
    editRecord =(e)=>{
      //  alert(event.target.value.person.id);
        this.setState({
            editWindowOpen:true,
           // idToEdit:id
        })
    }
    render(){
        
    return(
        <div>
            <table className="table table.striped">
                {this.state.data.map((person) =>
                        <tr>
                            <td>{person.id}</td>
                            <td>{person.name}</td>
                            <td>{person.skills}</td>
                            <td><button onClick={(e)=>this.editRecord(e)}>Edit</button></td>
                        </tr>
                        )
                    }

            
                    
            </table>
        </div>
    )

    }

}

const editWindow =(props)=>{
    return(
    <table>
        <tr>
            <td colspan="2">Edit Record</td>
        </tr>
        <tr>
            <td>Id</td>
            <td>props.skills</td>
        </tr>
        <tr>
            <td>Name</td>
            <td>props.Name</td>
        </tr>
    </table>)
}
