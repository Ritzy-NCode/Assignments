import React, {Component} from 'react';

 export default class CompLifeCycle extends Component{
    constructor (props){
        //Initialization phase
        super(props);
        this.state= {
            data:0, 
            msg:"Initial Data"
        }   
       // this.setNewNumber =this.setNewNumber.bind(this);
    //   this.updateState=this.updateState.bind(this);
    }


    setNewNumber = e =>{
        this.setState(
            {
                data:this.state.data+1
            }
        )
    }

    updateState = e =>{
        this.setState(
            {
                msg:e.target.value
            }
        )
    }

    //Initial Render 
    render(){
        return(
            <div>
                <button onClick={event =>this.setNewNumber(event)}>INCREASE </button>
                <Content myNumber={this.state.data}/>
                <br/>
                <input type="text" value={this.state.msg} onChange={event =>this.updateState(event)}/>
                <h3>{this.state.msg}</h3>
            </div>
        )
    }

}//parent Component is completed


class Content extends Component{
    constructor(props){
        super(props);
        this.state={
            name:'Murthy'
        }
        console.log("In Constructor:: "+props.myNumber);
        console.log("1. Content Constructor Fired::Initialization Phase");
        this.handleScroll=this.handleScroll.bind(this);
    }

    handleScroll(){
        console.log("Handle Scroll is executed");
    }

//The component willMount is invoked only once before initial rendering .
// it is  a good place to set initial state
    componentWillMount(){
        console.log(" componentWillMount() = >"+this.props.myNumber);
    }

//important hook fires only once
    componentDidMount() {
        console.log(" componentDidMount() ==> This will be fired only once");
    }
//deprecated
    componentWillReceiveProps(nextProps){
        console.log(" componentWillReceiveProps()=> Set default props here and validate props here");
        console.log("Props in Component will receive::"+nextProps.myNumber);
        this.setState({
            isPassed:nextProps.myNumber>=60
        })  
    }
//replacement of componentWillReceiveProps
    static getDerivedStateFromProps(props,state){
        console.log("getDerivedStateFromProps()=>"+state.name);
        return{};
    }

//invoked before rendering
//when new state or props are being received
//this wont be called at initial rendering.
    shouldComponentUpdate(nextProps,nextState){
        console.log("shouldComponentUpdate() =>Decide whether to rerender or not.");
        console.log(nextState);
        console.log("Component is rendered");
        return nextProps.myNumber>3?true:false;
    }
   //Use this as an opportunity to prepare for an update.
    componentWillUpdate(nextProps, nextState) {
    //- check props & state before updating state
        console.log('componentWillUpdate()=>' +nextProps.myNumber );
    }
    componentDidUpdate(){
        console.log("componentDidUpdate=>Compoment Did Update..");
    }

    componentDidCatch(err){
        console.log("componentDidCatch()=>Some error has occurred");
    }

    componentWillUnmount(){
        console.log("componentWillUnmount()=>Component will unmount -release the resources here.");
    }

    render(){
        return(
            <div>
                <h3>{this.props.myNumber}</h3>
            </div>
        )
    }
}