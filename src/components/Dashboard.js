import React,{Component} from 'react';
import StatefulApp from './props_states/StatefulApp'
import Grid from './props_states/Grid'
import TextInput from './props_states/TextInput'
import TextDisplay from './props_states/TextDisplay'
import ChildParentInvoke from './parent-child/ChildParentInvoke';
import RefsDemo from './parent-child/RefsDemo';
import Context from './parent-child/context-api/Context';
import CompLifeCycle from './lifecycle/CompLifeCycle';
import WeatherComponent from './lifecycle/WeatherComponent';

export  default class Dashboard extends Component{

    constructor(props){
        super(props);
        this.state={
// add the state components 
        name:""
        }
    }

    updateName=(event)=>{
        this.setState({
            name:event.target.value
            
          })
    }
    render(){
        return(
            <div>
                <h3>Put your business components tree here.</h3>
                <StatefulApp/>
                <Grid/>
                <TextInput changed={this.updateName} />
                <TextDisplay text={this.state.name}/>
                {/* <ChildParentInvoke/> */}
                <RefsDemo/>
                <Context/>
                <CompLifeCycle/>
                <WeatherComponent/>
            </div>
        );
    }
}
