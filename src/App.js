import React ,{Component} from 'react';
import './App.css';
//import UserOutput from './user/UserOutput';
//import UserInput from './user/UserInput';
import { Header } from './components/Header';
import { Login } from './components/Login';
import  Dashboard  from './components/Dashboard';
import { Footer } from './components/Footer';
import { ValidationComponent } from './lecturesixty/ValidationComponent';
import { CharComponent } from './lecturesixty/CharComponent';

class App extends Component {
  state = {
    name:"Ritzy",
    userInput:'',
    charComponents:""

  }

  // onOutPutClickHandler=(event)=>{
  //   this.setState (
  //     {
  //       name :event.target.value
  //     }
  //   ) 
  // }
  displayInputLength=(event)=>{
  //  this.getCharacters(event.target.value);
    this.setState({
      userInput:event.target.value
      
    })
  }
  removeSelectedChar=(index)=>{
   let inputContent=this.state.userInput.split('');
   inputContent.splice(index,1);
   let updatedContent=inputContent.join('');
   this.setState({
     userInput:updatedContent
     
   })


  }
  render() {
    //let charComponents=this.state.userInput;
    let charComponents=  this.state.userInput.split('').map(
      (a,index)=> {return <CharComponent clicked={()=>this.removeSelectedChar(index)} value={a}  key={index}/>}
    )
      return (
       <div className="App">
       <h1>The React App has started succesfully.</h1>
        <Header title="Training Session"/>
        <Login portal="Training"/>
        <Dashboard/>
        
        
        
        <h2>A small stress buster game </h2>

        <input type="text" onChange={this.displayInputLength} value={this.state.userInput}/>
        
        <ValidationComponent length={this.state.userInput.length} />
        <div>{this.state.userInput.length}</div>
        {charComponents}

        <Footer/> 
     </div>// { <UserInput changed={this.onOutPutClickHandler} name={this.state.name}/>
      //  <UserOutput   name={this.state.name}/>
        // <UserOutput   name={this.state.name}/> }
    //   </div>
      )
    }
  
}

export default App;
/***
 * 
 * 
 *
 * 
 */
