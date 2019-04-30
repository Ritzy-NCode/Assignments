import React,{Component} from 'react';
import { interfaceExtends } from "@babel/types";
export default class WeatherComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            weather:"Sunny",
            pictures:[]
        }
    }

componentDidMount(){
    console.log("Inside componentDidUpdate() method");
    //REST Call
    fetch('https://randomuser.me/api?results:100')
    .then(results=>{
        return results.json();    
    }).then(data =>{
        let pictures=data.results.map(pic=>{
            return(
                <div key={Math.random()}>
                <img src={pic.picture.medium}/>
                </div>
            )
        })
        this.setState({pictures:pictures});
        console.log("state",this.state.pictures);
    })
}
togggleWeather= (e)=>{
    let newWeather=(this.state.weather=="Sunny"?"Rainy":"Sunny");
    this.setState({
        weather:newWeather
    })
}
render(){
    console.log("inside render() method");
    return(
        <div>
            <h1>Today Weather is:: {this.state.weather}</h1>
            <div><button onClick={this.togggleWeather}>Change Weather</button></div>
            <span>
                {this.state.pictures}
            </span>
        </div>
    )
}
}
