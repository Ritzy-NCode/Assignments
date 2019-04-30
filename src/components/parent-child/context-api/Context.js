import React,{Component} from 'react';
const MyContext=React.createContext();
class MyProvider extends Component{
    constructor(props){
        super(props);
        this.state ={
            name:'Murthy',
            salary:5000, 
            job:'Engineer'
        }
    }

    render(){
        return(
            <MyContext.Provider value={
                {
                    state:this.state,
                    incrementSalary :() =>{
                        this.setState({
                            salary: this.state.salary+1000
                        })
                    }
                }
            }>
            {this.props.children}
            </MyContext.Provider>
        )
    }

}

export default class Context extends Component{
    render(){
        return(
            <MyProvider>
                <div className="bg-success">
                    <h2 className="bg-info">React Context API demo</h2>
                    <Family/>
                </div>
            </MyProvider>
        )
    }
}



const Family= ()=>{
    return(
        <div>
            <Person/>
            <Employee/>
        </div>
    )
}

class Employee extends Component{
    render(){
        return(
            <div>
                <MyContext.Consumer>
                    {
                        (context)=>(
                            <>
                                <p>Hi! {context.state.name}</p>
                                <p>Your salary is  {context.state.salary}</p>
                                <p>As per our records you are an {context.state.job}</p>
                            </>
                        )
                    }
                </MyContext.Consumer>
            </div>
        )
    }
}
class Person extends Component{
    render(){
        return(
            <div>
                <MyContext.Consumer>
                    {
                        (context)=>(
                            <>
                                <h3 className="bg-primary"> Person Details </h3>
                                <p>Hi! {context.state.name}</p>
                                <p className="bg-danger">Salary: {context.state.salary}</p>
                                <p>Job: {context.state.job}</p>
                                <button className="btn btn-primary"
                                onClick={context.incrementSalary}
                                >Salary: {context.state.salary}</button>
                            </>
                        )
                    }
                </MyContext.Consumer>
            </div>
        )
    }
}

