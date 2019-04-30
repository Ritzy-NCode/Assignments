import React,{Fragment} from 'react';
import AddColorForm from './AddColorForm'
export default class RefsDemo extends React.Component{

    constructor(props){
        super(props);
        this.state={
            data:"Hello"
        }
        this.updateState =this.updateState.bind(this);
        this.clearInput=this.clearInput.bind(this);
    }

    updateState(e){
        this.setState({data:e.target.value});
        alert(this.refs.myInput.value);
    }
    clearInput(){
        this.setState({data:""});
        alert(this.refs.myInput.value);
        this.refs.myInput.focus();
    }
    render(){
        return(
            <div>
                Name: <input value={this.state.data}
                onChange={this.updateState} ref="myInput" id="tb1"/>

                <button onClick={this.clearInput}>Clear</button>
                <h4>{this.state.data}</h4>
                <AddColorForm/>
            </div>
        )
    }

}