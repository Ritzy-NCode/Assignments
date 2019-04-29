import React ,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import UserOutput from './user/UserOutput';
import UserInput from './user/UserInput';

class App extends Component {
  state = {
    name:"Ritzy"
  }

  onOutPutClickHandler=(event)=>{
    this.setState (
      {
        name :event.target.value
      }
    ) 
  }

    render() {
      return (
       <div className="App">
        <h1>The React App has started succesfully.</h1>
      <UserInput changed={this.onOutPutClickHandler} name={this.state.name}/>
        <UserOutput   name={this.state.name}/>
        <UserOutput   name={this.state.name}/>
       </div>
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