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
        <Footer/> 
        <input type="text" onChange={this.displayInputLength} value={this.state.userInput}/>
        {this.state.userInput.length}
        <ValidationComponent length={this.state.userInput.length} />

        {charComponents}
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
 * <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
 * 
 */
