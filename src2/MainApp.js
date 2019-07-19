  import React , {Component} from 'react';


  class MainApp extends Component {
  constructor(){
    super()
    this.state ={
      username : "",
      userage : 0
    }
    this.changeHandler = this.changeHandler.bind(this)
    this.nameChangeHandler = this.nameChangeHandler.bind(this)
    this.ageChangeHandler = this.ageChangeHandler.bind(this)
  }
  nameChangeHandler(evt){
  this.setState({
    username : evt.target.value
    })
  }

  ageChangeHandler(evt){
    this.setState({
      userage : evt.target.value
      })
    }
    changeHandler(evt){
     evt.preventDefault();
      alert(this.state.username +" "+ this.state.userage)
      }
    
  

    render(){
    return (
      <div>
        <h1>Hello from Main app</h1>
        <hr/>
        <form onSubmit ={this.changeHandler} action='#'>
          <label>username</label>
          <input type ="text" onChange ={this.nameChangeHandler} value = {this.state.username}></input>
          <br/>
          <label>age</label>
       
          <input type ="text" onChange ={this.ageChangeHandler} value = {this.state.userage}></input>
          <br/>
            <button>submit</button>
        </form>
  
      </div>
    );
  }
  }

  export default MainApp;
