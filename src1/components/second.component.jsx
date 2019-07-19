import React, {Component} from 'react';

export default class SecondComponent extends Component{
    constructor(){
        super();
        this.state ={
            title : "App Title",
            power :  5
        }
        this.clickHandler = this.clickHandler.bind(this)
        this.changeHandler = this.changeHandler.bind(this)
    }

    clickHandler(){
        console.log("clicked");
        this.setState({
            title : "Changed"
        })
    }

    changeHandler(evt){
        this.setState({
            power : evt.target.value
        })
    }

    render(){
        return (<div><h1> {this.state.title} | {this.state.power}</h1>
            {/* <button onClick = {this.clickHandler.bind(this)}>Click me</button></div>) WAY TO CHANGE THIS SCOPE AND CHANGE THE STATE */}
        {/* <button onClick = {() => this.clickHandler()}>Click me</button></div>)  */}
        <input type ="range" min ="5" max ="50" step ="5" value ={this.state.power} onChange ={this.changeHandler}></input>
        <button onClick = {this.clickHandler}>Click me</button></div>)
    }
}