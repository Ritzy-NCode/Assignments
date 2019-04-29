import React ,{Component } from 'react';
export default class ChildParentInvoke extends Component{
    constructor(props){
        super(props);
        this.state={
            data:"Initial Data..."
        }
        this.updateState=this.updateState.bind(this);
    }



    updateState=event=>{
        this.setState({
            data:event.target.value
        });
        console.log(event.target.value);
    }

    render(){
        return(
            <div>
            <h1 className='text-success'>Parent component</h1>
            <h2 className='text-danger bg-success'>{this.state.data}</h2>
            <br/>
            <h2 >Child Component</h2> <br/>
             
            <Content myDataProp = {this.state.data} 
                updateStateProp = {this.updateState}></Content>         
             
             <ContentSibling data={this.state.data}></ContentSibling>
          </div>
        )
    }
}

const Content =(props ) =>{
    return(<div>
       <input type="text" value={props.myDataProp} onChange={props.updateStateProp}/>
       <h5 className=".bg-warning">I am content </h5>
       <h3>{props.myDataProp}</h3>
    </div>);
}
    
 const ContentSibling =(props ) =>{
    return(<div>
        <h5 className=".bg-warning">I am content sibling</h5>
        <h4>{props.data}</h4>
    </div>);
}
    
    
    