import React,{Component} from 'react';
export default class TextInput extends Component{

    constructor(props){
        super(props);
        this.state={
            inputText:"Ritzy"
        }
    }

    inputChangeHandler =(event)=>{
        this.setState ({
            inputText:event.target.value,
            enteredText:event.target.value
        })
        
    }

    render(){
        let contentDisplay=this.state.enteredText?this.state.enteredText:"";
        return(
            <div>
                <input type="text" value="You can't control me"/>
                
                <div>Enter Name:</div>
                <input type="text" value={this.state.inputText}
                onChange={this.inputChangeHandler} onKeyDown={this.props.changed}
                />
                <div>{this.state.enteredText}</div>
                {this.state.inputText?console.log("Valid"):console.log("No Data")}
            </div>
        )
    }
}